<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import AnimatedCounter from './AnimatedCounter.vue'

const roles = ['Software Developer', 'Data Analyst', 'ICT Student']
const typed = ref('')
let roleIndex = 0
let charIndex = 0
let deleting = false
let timeoutId = null

function tick() {
  const current = roles[roleIndex]
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (reduceMotion) {
    typed.value = roles[0]
    return
  }

  if (!deleting) {
    charIndex++
    typed.value = current.slice(0, charIndex)
    if (charIndex === current.length) {
      deleting = true
      timeoutId = setTimeout(tick, 1500)
      return
    }
    timeoutId = setTimeout(tick, 75)
  } else {
    charIndex--
    typed.value = current.slice(0, charIndex)
    if (charIndex === 0) {
      deleting = false
      roleIndex = (roleIndex + 1) % roles.length
      timeoutId = setTimeout(tick, 350)
      return
    }
    timeoutId = setTimeout(tick, 35)
  }
}

function go(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

onMounted(() => {
  timeoutId = setTimeout(tick, 400)
})
onUnmounted(() => clearTimeout(timeoutId))
</script>

<template>
  <section id="hero" class="hero">
    <div class="hero__grid" aria-hidden="true"></div>

    <div class="container hero__inner">
      <p class="eyebrow">// hello_world.run()</p>

      <h1 class="hero__title">
        Hi, I'm <span class="hero__name">Kenzo</span>
      </h1>

      <p class="hero__role" aria-live="polite">
        <span>{{ typed }}</span><span class="cursor" aria-hidden="true">_</span>
      </p>

      <p class="hero__intro">
        Passionate ICT student with experience in software development, business intelligence,
        data analytics, and web applications. Interested in creating data-driven solutions that
        solve real-world problems.
      </p>

      <div class="hero__cta">
        <a class="btn btn-primary" href="/resume.pdf" download>
          Download Resume
        </a>
        <button class="btn btn-outline" @click="go('projects')">View Projects</button>
        <button class="btn btn-ghost" @click="go('contact')">Contact Me →</button>
      </div>

      <div class="kpi-strip card">
        <AnimatedCounter :to="3" suffix="+" label="Projects shipped" />
        <AnimatedCounter :to="15" suffix="+" label="Technologies used" />
        <AnimatedCounter :to="1" label="BI dashboard live" />
        <AnimatedCounter :to="2" suffix="+" label="Years of building" />
      </div>
      <p class="kpi-strip__meta">
        <span class="status-dot" aria-hidden="true"></span> last sync: just now · status: open to internships
      </p>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  padding: calc(var(--s-9) + 1rem) 0 var(--s-8);
  overflow: hidden;
}

.hero__grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(var(--c-border) 1px, transparent 1px),
    linear-gradient(90deg, var(--c-border) 1px, transparent 1px);
  background-size: 56px 56px;
  -webkit-mask-image: radial-gradient(ellipse 70% 60% at 30% 10%, black 0%, transparent 75%);
  mask-image: radial-gradient(ellipse 70% 60% at 30% 10%, black 0%, transparent 75%);
  opacity: 0.5;
  pointer-events: none;
}

.hero__inner {
  position: relative;
  max-width: 760px;
}

.hero__title {
  font-size: clamp(2.4rem, 6vw, 3.6rem);
  animation: fadeInUp 0.6s ease both;
}
.hero__name { color: var(--c-signal); }

.hero__role {
  font-family: var(--f-mono);
  font-size: clamp(1.05rem, 2.4vw, 1.35rem);
  color: var(--c-circuit);
  margin-top: var(--s-3);
  min-height: 1.7em;
  animation: fadeInUp 0.6s ease 0.1s both;
}
.cursor { animation: blink 1s step-end infinite; color: var(--c-signal); }

.hero__intro {
  margin-top: var(--s-5);
  font-size: 1.08rem;
  color: var(--c-text-dim);
  max-width: 60ch;
  animation: fadeInUp 0.6s ease 0.2s both;
}

.hero__cta {
  display: flex;
  flex-wrap: wrap;
  gap: var(--s-3);
  margin-top: var(--s-6);
  animation: fadeInUp 0.6s ease 0.3s both;
}

.kpi-strip {
  display: flex;
  margin-top: var(--s-8);
  animation: fadeInUp 0.6s ease 0.4s both;
  overflow-x: auto;
}

.kpi-strip__meta {
  margin-top: var(--s-3);
  font-family: var(--f-mono);
  font-size: 0.74rem;
  color: var(--c-text-faint);
  display: flex;
  align-items: center;
  gap: var(--s-2);
}

@media (max-width: 640px) {
  .kpi-strip { flex-wrap: wrap; }
  .kpi-strip > * { flex: 1 1 45%; }
}
</style>
