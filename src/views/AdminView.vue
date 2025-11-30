<script setup>
import { ref } from 'vue'

const isAdmin = ref(false)
const password = ref('')

// Mock pending puzzles
const pendingPuzzles = ref([
  {
    id: 1,
    movieName: 'Interstellar',
    username: 'SpaceExplorer',
    clues: ['Corn fields', 'Dust storms', 'Wormhole', 'Stay', 'Murph']
  },
  {
    id: 2,
    movieName: 'The Dark Knight',
    username: 'BatFan2008',
    clues: ['Bank robbery', 'Why so serious?', 'Two-Face', 'Batpod', 'Joker']
  }
])

const login = () => {
  if (password.value === 'admin123') {
    isAdmin.value = true
  } else {
    alert('Wrong password')
  }
}

const approve = (id) => {
  pendingPuzzles.value = pendingPuzzles.value.filter(p => p.id !== id)
  // TODO: Update Firebase
}

const reject = (id) => {
  pendingPuzzles.value = pendingPuzzles.value.filter(p => p.id !== id)
  // TODO: Update Firebase
}
</script>

<template>
  <div class="admin-view">
    <h1 class="title">Admin Dashboard</h1>

    <div v-if="!isAdmin" class="login-container glass-panel">
      <h2>Admin Login</h2>
      <input 
        v-model="password" 
        type="password" 
        placeholder="Enter password" 
        class="input-field"
        @keyup.enter="login"
      />
      <button @click="login" class="btn-primary">Login</button>
    </div>

    <div v-else class="dashboard">
      <div v-if="pendingPuzzles.length === 0" class="empty-state glass-panel">
        <p>No pending puzzles to review.</p>
      </div>

      <div v-else class="puzzles-list">
        <div v-for="puzzle in pendingPuzzles" :key="puzzle.id" class="puzzle-card glass-panel">
          <div class="puzzle-header">
            <div>
              <h3>{{ puzzle.movieName }}</h3>
              <span class="submitter">by {{ puzzle.username }}</span>
            </div>
            <div class="actions">
              <button @click="approve(puzzle.id)" class="btn-approve">Approve</button>
              <button @click="reject(puzzle.id)" class="btn-reject">Reject</button>
            </div>
          </div>
          <ul class="clues-list">
            <li v-for="(clue, idx) in puzzle.clues" :key="idx">{{ clue }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.admin-view {
  max-width: 800px;
  margin: 0 auto;
}

.login-container {
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.puzzle-card {
  margin-bottom: 1.5rem;
  text-align: left;
}

.puzzle-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  border-bottom: 1px solid var(--glass-border);
  padding-bottom: 0.5rem;
}

.puzzle-header h3 {
  margin: 0;
  color: var(--primary-color);
}

.submitter {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
}

.actions {
  display: flex;
  gap: 0.5rem;
}

.btn-approve {
  background: #4ade80;
  color: #064e3b;
  border: none;
  padding: 5px 15px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

.btn-reject {
  background: #f87171;
  color: #7f1d1d;
  border: none;
  padding: 5px 15px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

.clues-list {
  list-style-type: decimal;
  padding-left: 1.5rem;
  color: rgba(255, 255, 255, 0.8);
}
</style>
