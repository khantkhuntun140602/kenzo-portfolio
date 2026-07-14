// src/composables/useTheme.js
import { ref, watch } from 'vue'

const STORAGE_KEY = 'kenzo-theme'

function getInitialTheme() {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved === 'light' || saved === 'dark') return saved
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches
  return prefersLight ? 'light' : 'dark'
}

const theme = ref(getInitialTheme())

function applyTheme(value) {
  document.documentElement.setAttribute('data-theme', value)
  localStorage.setItem(STORAGE_KEY, value)
}

applyTheme(theme.value)

watch(theme, (value) => applyTheme(value))

export function useTheme() {
  function toggleTheme() {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  }
  return { theme, toggleTheme }
}
