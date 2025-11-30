<script setup>
import { ref, computed, onMounted } from 'vue'
import { collection, query, where, getDocs, limit } from 'firebase/firestore'
import { db } from '../firebase/config'
import confetti from 'canvas-confetti'
import ClueCard from '../components/ClueCard.vue'
import GuessInput from '../components/GuessInput.vue'
import GameControls from '../components/GameControls.vue'

const puzzle = ref(null)
const loading = ref(true)
const noPuzzle = ref(false)

const currentClueIndex = ref(0)
const gameState = ref('playing') // playing, won, lost
const feedback = ref('') // '', 'wrong'



const isLastClue = computed(() => {
  if (!puzzle.value) return false
  return currentClueIndex.value === puzzle.value.clues.length - 1
})

onMounted(async () => {
  try {
    // For now, just get the first approved puzzle. 
    // In a real app, you'd query by date: where('scheduledDate', '==', today)
    const q = query(
      collection(db, 'puzzles'), 
      where('status', '==', 'approved'),
      limit(1)
    )
    
    const querySnapshot = await getDocs(q)
    
    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0]
      puzzle.value = doc.data()
    } else {
      noPuzzle.value = true
    }
  } catch (e) {
    console.error("Error fetching puzzle:", e)
    noPuzzle.value = true
  } finally {
    loading.value = false
  }
})

const handleGuess = (guess) => {
  if (gameState.value !== 'playing') return

  if (guess.toLowerCase().trim() === puzzle.value.movieName.toLowerCase()) {
    gameState.value = 'won'
    feedback.value = ''
    fireConfetti()
  } else {
    feedback.value = 'wrong'
    setTimeout(() => {
      feedback.value = ''
    }, 1000)
  }
}

const nextClue = () => {
  if (currentClueIndex.value < puzzle.value.clues.length - 1) {
    currentClueIndex.value++
  }
}

const giveUp = () => {
  gameState.value = 'lost'
}

const fireConfetti = () => {
  const duration = 3000
  const animationEnd = Date.now() + duration
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

  const random = (min, max) => Math.random() * (max - min) + min

  const interval = setInterval(function() {
    const timeLeft = animationEnd - Date.now()

    if (timeLeft <= 0) {
      return clearInterval(interval)
    }

    const particleCount = 50 * (timeLeft / duration)
    confetti({ ...defaults, particleCount, origin: { x: random(0.1, 0.3), y: Math.random() - 0.2 } })
    confetti({ ...defaults, particleCount, origin: { x: random(0.7, 0.9), y: Math.random() - 0.2 } })
  }, 250)
}
</script>

<template>
  <div class="home-view">
    <h1 class="title">Unravel the Reel</h1>

    <div v-if="loading" class="loading-state">
      <div class="spinner"></div>
      <p>Loading today's mystery...</p>
    </div>

    <div v-else-if="noPuzzle" class="no-puzzle-state glass-panel">
      <h2>😔 Sorry bro</h2>
      <p>Inaikum ethum illa</p>
      <p class="sub-text">Indru poi nalai vaa, for a new challenge!</p>
    </div>

    <div v-else>
      <p class="credit">Puzzle by <span class="username">{{ puzzle.submittedBy }}</span></p>
      
      <div class="clues-container">
        <ClueCard 
          :key="currentClueIndex" 
          :clue="puzzle.clues[currentClueIndex]" 
          :index="currentClueIndex"
        />
      </div>

      <div v-if="gameState === 'playing'">
        <GuessInput @guess="handleGuess" />
        <div v-if="feedback === 'wrong'" class="feedback error">Wrong guess, try again!</div>
        
        <GameControls 
          :can-show-next="!isLastClue" 
          :is-last-clue="isLastClue"
          @next-clue="nextClue"
          @give-up="giveUp"
        />
      </div>

      <div v-else-if="gameState === 'won'" class="result-card glass-panel success">
        <h2>🎉 Correct!</h2>
        <p>The movie was <strong>{{ puzzle.movieName }}</strong></p>
        <p>You solved it in {{ currentClueIndex + 1 }} clues.</p>
      </div>

      <div v-else-if="gameState === 'lost'" class="result-card glass-panel failure">
        <h2>Game Over</h2>
        <p>The movie was <strong>{{ puzzle.movieName }}</strong></p>
        <p>Better luck next time!</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-view {
  max-width: 600px;
  margin: 0 auto;
}

.title {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  background: linear-gradient(to right, #a855f7, #ec4899);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.credit {
  margin-top: -1.5rem;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
}

.username {
  color: var(--accent-color);
  font-weight: 600;
}

.clues-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.feedback {
  margin-top: 1rem;
  font-weight: bold;
  animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
}

.feedback.error {
  color: #f87171;
}

.result-card {
  margin-top: 2rem;
  animation: popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.result-card.success {
  border-color: #4ade80;
  background: rgba(74, 222, 128, 0.1);
}

.result-card.failure {
  border-color: #f87171;
  background: rgba(248, 113, 113, 0.1);
}

@keyframes shake {
  10%, 90% { transform: translate3d(-1px, 0, 0); }
  20%, 80% { transform: translate3d(2px, 0, 0); }
  30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
  40%, 60% { transform: translate3d(4px, 0, 0); }
}

@keyframes popIn {
  from { opacity: 0; transform: scale(0.8); }
  to { opacity: 1; transform: scale(1); }
}

.loading-state, .no-puzzle-state {
  margin-top: 4rem;
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
  to { transform: rotate(360deg); }
}

.sub-text {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.9rem;
}
</style>
