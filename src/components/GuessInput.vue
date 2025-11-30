<script setup>
import { ref } from 'vue'

const emit = defineEmits(['guess'])
const guess = ref('')

const submitGuess = () => {
  if (!guess.value.trim()) return
  emit('guess', guess.value)
  guess.value = ''
}
</script>

<template>
  <div class="guess-input-container">
    <input 
      v-model="guess" 
      @keyup.enter="submitGuess"
      type="text" 
      placeholder="Type movie name..." 
      class="input-field"
    />
    <button @click="submitGuess" class="btn-primary">Guess</button>
  </div>
</template>

<style scoped>
.guess-input-container {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

.input-field {
  flex: 1;
}
</style>
