<script setup>
import { education } from '../data/education.js'
</script>

<template>
  <section id="education" class="section education">
    <div class="container education__grid">
      <div v-reveal>
        <p class="eyebrow">// education</p>
        <h2 class="section-title">{{ education.program }}</h2>
        <p class="section-sub">Coursework that directly feeds into the projects above — from data modeling to interface design.</p>
      </div>

      <div class="education__courses card" v-reveal :style="{ '--i': 1 }">
        <h3 class="education__courses-title">Relevant Coursework</h3>
        <ul>
          <li v-for="course in education.coursework" :key="course">
            <span class="status-dot" aria-hidden="true"></span>
            {{ course }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.education__grid {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: var(--s-8);
  align-items: start;
}

.education__courses { padding: var(--s-6); }
.education__courses-title {
  font-size: 1rem;
  font-family: var(--f-mono);
  color: var(--c-text-dim);
  margin-bottom: var(--s-4);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  font-weight: 500;
}
.education__courses ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: var(--s-3);
}
.education__courses li {
  display: flex;
  align-items: center;
  gap: var(--s-3);
  font-size: 0.95rem;
}

@media (max-width: 760px) {
  .education__grid { grid-template-columns: 1fr; }
}
</style>
