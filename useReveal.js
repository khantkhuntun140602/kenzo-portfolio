// src/composables/useReveal.js
// v-reveal: adds the .reveal / .is-visible animation classes when an
// element scrolls into the viewport. Registered globally in main.js.

export const vReveal = {
  mounted(el, binding) {
    el.classList.add('reveal')
    if (typeof binding.value === 'number') {
      el.style.setProperty('--i', binding.value)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('is-visible')
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(el)
    el._revealObserver = observer
  },
  unmounted(el) {
    el._revealObserver?.disconnect()
  },
}
