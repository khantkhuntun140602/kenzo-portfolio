<script setup>
import { experience } from '../data/experience.js'
</script>

<template>
  <section id="experience" class="section experience">
    <div class="container">
      <div class="section-head">
        <p class="eyebrow">// experience</p>
        <h2 class="section-title">Timeline</h2>
        <p class="section-sub">A chronological log of what I've built and researched so far.</p>
      </div>

      <ol class="timeline">
        <li
          v-for="(item, i) in experience"
          :key="item.title"
          class="timeline__item"
          v-reveal
          :style="{ '--i': i }"
        >
          <div class="timeline__marker" aria-hidden="true"></div>
          <div class="timeline__content card">
            <span class="timeline__period">{{ item.period }}</span>
            <h3>{{ item.title }}</h3>
            <p>{{ item.detail }}</p>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.timeline {
  position: relative;
  margin-left: 8px;
  padding-left: var(--s-6);
  border-left: 2px solid var(--c-border);
  display: flex;
  flex-direction: column;
  gap: var(--s-6);
}

.timeline__item { position: relative; }

.timeline__marker {
  position: absolute;
  left: calc(-1 * var(--s-6) - 6px);
  top: 6px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--c-signal);
  box-shadow: 0 0 0 4px var(--c-bg), 0 0 0 5px var(--c-border);
}

.timeline__content { padding: var(--s-5); }

.timeline__period {
  display: inline-block;
  font-family: var(--f-mono);
  font-size: 0.75rem;
  color: var(--c-circuit);
  margin-bottom: var(--s-2);
}

.timeline__content h3 {
  font-size: 1.08rem;
  margin-bottom: var(--s-2);
}
.timeline__content p {
  color: var(--c-text-dim);
  max-width: 65ch;
}
</style>
