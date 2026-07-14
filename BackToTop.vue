<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const visible = ref(false)

function onScroll() {
  visible.value = window.scrollY > 480
}

function scrollTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <transition name="pop">
    <button v-if="visible" class="back-to-top" @click="scrollTop" aria-label="Back to top">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  </transition>
</template>

<style scoped>
.back-to-top {
  position: fixed;
  right: var(--s-5);
  bottom: var(--s-5);
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--c-signal);
  color: #14151a;
  border: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 20px -6px rgba(0, 0, 0, 0.45);
  z-index: 800;
  transition: transform var(--transition);
}
.back-to-top:hover { transform: translateY(-3px); }

.pop-enter-active, .pop-leave-active { transition: all 0.25s ease; }
.pop-enter-from, .pop-leave-to { opacity: 0; transform: translateY(10px) scale(0.9); }
</style>
