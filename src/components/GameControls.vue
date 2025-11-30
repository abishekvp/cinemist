<script setup>
defineProps({
  canShowNext: {
    type: Boolean,
    default: true
  },
  isLastClue: {
    type: Boolean,
    default: false
  }
})

defineEmits(['next-clue', 'give-up'])
</script>

<template>
  <div class="controls">
    <button 
      v-if="canShowNext && !isLastClue" 
      @click="$emit('next-clue')" 
      class="btn-secondary"
    >
      Show Next Clue
    </button>
    <button 
      v-if="isLastClue" 
      @click="$emit('give-up')" 
      class="btn-danger"
    >
      Reveal Answer
    </button>
  </div>
</template>

<style scoped>
.controls {
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.2);
}

.btn-danger {
  background: rgba(239, 68, 68, 0.2);
  border: 1px solid rgba(239, 68, 68, 0.5);
  color: #fca5a5;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-danger:hover {
  background: rgba(239, 68, 68, 0.3);
}
</style>
