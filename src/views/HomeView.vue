<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { rotatePuzzleIfNeeded, getCurrentDisplayPuzzle } from "../firebase/puzzleRotation";
import { doc, getDoc, collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import confetti from "canvas-confetti";
import ClueCard from "../components/ClueCard.vue";
import GuessInput from "../components/GuessInput.vue";
import GameControls from "../components/GameControls.vue";

const puzzle = ref(null);
const loading = ref(true);
const noPuzzle = ref(false);
const puzzleStats = ref({});
const onlineCount = ref(0);
let statsInterval = null;
let onlineInterval = null;

const currentClueIndex = ref(0);
const gameState = ref("playing"); // playing, won, lost
const feedback = ref(""); // '', 'wrong'

const isLastClue = computed(() => {
  if (!puzzle.value) return false;
  return currentClueIndex.value === puzzle.value.clues.length - 1;
});

const fetchPuzzleStats = async () => {
  try {
    const docRef = doc(db, "puzzleStats", "current");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      puzzleStats.value = docSnap.data().clueCounts || {};
    } else {
      puzzleStats.value = {};
    }
  } catch (e) {
    console.error("Error fetching stats:", e);
  }
};

const fetchOnlineUsers = async () => {
  try {
    const cutoff = new Date(Date.now() - 5 * 60 * 1000);
    const q = query(collection(db, "activeUsers"), where("lastActive", ">", cutoff));
    const snapshot = await getDocs(q);
    onlineCount.value = snapshot.size;
  } catch (e) {
    console.error("Error fetching online users:", e);
  }
};

const saveProgress = () => {
  if (!puzzle.value) return;
  const progress = {
    clueIndex: currentClueIndex.value,
    gameState: gameState.value,
    puzzleId: puzzle.value.id || puzzle.value.sourceId || 'unknown'
  };
  localStorage.setItem(`cinemist_progress_${progress.puzzleId}`, JSON.stringify(progress));
};

const loadProgress = () => {
  if (!puzzle.value) return;
  const puzzleId = puzzle.value.id || puzzle.value.sourceId || 'unknown';
  const saved = localStorage.getItem(`cinemist_progress_${puzzleId}`);
  
  if (saved) {
    try {
      const progress = JSON.parse(saved);
      if (progress.puzzleId === puzzleId) {
        currentClueIndex.value = progress.clueIndex;
        gameState.value = progress.gameState;
      }
    } catch (e) {
      console.error("Error loading progress:", e);
    }
  }
};

import { httpsCallable } from 'firebase/functions';
import { functions } from '../firebase/config';

// ... (existing imports)

// ... (existing state)

const pingPresence = httpsCallable(functions, 'pingPresence');
const submitSolution = httpsCallable(functions, 'submitSolution');

// ... (existing functions)

onMounted(async () => {
  try {
    // First, check if rotation is needed and rotate if necessary
    const rotationResult = await rotatePuzzleIfNeeded();
    
    if (!rotationResult.success && rotationResult.reason === 'no_approved_puzzles') {
      noPuzzle.value = true;
      loading.value = false;
      return;
    }
    
    // Get the current display puzzle
    const displayPuzzle = await getCurrentDisplayPuzzle();
    
    if (displayPuzzle) {
      puzzle.value = displayPuzzle;
      loadProgress();
      fetchPuzzleStats();
      fetchOnlineUsers();
      statsInterval = setInterval(fetchPuzzleStats, 60000);
      onlineInterval = setInterval(fetchOnlineUsers, 60000);
      
      // Start pinging presence
      pingPresence();
      setInterval(() => pingPresence(), 60000); // Ping every minute
    } else {
      noPuzzle.value = true;
    }
  } catch (e) {
    console.error("Error fetching puzzle:", e);
    noPuzzle.value = true;
  } finally {
    loading.value = false;
  }
});

// ... (existing onUnmounted and watch)

// ... (existing levenshtein functions)

const handleGuess = async (guess) => {
  if (gameState.value !== "playing") return;

  const normalizedGuess = guess.toLowerCase().trim();
  // Include alternate names in targets
  const targets = [
    puzzle.value.movieName, 
    ...(puzzle.value.alternateNames || [])
  ].map(n => n.toLowerCase().trim());
  
  let bestSimilarity = 0;
  
  for (const target of targets) {
    const similarity = getSimilarity(normalizedGuess, target);
    if (similarity > bestSimilarity) {
      bestSimilarity = similarity;
    }
  }

  if (bestSimilarity >= 0.9) {
    gameState.value = "won";
    feedback.value = "";
    fireConfetti();
    
    // Submit solution stats
    try {
      await submitSolution({ clueIndex: currentClueIndex.value });
      // Refresh stats to show your own contribution
      fetchPuzzleStats();
    } catch (e) {
      console.error("Error submitting solution stats:", e);
    }
  } else if (bestSimilarity >= 0.5) {
    feedback.value = "close";
    setTimeout(() => {
      feedback.value = "";
    }, 2000);
  } else {
    feedback.value = "wrong";
    setTimeout(() => {
      feedback.value = "";
    }, 1000);
  }
};

const nextClue = () => {
  if (currentClueIndex.value < puzzle.value.clues.length - 1) {
    currentClueIndex.value++;
  }
};

const giveUp = () => {
  gameState.value = "lost";
};

