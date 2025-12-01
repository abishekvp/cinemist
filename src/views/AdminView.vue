<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { collection, query, getDocs, doc, deleteDoc, addDoc, serverTimestamp, orderBy, limit, getDoc, where } from 'firebase/firestore'
import { auth, db } from '../firebase/config'
import { getCurrentDisplayPuzzle } from '../firebase/puzzleRotation'

const router = useRouter()
const isAdmin = ref(false)
const email = ref('')
const password = ref("");
const error = ref("");
const loading = ref(false);
const checkingAuth = ref(true); // Hide both login and dashboard until auth is checked

// Mock pending puzzles
const pendingPuzzles = ref([]);
const approvedPuzzles = ref([]);
const rejectedPuzzles = ref([]);
const historyPuzzles = ref([]);
const loadingPuzzles = ref(false);
const activeTab = ref("queue"); // 'queue', 'approved', 'rejected', 'history'
const displayPuzzle = ref(null);

// UI State
const notification = ref({ show: false, message: '', type: '' });
const confirmModal = ref({ show: false, title: '', message: '', onConfirm: null });

const showNotification = (message, type = 'success') => {
  notification.value = { show: true, message, type };
  setTimeout(() => {
    notification.value.show = false;
  }, 3000);
};

const showConfirm = (title, message, onConfirmAction) => {
  confirmModal.value = {
    show: true,
    title,
    message,
    onConfirm: async () => {
      await onConfirmAction();
      confirmModal.value.show = false;
    }
  };
};

const pageTitle = computed(() => {
  switch (activeTab.value) {
    case 'queue': return 'Queue (Pending)'
    case 'approved': return 'Approved Puzzles'
    case 'rejected': return 'Rejected Puzzles'
    case 'history': return 'Archived History'
    default: return 'Dashboard'
  }
})

