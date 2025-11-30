<script setup>
defineProps({
  clue: {
    type: String,
    required: true
  },
  index: {
    type: Number,
    required: true
  }
})
</script>

<template>
  <div class="clue-card glass-panel">
    <div class="clue-number">Clue #{{ index + 1 }}</div>
    <p class="clue-text">{{ clue }}</p>
  </div>
</template>

<style scoped>
.clue-card {
  margin: 1rem 0;
  text-align: left;
  animation: slideIn 0.5s ease-out;
}

.clue-number {
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--secondary-color);
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.clue-text {
  font-size: 1.125rem;
  line-height: 1.6;
  margin: 0;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
