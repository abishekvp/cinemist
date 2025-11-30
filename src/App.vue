<script setup>
</script>

<template>
  <div class="app-container">
    <nav class="glass-panel nav-bar">
      <router-link to="/" class="logo">✨ CineMyst</router-link>
      <div class="nav-links">
        <router-link to="/">Play</router-link>
        <router-link to="/submit">Submit Puzzle</router-link>
        <router-link to="/admin">Admin</router-link>
      </div>
    </nav>
    
    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.nav-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  margin: 1rem;
  background: rgba(15, 23, 42, 0.7); /* Darker semi-transparent background */
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid var(--glass-border);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
  color: var(--text-color);
  background: linear-gradient(to right, #fff, #a5f3fc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
}

.nav-links a {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
  transition: color 0.2s;
}

.nav-links a:hover, .nav-links a.router-link-active {
  color: white;
}

.main-content {
  margin-top: 80px; /* Adjust based on navbar height */
}
</style>
