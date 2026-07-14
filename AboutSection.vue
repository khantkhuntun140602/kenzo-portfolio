<script setup>
import profilePlaceholder from '../assets/profile-placeholder.svg'

const points = [
  'ICT student with a growing foundation across software engineering and data systems',
  'Interested in software development and data analytics as a long-term career path',
  'Experience building web applications using .NET MVC',
  'Experience working with SQL databases for structured data storage and queries',
  'Experience creating Business Intelligence dashboards for decision-making',
  'Experience with Agent-Based Modeling and behavioral data analysis',
]
</script>

<template>
  <section id="about" class="section about">
    <div class="container about__grid">
      <div class="about__media" v-reveal>
        <img :src="profilePlaceholder" alt="Placeholder profile illustration for Kenzo" loading="lazy" width="400" height="400" />
      </div>

      <div class="about__copy">
        <p class="eyebrow">// about</p>
        <h2 class="section-title">A student who builds with data</h2>
        <p class="section-sub">
          I'm an ICT student exploring the intersection of software development and data
          analytics — turning raw information into dashboards, applications, and models that
          make decisions easier.
        </p>

        <ul class="about__list">
          <li v-for="(point, i) in points" :key="point" v-reveal :style="{ '--i': i }">
            <span class="about__bullet" aria-hidden="true">▸</span>
            {{ point }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about__grid {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: var(--s-8);
  align-items: start;
}

.about__media img {
  border-radius: var(--radius);
  border: 1px solid var(--c-border);
  width: 100%;
}

.about__list {
  margin-top: var(--s-6);
  display: flex;
  flex-direction: column;
  gap: var(--s-3);
}
.about__list li {
  display: flex;
  gap: var(--s-3);
  color: var(--c-text-dim);
  line-height: 1.55;
}
.about__bullet { color: var(--c-circuit); flex-shrink: 0; }

@media (max-width: 760px) {
  .about__grid { grid-template-columns: 1fr; }
  .about__media { max-width: 220px; }
}
</style>
