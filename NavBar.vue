<script setup>
import { ref } from 'vue'
import { useTheme } from '../composables/useTheme'

const { theme, toggleTheme } = useTheme()
const isOpen = ref(false)

const links = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

function go(id) {
  isOpen.value = false
  const el = document.getElementById(id)
  el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<template>
  <header class="nav">
    <div class="container nav__inner">
      <a href="#hero" class="nav__logo" @click.prevent="go('hero')" aria-label="Kenzo, go to top">
        Kenzo<span>.</span>
      </a>

      <nav class="nav__links" aria-label="Primary">
        <button v-for="link in links" :key="link.id" class="nav__link" @click="go(link.id)">
          {{ link.label }}
        </button>
      </nav>

      <div class="nav__actions">
        <span class="nav__status" title="Currently open to internships and entry-level roles">
          <span class="status-dot" aria-hidden="true"></span>
          Open to work
        </span>

        <button
          class="nav__theme"
          @click="toggleTheme"
          :aria-label="theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
        >
          <svg v-if="theme === 'dark'" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="4.5" />
            <path d="M12 2v2.5M12 19.5V22M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2 12h2.5M19.5 12H22M4.2 19.8l1.8-1.8M18 6l1.8-1.8" />
          </svg>
          <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5z" />
          </svg>
        </button>

        <button
          class="nav__burger"
          @click="isOpen = !isOpen"
          :aria-expanded="isOpen"
          aria-label="Toggle menu"
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>

    <transition name="drop">
      <nav v-if="isOpen" class="nav__mobile" aria-label="Mobile">
        <button v-for="link in links" :key="link.id" @click="go(link.id)">{{ link.label }}</button>
      </nav>
    </transition>
  </header>
</template>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 900;
  background: color-mix(in srgb, var(--c-bg) 88%, transparent);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--c-border);
}

.nav__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}

.nav__logo {
  font-family: var(--f-display);
  font-weight: 700;
  font-size: 1.2rem;
  color: var(--c-text);
}
.nav__logo span { color: var(--c-signal); }

.nav__links {
  display: flex;
  gap: var(--s-5);
}
.nav__link {
  background: none;
  border: none;
  color: var(--c-text-dim);
  font-size: 0.92rem;
  font-weight: 500;
  padding: var(--s-2) 0;
  transition: color var(--transition);
}
.nav__link:hover { color: var(--c-signal); }

.nav__actions {
  display: flex;
  align-items: center;
  gap: var(--s-4);
}

.nav__status {
  display: flex;
  align-items: center;
  gap: var(--s-2);
  font-family: var(--f-mono);
  font-size: 0.74rem;
  color: var(--c-text-dim);
  white-space: nowrap;
}

.nav__theme {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid var(--c-border);
  background: var(--c-bg-soft);
  color: var(--c-text);
  transition: border-color var(--transition), color var(--transition);
}
.nav__theme:hover { border-color: var(--c-signal); color: var(--c-signal); }

.nav__burger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 36px;
  height: 36px;
  background: none;
  border: none;
}
.nav__burger span {
  display: block;
  width: 20px;
  height: 2px;
  background: var(--c-text);
  margin: 0 auto;
}

.nav__mobile {
  display: none;
  flex-direction: column;
  padding: var(--s-4) var(--s-5) var(--s-5);
  border-top: 1px solid var(--c-border);
  background: var(--c-bg);
}
.nav__mobile button {
  background: none;
  border: none;
  text-align: left;
  padding: var(--s-3) 0;
  color: var(--c-text);
  font-size: 1rem;
  border-bottom: 1px solid var(--c-border);
}

.drop-enter-active, .drop-leave-active { transition: all 0.2s ease; }
.drop-enter-from, .drop-leave-to { opacity: 0; transform: translateY(-8px); }

@media (max-width: 860px) {
  .nav__links { display: none; }
  .nav__status { display: none; }
  .nav__burger { display: flex; }
  .nav__mobile { display: flex; }
}
</style>
