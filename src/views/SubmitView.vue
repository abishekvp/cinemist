<script setup>
import { ref, computed, onMounted } from 'vue'
import { collection, addDoc, serverTimestamp, query, getDocs } from 'firebase/firestore'
import { db } from '../firebase/config'

const movieName = ref('')
const alternateNames = ref('')
const username = ref('')
const clues = ref(['', '', '', '', ''])
const submitted = ref(false)
const notification = ref({ show: false, message: '', type: '' })

// Queue length from Firestore
const queueLength = ref(0)
const estimatedDate = computed(() => {
  if (queueLength.value === 0) return 'Tomorrow'
  
  // Calculate date in Indian timezone
  const now = new Date()
  const istOffset = 5.5 * 60 * 60 * 1000 // IST is UTC+5:30
  const istDate = new Date(now.getTime() + istOffset)
  
  // Add queue days
  istDate.setDate(istDate.getDate() + queueLength.value + 1)
  
  return istDate.toLocaleDateString('en-IN', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    timeZone: 'Asia/Kolkata'
  })
})

const addClue = () => {
  if (clues.value.length < 10) {
    clues.value.push('')
  }
}

const removeClue = (index) => {
  if (clues.value.length > 3) {
    clues.value.splice(index, 1)
  }
}

const showNotification = (message, type = 'error') => {
  notification.value = { show: true, message, type }
  setTimeout(() => {
    notification.value.show = false
  }, 4000)
}

// Fetch queue count (approved + waiting puzzles)
const fetchQueueCount = async () => {
  try {
    // Count waiting puzzles
    const waitingQuery = query(collection(db, 'waitingPuzzles'))
    const waitingSnapshot = await getDocs(waitingQuery)
    
    // Count approved puzzles
    const approvedQuery = query(collection(db, 'approvedPuzzles'))
    const approvedSnapshot = await getDocs(approvedQuery)
    
    queueLength.value = waitingSnapshot.size + approvedSnapshot.size
  } catch (e) {
    console.error('Error fetching queue:', e)
    queueLength.value = 0
  }
}

// Fetch queue on mount
onMounted(() => {
  fetchQueueCount()
})

const submitPuzzle = async () => {
  // Validate
  if (!movieName.value || !username.value || clues.value.some(c => !c.trim())) {
    showNotification('Please fill in all fields', 'error')
    return
  }

  try {
    // Process alternate names
    const altNamesArray = alternateNames.value
      .split(',')
      .map(name => name.trim())
      .filter(name => name.length > 0)

    // Save to Firestore - waitingPuzzles collection
    await addDoc(collection(db, 'waitingPuzzles'), {
      movieName: movieName.value,
      alternateNames: altNamesArray,
      submittedBy: username.value,
      clues: clues.value,
      createdAt: serverTimestamp()
    })
    
    submitted.value = true
    
    // Reset form
    movieName.value = ''
    alternateNames.value = ''
    username.value = ''
    clues.value = ['', '', '', '', '']
  } catch (e) {
    console.error('Error submitting puzzle:', e)
    showNotification('Failed to submit puzzle. Please try again.', 'error')
  }
}
</script>

<template>
  <div class="submit-view">
    <!-- ... (existing notification) ... -->

    <h1 class="title">Publish a Puzzle</h1>

    <div v-if="!submitted" class="form-container glass-panel">
      <div class="form-group">
        <label>Your Username (for credit)</label>
        <input v-model="username" type="text" class="input-field" placeholder="e.g. MovieBuff99" />
      </div>

      <div class="form-group">
        <label>Movie Name</label>
        <input v-model="movieName" type="text" class="input-field" placeholder="e.g. The Matrix" />
      </div>

      <div class="form-group">
        <label>Alternative Titles (Optional)</label>
        <input 
          v-model="alternateNames" 
          type="text" 
          class="input-field" 
          placeholder="e.g. Matrix, Matrix 1 (comma separated)" 
        />
        <small class="hint-text">Helps with spelling variations</small>
      </div>

      <div class="form-group">
        <label>Clues (Order: Hardest to Easiest)</label>
        <div v-for="(clue, index) in clues" :key="index" class="clue-input-group">
          <span class="clue-number">#{{ index + 1 }}</span>
          <input 
            v-model="clues[index]" 
            type="text" 
            class="input-field" 
            :placeholder="`Clue #${index + 1}`" 
          />
          <button 
            v-if="clues.length > 3" 
            @click="removeClue(index)" 
            class="btn-icon"
            title="Remove clue"
          >
            ✕
          </button>
        </div>
        <button v-if="clues.length < 10" @click="addClue" class="btn-secondary small">
          ✨ Add Another Clue
        </button>
      </div>

      <button @click="submitPuzzle" class="btn-primary full-width">Submit for Approval</button>
    </div>

    <div v-else class="success-message glass-panel">
      <h2>Thank You, {{ username }}!</h2>
      <p>Your puzzle has been submitted for review.</p>
      <p class="date-info">Estimated Publication Date: <strong>{{ estimatedDate }}</strong></p>
      <p class="date-disclaimer">* Date might be sooner if queued puzzles are rejected</p>
      <button @click="submitted = false; fetchQueueCount()" class="btn-secondary action-btn">
        🔄 Submit Another
      </button>
    </div>
  </div>
</template>

<style scoped>
.submit-view {
  max-width: 600px;
  margin: 0 auto;
}

.title {
  margin-bottom: 2rem;
}

.form-container {
  text-align: left;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: var(--secondary-color);
}

.clue-input-group {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.clue-number {
  width: 30px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.5);
}

.btn-icon {
  background: none;
  border: none;
  color: #f87171;
  cursor: pointer;
  font-size: 1.2rem;
}

.btn-secondary.small {
  font-size: 0.9rem;
  padding: 8px 16px;
  margin-top: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px dashed rgba(255, 255, 255, 0.4);
  color: var(--secondary-color);
  width: 100%;
  transition: all 0.3s ease;
}

.btn-secondary.small:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: var(--secondary-color);
  transform: translateY(-2px);
}

.full-width {
  width: 100%;
  margin-top: 1rem;
}

.success-message {
  text-align: center;
  padding: 3rem;
}

.date-disclaimer {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
  font-style: italic;
  margin-top: 0.5rem;
}

.action-btn {
  margin-top: 1.5rem;
  padding: 10px 24px;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
}

.action-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.notification {
  position: fixed;
  top: 100px;
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

.slide-down-enter-from {
  opacity: 0;
  transform: translateX(-50%) translateY(-20px);
}

.slide-down-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(-20px);
}

.hint-text {
  display: block;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 0.25rem;
  font-style: italic;
}
</style>
