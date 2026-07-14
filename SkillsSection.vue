<script setup>
import { skillCategories } from '../data/skills.js'
</script>

<template>
  <section id="skills" class="section skills">
    <div class="container">
      <div class="section-head">
        <p class="eyebrow">// skills</p>
        <h2 class="section-title">Toolkit</h2>
        <p class="section-sub">Languages, frameworks, and tools I reach for when building software or analyzing data.</p>
      </div>

      <div class="skills__grid">
        <article
          v-for="(cat, i) in skillCategories"
          :key="cat.id"
          class="card skills__card"
          v-reveal
          :style="{ '--i': i }"
        >
          <header class="skills__card-head">
            <h3>{{ cat.label }}</h3>
            <span class="skills__note">{{ cat.note }}</span>
          </header>
          <div class="skills__chips">
            <span v-for="skill in cat.skills" :key="skill" class="tag">{{ skill }}</span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: var(--s-5);
}

.skills__card {
  padding: var(--s-5);
}
.skills__card:hover {
  border-color: var(--c-circuit);
  transform: translateY(-3px);
}

.skills__card-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: var(--s-4);
  padding-bottom: var(--s-3);
  border-bottom: 1px solid var(--c-border);
}
.skills__card-head h3 {
  font-size: 1.05rem;
}
.skills__note {
  font-family: var(--f-mono);
  font-size: 0.72rem;
  color: var(--c-text-faint);
}

.skills__chips {
  display: flex;
  flex-wrap: wrap;
  gap: var(--s-2);
}
</style>