const fireConfetti = () => {
  const duration = 3000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  const random = (min, max) => Math.random() * (max - min) + min;

  const interval = setInterval(function () {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);
    confetti({
      ...defaults,
      particleCount,
      origin: { x: random(0.1, 0.3), y: Math.random() - 0.2 },
    });
    confetti({
      ...defaults,
      particleCount,
      origin: { x: random(0.7, 0.9), y: Math.random() - 0.2 },
    });
  }, 250);
};
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
      <p class="credit">
        Puzzle by <span class="username">{{ puzzle.submittedBy }}</span>
      </p>

      <div class="clues-container">
        <ClueCard
          :key="currentClueIndex"
          :clue="puzzle.clues[currentClueIndex]"
          :index="currentClueIndex"
        />
      </div>

      <div v-if="gameState === 'playing'">
        <GuessInput @guess="handleGuess" />
        <div v-if="feedback === 'wrong'" class="feedback error">
          Wrong guess, try again!
        </div>
        <div v-else-if="feedback === 'close'" class="feedback warning">
          You are close! Keep going!
        </div>

        <GameControls
          :can-show-next="!isLastClue"
          :is-last-clue="isLastClue"
          @next-clue="nextClue"
          @give-up="giveUp"
        />
      </div>

      <div
        v-else-if="gameState === 'won'"
        class="result-card glass-panel success"
      >
        <h2>🎉 Correct!</h2>
        <p>
          The movie was <strong>{{ puzzle.movieName }}</strong>
        </p>
        <p>You solved it in {{ currentClueIndex + 1 }} clues.</p>
      </div>

      <div
        v-else-if="gameState === 'lost'"
        class="result-card glass-panel failure"
      >
        <h2>Game Over</h2>
        <p>
          The movie was <strong>{{ puzzle.movieName }}</strong>
        </p>
        <p>Better luck next time!</p>
      </div>

      <!-- Bottom Left: 3D Scoreboard -->
      <div class="scoreboard-3d">
        <div class="scoreboard-content">
          <h3>📊 Live Stats</h3>
          <div class="stats-list">
            <div v-for="(clue, index) in puzzle.clues" :key="index" class="stat-row">
              <span class="stat-label">Clue #{{ index + 1 }}</span>
              <div class="stat-bar-container">
                <div class="stat-bar" :style="{ width: Math.min((puzzleStats[index] || 0) * 5, 100) + '%' }"></div>
              </div>
              <span class="stat-count">{{ puzzleStats[index] || 0 }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Right: Online Users -->
      <div class="online-counter-3d">
        <div class="online-content">
          <span class="online-dot"></span>
          <span class="online-text">{{ onlineCount }} Online</span>
        </div>
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
  animation: shake 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
}

.feedback.error {
  color: #f87171;
}

.feedback.warning {
  color: #fbbf24;
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
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }
  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }
  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }
  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}

@keyframes popIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.loading-state,
.no-puzzle-state {
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
  to {
    transform: rotate(360deg);
  }
}

.sub-text {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.9rem;
}

.scoreboard-3d {
  position: fixed;
  bottom: 2rem;
  left: 2rem;
  width: 250px;
  perspective: 1000px;
  z-index: 50;
}

.scoreboard-content {
  background: rgba(15, 23, 42, 0.9);
  backdrop-filter: blur(16px);
  border: 1px solid var(--glass-border);
  border-radius: 16px;
  padding: 1rem;
  transform-style: preserve-3d;
  transform: rotateY(10deg) rotateX(5deg);
  box-shadow: 
    5px 5px 15px rgba(0, 0, 0, 0.3),
    inset 0 0 20px rgba(255, 255, 255, 0.05);
  transition: transform 0.3s ease;
}

.scoreboard-content:hover {
  transform: rotateY(0) rotateX(0) scale(1.05);
}

.scoreboard-content h3 {
  margin: 0 0 1rem 0;
  font-size: 1rem;
  color: var(--accent-color);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 0.5rem;
}

.stat-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 0.85rem;
}

.stat-label {
  width: 60px;
  color: rgba(255, 255, 255, 0.6);
}

.stat-bar-container {
  flex: 1;
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  overflow: hidden;
}

.stat-bar {
  height: 100%;
  background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
  border-radius: 3px;
  transition: width 0.5s ease;
}

.stat-count {
  width: 30px;
  text-align: right;
  font-weight: bold;
  color: white;
}

.online-counter-3d {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  perspective: 1000px;
  z-index: 50;
}

.online-content {
  background: rgba(16, 185, 129, 0.1);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(16, 185, 129, 0.3);
  border-radius: 30px;
  padding: 0.75rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transform-style: preserve-3d;
  transform: rotateY(-10deg) rotateX(5deg);
  box-shadow: 
    -5px 5px 15px rgba(0, 0, 0, 0.2),
    inset 0 0 10px rgba(16, 185, 129, 0.1);
  transition: transform 0.3s ease;
}

.online-content:hover {
  transform: rotateY(0) rotateX(0) scale(1.1);
  background: rgba(16, 185, 129, 0.2);
}

.online-dot {
  width: 10px;
  height: 10px;
  background-color: #10b981;
  border-radius: 50%;
  box-shadow: 0 0 10px #10b981;
  animation: pulse-green 2s infinite;
}

.online-text {
  color: #6ee7b7;
  font-weight: 600;
  font-size: 1rem;
}

@keyframes pulse-green {
  0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
  70% { box-shadow: 0 0 0 6px rgba(16, 185, 129, 0); }
  100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
}
</style>
