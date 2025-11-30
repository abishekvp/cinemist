<script setup>
import { ref, computed } from 'vue'

const movieName = ref('')
const username = ref('')
const clues = ref(['', '', '', '', ''])
const submitted = ref(false)

// Mock queue length calculation
const queueLength = ref(5) // Example: 5 puzzles in queue
const estimatedDate = computed(() => {
  const date = new Date()
  date.setDate(date.getDate() + queueLength.value + 1)
  return date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
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

const submitPuzzle = () => {
  // Validate
  if (!movieName.value || !username.value || clues.value.some(c => !c.trim())) {
    alert('Please fill in all fields')
    return
  }

  // TODO: Send to Firebase
  console.log('Submitting:', { 
    movieName: movieName.value, 
    username: username.value,
    clues: clues.value 
  })
  submitted.value = true
}
</script>

<template>
  <div class="submit-view">
    <h1 class="title">Submit a Puzzle</h1>

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
      <button @click="submitted = false" class="btn-secondary action-btn">
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
</style>
