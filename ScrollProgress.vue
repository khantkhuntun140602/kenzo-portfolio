<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const progress = ref(0)

function updateProgress() {
  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  progress.value = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
}

onMounted(() => {
  window.addEventListener('scroll', updateProgress, { passive: true })
  updateProgress()
})
onUnmounted(() => window.removeEventListener('scroll', updateProgress))
</script>

<template>
  <div class="scroll-progress" role="presentation">
    <div class="scroll-progress__bar" :style="{ width: progress + '%' }"></div>
  </div>
</template>

<style scoped>
.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: transparent;
  z-index: 1000;
}
.scroll-progress__bar {
  height: 100%;
  background: linear-gradient(90deg, var(--c-circuit), var(--c-signal));
  transition: width 80ms linear;
}
</style>
