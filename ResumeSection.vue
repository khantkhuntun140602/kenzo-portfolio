<script setup>
import { resumeHighlights } from '../data/education.js'
</script>

<template>
  <section id="resume" class="section resume">
    <div class="container">
      <div class="card resume__card" v-reveal>
        <div class="resume__copy">
          <p class="eyebrow">// resume</p>
          <h2 class="section-title">Want the full picture?</h2>
          <p class="section-sub">
            One PDF covering my background across development and data — built for quick
            screening and easy sharing.
          </p>

          <ul class="resume__highlights">
            <li v-for="h in resumeHighlights" :key="h" class="tag">{{ h }}</li>
          </ul>
        </div>

        <a class="btn btn-primary resume__btn" href="/resume.pdf" download>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16" />
          </svg>
          Download Resume PDF
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.resume__card {
  padding: var(--s-7);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--s-6);
  flex-wrap: wrap;
}

.resume__highlights {
  display: flex;
  flex-wrap: wrap;
  gap: var(--s-2);
  margin-top: var(--s-4);
}

.resume__btn { flex-shrink: 0; }

@media (max-width: 700px) {
  .resume__card { flex-direction: column; align-items: flex-start; }
  .resume__btn { width: 100%; }
}
</style>
