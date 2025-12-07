<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { rotatePuzzleIfNeeded, getCurrentDisplayPuzzle } from "../firebase/puzzleRotation";
import { doc, getDoc, collection, query, where, getDocs, setDoc, onSnapshot } from "firebase/firestore";
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
let statsUnsubscribe = null;
let onlineUnsubscribe = null;

const currentClueIndex = ref(0);
const gameState = ref("playing"); // playing, won, lost
const feedback = ref(""); // '', 'wrong'

const isLastClue = computed(() => {
  if (!puzzle.value) return false;
  return currentClueIndex.value === puzzle.value.clues.length - 1;
});

// Real-time listener for puzzle stats
const setupStatsListener = () => {
  const statsRef = doc(db, "puzzleStats", "current");
  statsUnsubscribe = onSnapshot(statsRef, (docSnap) => {
    if (docSnap.exists()) {
      puzzleStats.value = docSnap.data().clueCounts || {};
    } else {
      puzzleStats.value = {};
    }
  }, (error) => {
    console.error("Error listening to stats:", error);
  });
};

// Real-time listener for online users
const setupOnlineListener = () => {
  const cutoff = new Date(Date.now() - 5 * 60 * 1000);
  const q = query(collection(db, "activeUsers"), where("lastActive", ">", cutoff));
  
  onlineUnsubscribe = onSnapshot(q, (snapshot) => {
    onlineCount.value = snapshot.size;
  }, (error) => {
    console.error("Error listening to online users:", error);
  });
  
  // Update cutoff every minute
  setInterval(() => {
    if (onlineUnsubscribe) onlineUnsubscribe();
    setupOnlineListener();
  }, 60000);
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

const pingPresence = async () => {
  try {
    // Create a simple hash from timestamp and random number for uniqueness
    const sessionId = localStorage.getItem('cinemist_session') || 
      `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    localStorage.setItem('cinemist_session', sessionId);
    
    const userRef = doc(db, 'activeUsers', sessionId);
    await setDoc(userRef, {
      lastActive: new Date()
    });
  } catch (e) {
    console.error("Error pinging presence:", e);
  }
};

const submitSolutionStats = async (clueIndex) => {
  try {
    const sessionId = localStorage.getItem('cinemist_session');
    const puzzleId = puzzle.value.id || puzzle.value.sourceId || 'current';
    const solverKey = `${puzzleId}_${sessionId}`;
    
    // Check if already solved
    const alreadySolved = localStorage.getItem(`solved_${solverKey}`);
    if (alreadySolved) return;
    
    const statsRef = doc(db, 'puzzleStats', 'current');
    const statsDoc = await getDoc(statsRef);
    
    let clueCounts = {};
    if (statsDoc.exists()) {
      clueCounts = statsDoc.data().clueCounts || {};
    }
    
    if (!clueCounts[clueIndex]) clueCounts[clueIndex] = 0;
    clueCounts[clueIndex]++;
    
    await setDoc(statsRef, { clueCounts }, { merge: true });
    localStorage.setItem(`solved_${solverKey}`, 'true');
  } catch (e) {
    console.error("Error submitting solution stats:", e);
  }
};

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
      
      // Setup real-time listeners
      setupStatsListener();
      setupOnlineListener();
      
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

onUnmounted(() => {
  if (statsUnsubscribe) statsUnsubscribe();
  if (onlineUnsubscribe) onlineUnsubscribe();
});

import { watch } from 'vue';
watch([currentClueIndex, gameState], () => {
  saveProgress();
});

// Levenshtein distance for fuzzy matching
const levenshteinDistance = (a, b) => {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;

  const matrix = [];

  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }

  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }

  return matrix[b.length][a.length];
};

const getSimilarity = (s1, s2) => {
  const longer = s1.length > s2.length ? s1 : s2;
  const shorter = s1.length > s2.length ? s2 : s1;
  const longerLength = longer.length;
  if (longerLength === 0) {
    return 1.0;
  }
  return (longerLength - levenshteinDistance(longer, shorter)) / parseFloat(longerLength);
};

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
      await submitSolutionStats(currentClueIndex.value);
      // Stats will auto-update via real-time listener
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
  animation: slideInLeft 0.3s ease;
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-10px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.stat-label {
  width: 60px;
  color: rgba(255, 255, 255, 0.6);
}

.stat-bar-container {
  flex: 1;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
  position: relative;
}

.stat-bar {
  height: 100%;
  background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
  border-radius: 4px;
  transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% {
    box-shadow: 0 0 5px rgba(168, 85, 247, 0.5);
  }
  50% {
    box-shadow: 0 0 15px rgba(168, 85, 247, 0.8);
  }
  100% {
    box-shadow: 0 0 5px rgba(168, 85, 247, 0.5);
  }
}

.stat-count {
  width: 30px;
  text-align: right;
  font-weight: bold;
  color: white;
  transition: all 0.3s ease;
}

.stat-count:has(+ .stat-bar[style*="width"]) {
  animation: countPulse 0.5s ease;
}

@keyframes countPulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
    color: var(--accent-color);
  }
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
  transition: all 0.3s ease;
}

.online-content:hover .online-text {
  color: #10b981;
  transform: scale(1.05);
}

@keyframes pulse-green {
  0% { 
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
    transform: scale(1);
  }
  50% {
    box-shadow: 0 0 0 6px rgba(16, 185, 129, 0);
    transform: scale(1.1);
  }
  100% { 
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
    transform: scale(1);
  }
}

@keyframes breathe {
  0%, 100% {
    transform: rotateY(-10deg) rotateX(5deg) scale(1);
  }
  50% {
    transform: rotateY(-10deg) rotateX(5deg) scale(1.02);
  }
}

.online-content {
  animation: breathe 3s ease-in-out infinite;
}
</style>