// Fetch waiting puzzles from Firestore
const fetchPendingPuzzles = async () => {
  loadingPuzzles.value = true;
  try {
    const q = query(collection(db, "waitingPuzzles"));
    const querySnapshot = await getDocs(q);
    pendingPuzzles.value = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (e) {
    console.error("Error fetching puzzles:", e);
    showNotification("Error fetching pending puzzles", "error");
  } finally {
    loadingPuzzles.value = false;
  }
};

const fetchApprovedPuzzles = async () => {
  loadingPuzzles.value = true;
  try {
    const q = query(collection(db, "approvedPuzzles"), orderBy("createdAt", "asc"));
    const querySnapshot = await getDocs(q);
    approvedPuzzles.value = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (e) {
    console.error("Error fetching approved puzzles:", e);
    showNotification("Error fetching approved puzzles", "error");
  } finally {
    loadingPuzzles.value = false;
  }
};

const getExpectedDate = (index) => {
  const now = new Date();
  const istOffset = 5.5 * 60 * 60 * 1000;
  const istDate = new Date(now.getTime() + istOffset);
  
  // If there's a display puzzle, start from tomorrow. Otherwise start from today.
  const startOffset = displayPuzzle.value ? 1 : 0;
  
  istDate.setDate(istDate.getDate() + startOffset + index);
  
  return istDate.toLocaleDateString('en-IN', { 
    weekday: 'short', 
    day: 'numeric', 
    month: 'short' 
  });
};

const fetchRejectedPuzzles = async () => {
  loadingPuzzles.value = true;
  try {
    const q = query(collection(db, "rejectedPuzzles"));
    const querySnapshot = await getDocs(q);
    rejectedPuzzles.value = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (e) {
    console.error("Error fetching rejected puzzles:", e);
    showNotification("Error fetching rejected puzzles", "error");
  } finally {
    loadingPuzzles.value = false;
  }
};

const fetchHistoryPuzzles = async () => {
  loadingPuzzles.value = true;
  try {
    const q = query(
      collection(db, "historyPuzzles"),
      orderBy("movedToHistoryAt", "desc"),
      limit(50)
    );
    const querySnapshot = await getDocs(q);
    historyPuzzles.value = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (e) {
    console.error("Error fetching history puzzles:", e);
    showNotification("Error fetching history", "error");
  } finally {
    loadingPuzzles.value = false;
  }
};

const switchTab = (tab) => {
  activeTab.value = tab;
  if (tab === "queue") fetchPendingPuzzles();
  else if (tab === "approved") fetchApprovedPuzzles();
  else if (tab === "rejected") fetchRejectedPuzzles();
  else if (tab === "history") fetchHistoryPuzzles();
};

const fetchDisplayPuzzle = async () => {
  try {
    const puzzle = await getCurrentDisplayPuzzle();
    displayPuzzle.value = puzzle;
  } catch (e) {
    console.error("Error fetching display puzzle:", e);
  }
};

// Check if user is already logged in on mount
onMounted(() => {
  auth.onAuthStateChanged((user) => {
    if (user) {
      isAdmin.value = true;
      fetchPendingPuzzles();
      fetchDisplayPuzzle();
    } else {
      // Redirect to home if not authenticated
      router.push("/");
    }
    checkingAuth.value = false; // Auth state determined, show appropriate UI
  });
});

const login = async () => {
  if (!email.value || !password.value) {
    error.value = "Please enter email and password";
    return;
  }

  loading.value = true;
  error.value = "";

  try {
    await signInWithEmailAndPassword(auth, email.value, password.value);
    isAdmin.value = true;
    await fetchPendingPuzzles();
  } catch (e) {
    error.value = "Invalid email or password";
    console.error("Login error:", e);
  } finally {
    loading.value = false;
  }
};

const approve = async (id) => {
  try {
    // Find the puzzle in either waiting or rejected list
    const puzzle = pendingPuzzles.value.find((p) => p.id === id) || 
                   rejectedPuzzles.value.find((p) => p.id === id);
    
    if (!puzzle) {
      console.error("Puzzle not found");
      return;
    }
    
    // Determine source collection
    const sourceCollection = pendingPuzzles.value.find((p) => p.id === id) 
      ? "waitingPuzzles" 
      : "rejectedPuzzles";
    
    // Add to approvedPuzzles collection
    await addDoc(collection(db, "approvedPuzzles"), {
      movieName: puzzle.movieName,
      submittedBy: puzzle.submittedBy,
      clues: puzzle.clues,
      createdAt: puzzle.createdAt,
      approvedAt: serverTimestamp()
    });
    
    // Delete from source collection
    await deleteDoc(doc(db, sourceCollection, id));
    
    // Remove from whichever list it might be in
    pendingPuzzles.value = pendingPuzzles.value.filter((p) => p.id !== id);
    rejectedPuzzles.value = rejectedPuzzles.value.filter((p) => p.id !== id);
    
    showNotification("Puzzle approved successfully!", "success");
  } catch (e) {
    console.error("Error approving puzzle:", e);
    showNotification("Failed to approve puzzle", "error");
  }
};

const reject = async (id) => {
  try {
    // Find the puzzle in either waiting or approved list
    const puzzle = pendingPuzzles.value.find((p) => p.id === id) || 
                   approvedPuzzles.value.find((p) => p.id === id);
    
    if (!puzzle) {
      console.error("Puzzle not found");
      return;
    }
    
    // Determine source collection
    const sourceCollection = pendingPuzzles.value.find((p) => p.id === id) 
      ? "waitingPuzzles" 
      : "approvedPuzzles";
    
    // Add to rejectedPuzzles collection
    await addDoc(collection(db, "rejectedPuzzles"), {
      movieName: puzzle.movieName,
      submittedBy: puzzle.submittedBy,
      clues: puzzle.clues,
      createdAt: puzzle.createdAt,
      rejectedAt: serverTimestamp()
    });
    
    // Delete from source collection
    await deleteDoc(doc(db, sourceCollection, id));
    
    // Remove from whichever list it might be in
    pendingPuzzles.value = pendingPuzzles.value.filter((p) => p.id !== id);
    approvedPuzzles.value = approvedPuzzles.value.filter((p) => p.id !== id);
    
    showNotification("Puzzle rejected", "success");
  } catch (e) {
    console.error("Error rejecting puzzle:", e);
    showNotification("Failed to reject puzzle", "error");
  }
};

const deletePuzzle = async (id) => {
  showConfirm("Delete Puzzle", "Are you sure you want to permanently delete this puzzle?", async () => {
    try {
      // Determine which collection the puzzle is in
      let sourceCollection = "waitingPuzzles";
      if (approvedPuzzles.value.find((p) => p.id === id)) {
        sourceCollection = "approvedPuzzles";
      } else if (rejectedPuzzles.value.find((p) => p.id === id)) {
        sourceCollection = "rejectedPuzzles";
      } else if (historyPuzzles.value.find((p) => p.id === id)) {
        sourceCollection = "historyPuzzles";
      }
      
      await deleteDoc(doc(db, sourceCollection, id));
      
      // Remove from whichever list it might be in
      pendingPuzzles.value = pendingPuzzles.value.filter((p) => p.id !== id);
      approvedPuzzles.value = approvedPuzzles.value.filter((p) => p.id !== id);
      rejectedPuzzles.value = rejectedPuzzles.value.filter((p) => p.id !== id);
      historyPuzzles.value = historyPuzzles.value.filter((p) => p.id !== id);
      
      showNotification("Puzzle deleted permanently", "success");
    } catch (e) {
      console.error("Error deleting puzzle:", e);
      showNotification("Failed to delete puzzle", "error");
    }
  });
};

const rejectDisplayPuzzle = async () => {
  if (!displayPuzzle.value) return;
  
  showConfirm("Remove Live Puzzle", "Are you sure you want to remove the current live puzzle? It will be moved to the Rejected list.", async () => {
    try {
      // Add to rejectedPuzzles
      await addDoc(collection(db, "rejectedPuzzles"), {
        movieName: displayPuzzle.value.movieName,
        submittedBy: displayPuzzle.value.submittedBy,
        clues: displayPuzzle.value.clues,
        createdAt: displayPuzzle.value.createdAt || serverTimestamp(),
        rejectedAt: serverTimestamp(),
        rejectedFromDisplay: true
      });

      // Delete from displayPuzzle
      await deleteDoc(doc(db, "displayPuzzle", "current"));

      displayPuzzle.value = null;
      
      // Refresh rejected list if active
      if (activeTab.value === 'rejected') {
        fetchRejectedPuzzles();
      }
      
      showNotification("Puzzle removed from display and rejected.", "success");
    } catch (e) {
      console.error("Error rejecting display puzzle:", e);
      showNotification("Failed to remove puzzle", "error");
    }
  });
};

const logout = async () => {
  try {
    await auth.signOut();
    isAdmin.value = false;
    email.value = "";
    password.value = "";
    router.push("/");
  } catch (e) {
    console.error("Error logging out:", e);
  }
};
</script>

<template>
  <div class="admin-view">
    <!-- Notification Toast -->
    <transition name="slide-down">
      <div v-if="notification.show" :class="['notification', notification.type]">
        {{ notification.message }}
      </div>
    </transition>

    <!-- Confirmation Modal -->
    <div v-if="confirmModal.show" class="modal-overlay">
      <div class="modal-content glass-panel">
        <h3>{{ confirmModal.title }}</h3>
        <p>{{ confirmModal.message }}</p>
        <div class="modal-actions">
          <button @click="confirmModal.show = false" class="btn-cancel">Cancel</button>
          <button @click="confirmModal.onConfirm" class="btn-confirm">Confirm</button>
        </div>
      </div>
    </div>

    <div class="header-container">
      <div class="titles">
        <h1 class="title">Admin Dashboard</h1>
        <h2 class="subheading">{{ pageTitle }}</h2>
      </div>
    </div>

    <!-- Current Display Puzzle 3D Card (Fixed Right) -->
    <div v-if="!checkingAuth && isAdmin" class="display-puzzle-card-3d">
      <div v-if="displayPuzzle" class="card-content">
        <button v-if="false" @click.stop="rejectDisplayPuzzle" class="btn-card-reject" title="Remove from Display">✕</button>
        <div class="card-header">
          <h3>🎯 Live Now</h3>
          <span class="pulse-dot"></span>
        </div>
        <div class="movie-name">{{ displayPuzzle.movieName }}</div>
        <div class="card-footer">
          <span class="author">by {{ displayPuzzle.submittedBy }}</span>
          <span class="expiry">Expires 11:59 PM</span>
        </div>
      </div>
      <div v-else class="card-content empty">
        <p>⚠️ No active puzzle</p>
        <span class="auto-note">Auto-fill active</span>
      </div>
    </div>

    <div v-if="checkingAuth" class="loading-state">
      <div class="spinner"></div>
      <p>Checking authentication...</p>
    </div>

    <div v-else class="dashboard">
      <!-- Floating Sidebar -->
      <div class="floating-sidebar">
        <button
          @click="switchTab('queue')"
          :class="['sidebar-btn', { active: activeTab === 'queue' }]"
          title="Queue (Pending)"
        >
          ⏳
        </button>
        <button
          @click="switchTab('approved')"
          :class="['sidebar-btn', { active: activeTab === 'approved' }]"
          title="Approved"
        >
          ✨
        </button>
        <button
          @click="switchTab('rejected')"
          :class="['sidebar-btn', { active: activeTab === 'rejected' }]"
          title="Rejected"
        >
          🗑️
        </button>
        <button
          @click="switchTab('history')"
          :class="['sidebar-btn', { active: activeTab === 'history' }]"
          title="Archives (History)"
        >
          📜
        </button>
        <div class="sidebar-divider"></div>
        <button @click="logout" class="sidebar-btn logout-btn" title="Logout">
          👋
        </button>
      </div>



      <div v-if="loadingPuzzles" class="loading-state">
        <div class="spinner"></div>
        <p>Loading puzzles...</p>
      </div>

      <div
        v-else-if="activeTab === 'queue' && pendingPuzzles.length === 0"
        class="empty-state glass-panel"
      >
        <p>No pending puzzles to review.</p>
      </div>

      <div
        v-else-if="activeTab === 'approved' && approvedPuzzles.length === 0"
        class="empty-state glass-panel"
      >
        <p>No approved puzzles yet.</p>
      </div>

      <div
        v-else-if="activeTab === 'rejected' && rejectedPuzzles.length === 0"
        class="empty-state glass-panel"
      >
        <p>No rejected puzzles.</p>
      </div>

      <div
        v-else-if="activeTab === 'history' && historyPuzzles.length === 0"
        class="empty-state glass-panel"
      >
        <p>No archived puzzles.</p>
      </div>

      <div v-else class="puzzles-list">
        <!-- ... existing list ... -->
        <div
          v-for="puzzle in activeTab === 'queue'
            ? pendingPuzzles
            : activeTab === 'approved'
            ? approvedPuzzles
            : activeTab === 'rejected'
            ? rejectedPuzzles
            : historyPuzzles"
          :key="puzzle.id"
          class="puzzle-card glass-panel"
        >
          <!-- ... existing card content ... -->
          <div class="puzzle-header">
            <div class="puzzle-info">
              <h3 class="movie-title">🎬 {{ puzzle.movieName }}</h3>
              <div class="meta-info">
                <span class="submitter">👤 {{ puzzle.submittedBy }}</span>
                <span class="clue-count"
                  >📝 {{ puzzle.clues.length }} clues</span
                >
              </div>
            </div>
            <div v-if="activeTab === 'queue'" class="actions">
              <button @click="approve(puzzle.id)" class="btn-approve">
                ✓ Approve
              </button>
              <button @click="reject(puzzle.id)" class="btn-reject">
                ✕ Reject
              </button>
            </div>
            <div v-else-if="activeTab === 'approved'" class="actions">
              <div class="expected-date-badge">
                📅 Live: {{ getExpectedDate(approvedPuzzles.findIndex(p => p.id === puzzle.id)) }}
              </div>
              <button @click="reject(puzzle.id)" class="btn-reject">
                ✕ Reject
              </button>
            </div>
            <div v-else-if="activeTab === 'rejected'" class="actions">
              <button @click="approve(puzzle.id)" class="btn-approve">
                ✓ Approve
              </button>
              <button @click="deletePuzzle(puzzle.id)" class="btn-delete">
                🗑️ Delete
              </button>
            </div>
            <div v-else-if="activeTab === 'history'" class="actions">
              <button @click="deletePuzzle(puzzle.id)" class="btn-delete">
                🗑️ Delete
              </button>
            </div>
          </div>

          <div class="clues-section">
            <h4 class="clues-title">Clues (Hardest → Easiest)</h4>
            <ol class="clues-list">
              <li
                v-for="(clue, idx) in puzzle.clues"
                :key="idx"
                class="clue-item"
              >
                <span class="clue-number">#{{ idx + 1 }}</span>
                <span class="clue-text">{{ clue }}</span>
              </li>
            </ol>
          </div>
        </div>
      </div>

      <!-- Bottom Left: 3D Scoreboard (Removed) -->
      <!-- Bottom Right: Online Users (Removed) -->
    </div>
  </div>
</template>

<style scoped>
.admin-view {
  max-width: 800px;
  margin: 0 auto;
}

.puzzle-card {
  margin-bottom: 2rem;
  text-align: left;
  transition: transform 0.2s, box-shadow 0.2s;
}

.puzzle-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

.puzzle-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid var(--glass-border);
}

.puzzle-info {
  flex: 1;
}

.movie-title {
  margin: 0 0 0.5rem 0;
  color: var(--primary-color);
  font-size: 1.5rem;
  font-weight: 700;
}

.meta-info {
  display: flex;
  gap: 1.5rem;
  font-size: 0.9rem;
}

.submitter,
.clue-count {
  color: rgba(255, 255, 255, 0.7);
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.actions {
  display: flex;
  gap: 0.75rem;
  flex-shrink: 0;
}

.btn-approve,
.btn-reject,
.btn-delete {
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-approve {
  background: linear-gradient(135deg, #4ade80, #22c55e);
  color: #064e3b;
  box-shadow: 0 2px 8px rgba(74, 222, 128, 0.3);
}

.btn-approve:hover {
  background: linear-gradient(135deg, #22c55e, #16a34a);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(74, 222, 128, 0.4);
}

.btn-reject {
  background: linear-gradient(135deg, #f87171, #ef4444);
  color: #7f1d1d;
  box-shadow: 0 2px 8px rgba(248, 113, 113, 0.3);
}

.btn-reject:hover {
  background: linear-gradient(135deg, #ef4444, #dc2626);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(248, 113, 113, 0.4);
}

.btn-delete {
  background: linear-gradient(135deg, #94a3b8, #64748b);
  color: #1e293b;
  box-shadow: 0 2px 8px rgba(148, 163, 184, 0.3);
}

.btn-delete:hover {
  background: linear-gradient(135deg, #64748b, #475569);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(148, 163, 184, 0.4);
}

.clues-section {
  background: rgba(0, 0, 0, 0.2);
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.clues-title {
  margin: 0 0 1rem 0;
  color: var(--secondary-color);
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.clues-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.clue-item {
  display: flex;
  gap: 1rem;
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  border-left: 3px solid var(--accent-color);
  transition: background 0.2s;
}

.clue-item:hover {
  background: rgba(255, 255, 255, 0.08);
}

.clue-number {
  font-weight: 700;
  color: var(--accent-color);
  min-width: 30px;
  flex-shrink: 0;
}

.clue-text {
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.5;
}

.error-message {
  color: #f87171;
  font-size: 0.9rem;
  margin: 0;
  text-align: center;
}

.loading-state {
  text-align: center;
  padding: 2rem;
}

.spinner {
  width: 40px;
  height: 40px;
  margin: 0 auto 1rem;
  border: 4px solid rgba(255, 255, 255, 0.1);
  border-left-color: var(--primary-color);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.floating-sidebar {
  position: fixed;
  left: 2rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background: rgba(15, 23, 42, 0.9);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid var(--glass-border);
  border-radius: 16px;
  padding: 0.75rem;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
  z-index: 100;
}

.sidebar-btn {
  width: 50px;
  height: 50px;
  border: none;
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.7);
  border-radius: 12px;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sidebar-btn:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: scale(1.1);
}

.sidebar-btn.active {
  background: linear-gradient(
    135deg,
    var(--primary-color),
    var(--accent-color)
  );
  color: white;
  box-shadow: 0 2px 8px rgba(168, 85, 247, 0.4);
}

.sidebar-divider {
  height: 1px;
  background: var(--glass-border);
  margin: 0.25rem 0;
}

.logout-btn {
  background: rgba(239, 68, 68, 0.2) !important;
}

.logout-btn:hover {
  background: rgba(239, 68, 68, 0.3) !important;
  color: #f87171;
}

.display-puzzle-info {
  margin-bottom: 2rem;
  padding: 1.5rem;
}

.display-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid var(--glass-border);
}

.display-header h3 {
  margin: 0;
  color: var(--primary-color);
  font-size: 1.2rem;
}

.display-content p {
  margin: 0.5rem 0;
  color: rgba(255, 255, 255, 0.9);
}

.display-content strong {
  color: var(--secondary-color);
  margin-right: 0.5rem;
}

.no-display {
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 1rem;
}

.auto-badge {
  background: rgba(59, 130, 246, 0.2);
  color: #60a5fa;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  border: 1px solid rgba(59, 130, 246, 0.3);
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
  position: relative;
}

.titles {
  text-align: left;
}

.subheading {
  font-size: 1.5rem;
  color: var(--secondary-color);
  margin: 0.5rem 0 0 0;
  font-weight: 500;
}

.display-puzzle-card-3d {
  position: absolute;
  top: 0;
  right: 0;
  width: 220px;
  perspective: 1000px;
  z-index: 10;
}

.card-content {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  padding: 1rem;
  transform-style: preserve-3d;
  transform: rotateY(-10deg) rotateX(5deg);
  box-shadow: 
    -5px 5px 15px rgba(0, 0, 0, 0.3),
    inset 0 0 20px rgba(255, 255, 255, 0.05);
  transition: transform 0.3s ease;
}

.card-content:hover {
  transform: rotateY(0) rotateX(0) scale(1.05);
  box-shadow: 
    0 10px 25px rgba(0, 0, 0, 0.4),
    inset 0 0 20px rgba(255, 255, 255, 0.1);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.card-header h3 {
  margin: 0;
  font-size: 0.9rem;
  color: var(--accent-color);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.pulse-dot {
  width: 8px;
  height: 8px;
  background-color: #ef4444;
  border-radius: 50%;
  box-shadow: 0 0 0 rgba(239, 68, 68, 0.7);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7);
  }
  70% {
    box-shadow: 0 0 0 6px rgba(239, 68, 68, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(239, 68, 68, 0);
  }
}

.sidebar-divider {
  height: 1px;
  background: var(--glass-border);
  margin: 0.25rem 0;
}

.logout-btn {
  background: rgba(239, 68, 68, 0.2) !important;
}

.logout-btn:hover {
  background: rgba(239, 68, 68, 0.3) !important;
  color: #f87171;
}

.display-puzzle-info {
  margin-bottom: 2rem;
  padding: 1.5rem;
}

.display-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid var(--glass-border);
}

.display-header h3 {
  margin: 0;
  color: var(--primary-color);
  font-size: 1.2rem;
}

.display-content p {
  margin: 0.5rem 0;
  color: rgba(255, 255, 255, 0.9);
}

.display-content strong {
  color: var(--secondary-color);
  margin-right: 0.5rem;
}

.no-display {
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 1rem;
}

.auto-badge {
  background: rgba(59, 130, 246, 0.2);
  color: #60a5fa;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  border: 1px solid rgba(59, 130, 246, 0.3);
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
  position: relative;
}

.titles {
  text-align: left;
}

.subheading {
  font-size: 1.5rem;
  color: var(--secondary-color);
  margin: 0.5rem 0 0 0;
  font-weight: 500;
}

.display-puzzle-card-3d {
  position: fixed;
  right: 2rem;
  top: 140px;
  width: 240px;
  perspective: 1000px;
  z-index: 50;
}

.card-content {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  padding: 1rem;
  transform-style: preserve-3d;
  transform: rotateY(-10deg) rotateX(5deg);
  box-shadow: 
    -5px 5px 15px rgba(0, 0, 0, 0.3),
    inset 0 0 20px rgba(255, 255, 255, 0.05);
  transition: transform 0.3s ease;
}

.card-content:hover {
  transform: rotateY(0) rotateX(0) scale(1.05);
  box-shadow: 
    0 10px 25px rgba(0, 0, 0, 0.4),
    inset 0 0 20px rgba(255, 255, 255, 0.1);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.card-header h3 {
  margin: 0;
  font-size: 0.9rem;
  color: var(--accent-color);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.btn-card-reject {
  position: absolute;
  top: 10px;
  left: 10px;
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.2);
  color: rgba(255, 255, 255, 0.4);
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 0.8rem;
  transition: all 0.2s;
  padding: 0;
  z-index: 20;
}

.btn-card-reject:hover {
  background: rgba(239, 68, 68, 0.8);
  border-color: #ef4444;
  color: white;
  transform: scale(1.1);
  box-shadow: 0 0 10px rgba(239, 68, 68, 0.4);
}

.pulse-dot {
  width: 8px;
  height: 8px;
  background-color: #ef4444;
  border-radius: 50%;
  box-shadow: 0 0 0 rgba(239, 68, 68, 0.7);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7);
  }
  70% {
    box-shadow: 0 0 0 6px rgba(239, 68, 68, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(239, 68, 68, 0);
  }
}

.movie-name {
  font-size: 1.2rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.8rem;
  line-height: 1.2;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.6);
}

.card-content.empty {
  text-align: center;
  padding: 1.5rem;
}

.auto-note {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.4);
  display: block;
  margin-top: 0.5rem;
}
.auto-info {
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.9rem;
  font-style: italic;
}

.expected-date-badge {
  background: rgba(168, 85, 247, 0.2);
  color: #d8b4fe;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  border: 1px solid rgba(168, 85, 247, 0.3);
  display: flex;
  align-items: center;
  white-space: nowrap;
}

/* Notification Styles */
.notification {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: 500;
  z-index: 1000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.notification.error {
  background: rgba(239, 68, 68, 0.9);
  border: 1px solid #f87171;
  color: white;
}

.notification.success {
  background: rgba(34, 197, 94, 0.9);
  border: 1px solid #4ade80;
  color: white;
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(-20px);
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
}

.modal-content {
  background: #1e293b;
  padding: 2rem;
  border-radius: 16px;
  max-width: 400px;
  width: 90%;
  text-align: center;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  border: 1px solid var(--glass-border);
}

.modal-content h3 {
  margin-top: 0;
  color: white;
  font-size: 1.5rem;
}

.modal-content p {
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 2rem;
}

.modal-actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.btn-cancel,
.btn-confirm {
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s;
}

.btn-cancel {
  background: rgba(255, 255, 255, 0.1);
  color: white;
}

.btn-cancel:hover {
  background: rgba(255, 255, 255, 0.2);
}

.btn-confirm {
  background: var(--primary-color);
  color: white;
}

.btn-confirm:hover {
  filter: brightness(1.1);
  transform: translateY(-2px);
}
</style>
