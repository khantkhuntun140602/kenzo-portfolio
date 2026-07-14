<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container footer__inner">
      <span class="footer__logo">Kenzo<span>.</span></span>
      <p class="footer__copy">© {{ year }} Kenzo. All Rights Reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: var(--s-6) 0;
  border-top: 1px solid var(--c-border);
}
.footer__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--s-3);
}
.footer__logo {
  font-family: var(--f-display);
  font-weight: 700;
  color: var(--c-text);
}
.footer__logo span { color: var(--c-signal); }
.footer__copy {
  font-family: var(--f-mono);
  font-size: 0.78rem;
  color: var(--c-text-faint);
}
</style>
