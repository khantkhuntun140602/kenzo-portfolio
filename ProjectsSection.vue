<script setup>
import { projects } from '../data/projects.js'
</script>

<template>
  <section id="projects" class="section projects">
    <div class="container">
      <div class="section-head">
        <p class="eyebrow">// projects</p>
        <h2 class="section-title">Featured Projects</h2>
        <p class="section-sub">Real builds spanning Business Intelligence, simulation modeling, and full-stack web development.</p>
      </div>

      <div class="projects__list">
        <article
          v-for="(project, i) in projects"
          :key="project.id"
          class="card project-card"
          :class="`accent-${project.accent}`"
          v-reveal
          :style="{ '--i': i }"
        >
          <div class="project-card__top">
            <h3>{{ project.title }}</h3>
            <div class="project-card__metric">
              <span class="project-card__metric-value">{{ project.metric.value }}</span>
              <span class="project-card__metric-label">{{ project.metric.label }}</span>
            </div>
          </div>

          <p class="project-card__desc">{{ project.summary }}</p>

          <div class="project-card__tech">
            <span v-for="t in project.tech" :key="t" class="tag">{{ t }}</span>
          </div>

          <ul class="project-card__features">
            <li v-for="f in project.features" :key="f">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                <path d="M5 13l4 4L19 7" />
              </svg>
              {{ f }}
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects__list {
  display: grid;
  gap: var(--s-5);
}

.project-card {
  padding: var(--s-6);
  border-left: 3px solid var(--c-border);
  position: relative;
}
.project-card.accent-signal { border-left-color: var(--c-signal); }
.project-card.accent-circuit { border-left-color: var(--c-circuit); }
.project-card:hover { transform: translateY(-2px); }

.project-card__top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--s-4);
  flex-wrap: wrap;
}
.project-card__top h3 {
  font-size: 1.25rem;
  max-width: 30ch;
}

.project-card__metric {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
}
.project-card__metric-value {
  font-family: var(--f-mono);
  font-size: 0.95rem;
  color: var(--c-signal);
}
.project-card__metric-label {
  font-size: 0.72rem;
  color: var(--c-text-faint);
}

.project-card__desc {
  margin-top: var(--s-3);
  color: var(--c-text-dim);
  max-width: 70ch;
}

.project-card__tech {
  display: flex;
  flex-wrap: wrap;
  gap: var(--s-2);
  margin-top: var(--s-4);
}

.project-card__features {
  margin-top: var(--s-4);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: var(--s-2);
  padding-top: var(--s-4);
  border-top: 1px solid var(--c-border);
}
.project-card__features li {
  display: flex;
  align-items: center;
  gap: var(--s-2);
  font-size: 0.88rem;
  color: var(--c-text-dim);
}
.project-card__features svg { color: var(--c-circuit); flex-shrink: 0; }
</style>
