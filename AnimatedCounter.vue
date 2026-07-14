<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  to: { type: Number, required: true },
  suffix: { type: String, default: '' },
  label: { type: String, required: true },
  duration: { type: Number, default: 1200 },
})

const display = ref(0)
const rootEl = ref(null)
let observer = null

function animate() {
  const start = performance.now()
  const from = 0
  function tick(now) {
    const elapsed = now - start
    const t = Math.min(elapsed / props.duration, 1)
    const eased = 1 - Math.pow(1 - t, 3)
    display.value = Math.round(from + (props.to - from) * eased)
    if (t < 1) requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)
}

onMounted(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduceMotion) {
    display.value = props.to
    return
  }
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animate()
          observer.disconnect()
        }
      })
    },
    { threshold: 0.4 }
  )
  if (rootEl.value) observer.observe(rootEl.value)
})

onUnmounted(() => observer?.disconnect())
</script>

<template>
  <div class="kpi" ref="rootEl">
    <span class="kpi__value">{{ display }}{{ suffix }}</span>
    <span class="kpi__label">{{ label }}</span>
  </div>
</template>

<style scoped>
.kpi {
  display: flex;
  flex-direction: column;
  gap: var(--s-1);
  padding: var(--s-4) var(--s-5);
  border-right: 1px solid var(--c-border);
}
.kpi:last-child { border-right: none; }

.kpi__value {
  font-family: var(--f-mono);
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--c-signal);
}
.kpi__label {
  font-size: 0.78rem;
  color: var(--c-text-dim);
  letter-spacing: 0.01em;
}

@media (max-width: 560px) {
  .kpi { padding: var(--s-3) var(--s-4); }
  .kpi__value { font-size: 1.3rem; }
}
</style>
