<script setup>
import { reactive, ref } from 'vue'

// TODO: replace these with your real profile URLs
const socials = [
  { id: 'github', label: 'GitHub', href: 'https://github.com/kenzo' },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com/in/kenzo' },
  { id: 'email', label: 'Email', href: 'mailto:kenzo@example.com' },
]

const form = reactive({ name: '', email: '', message: '' })
const errors = reactive({ name: '', email: '', message: '' })
const status = ref('idle') // idle | success

function validate() {
  errors.name = form.name.trim() ? '' : 'Please enter your name.'
  errors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? '' : 'Please enter a valid email.'
  errors.message = form.message.trim().length >= 10 ? '' : 'Message should be at least 10 characters.'
  return !errors.name && !errors.email && !errors.message
}

function handleSubmit() {
  if (!validate()) {
    status.value = 'idle'
    return
  }
  const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`)
  const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
  window.location.href = `mailto:kenzo@example.com?subject=${subject}&body=${body}`
  status.value = 'success'
}
</script>

<template>
  <section id="contact" class="section contact">
    <div class="container contact__grid">
      <div v-reveal>
        <p class="eyebrow">// contact</p>
        <h2 class="section-title">Let's build something</h2>
        <p class="section-sub">
          Open to internships and entry-level roles in software development or data analytics.
          Send a message and I'll get back to you.
        </p>

        <ul class="contact__socials">
          <li v-for="s in socials" :key="s.id">
            <a :href="s.href" target="_blank" rel="noopener noreferrer">
              <svg v-if="s.id === 'github'" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.49 0-.24-.01-1.05-.01-1.9-2.78.62-3.37-1.22-3.37-1.22-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.55 2.34 1.1 2.91.84.09-.66.34-1.1.62-1.36-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.32.1-2.75 0 0 .84-.27 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.43.2 2.49.1 2.75.64.72 1.03 1.63 1.03 2.75 0 3.94-2.35 4.81-4.58 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2z" />
              </svg>
              <svg v-else-if="s.id === 'linkedin'" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18.34V10.1H5.67v8.24h2.67zM7 8.94a1.54 1.54 0 1 0 0-3.08 1.54 1.54 0 0 0 0 3.08zm11.34 9.4v-4.53c0-2.43-1.3-3.56-3.03-3.56-1.4 0-2.02.77-2.37 1.31v-1.12H10.3c.04.78 0 8.24 0 8.24h2.66v-4.6c0-.25.02-.5.1-.68.21-.5.68-1.03 1.48-1.03 1.05 0 1.46.79 1.46 1.96v4.35h2.66z" />
              </svg>
              <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
              {{ s.label }}
            </a>
          </li>
        </ul>
      </div>

      <form class="card contact__form" novalidate @submit.prevent="handleSubmit" v-reveal :style="{ '--i': 1 }">
        <div class="field">
          <label for="name">Name</label>
          <input id="name" v-model="form.name" type="text" autocomplete="name" :aria-invalid="!!errors.name" />
          <span v-if="errors.name" class="field__error">{{ errors.name }}</span>
        </div>

        <div class="field">
          <label for="email">Email</label>
          <input id="email" v-model="form.email" type="email" autocomplete="email" :aria-invalid="!!errors.email" />
          <span v-if="errors.email" class="field__error">{{ errors.email }}</span>
        </div>

        <div class="field">
          <label for="message">Message</label>
          <textarea id="message" v-model="form.message" rows="5" :aria-invalid="!!errors.message"></textarea>
          <span v-if="errors.message" class="field__error">{{ errors.message }}</span>
        </div>

        <button type="submit" class="btn btn-primary contact__submit">Send Message</button>

        <p v-if="status === 'success'" class="contact__success" role="status">
          Your email client should now be open with the message prefilled — hit send to deliver it.
        </p>
      </form>
    </div>
  </section>
</template>

<style scoped>
.contact__grid {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: var(--s-8);
  align-items: start;
}

.contact__socials {
  display: flex;
  gap: var(--s-4);
  margin-top: var(--s-6);
  flex-wrap: wrap;
}
.contact__socials a {
  display: inline-flex;
  align-items: center;
  gap: var(--s-2);
  padding: var(--s-2) var(--s-3);
  border: 1px solid var(--c-border);
  border-radius: var(--radius-sm);
  font-size: 0.9rem;
  color: var(--c-text-dim);
  transition: border-color var(--transition), color var(--transition);
}
.contact__socials a:hover { border-color: var(--c-circuit); color: var(--c-circuit); }

.contact__form {
  padding: var(--s-6);
  display: flex;
  flex-direction: column;
  gap: var(--s-4);
}

.field { display: flex; flex-direction: column; gap: var(--s-2); }
.field label {
  font-family: var(--f-mono);
  font-size: 0.78rem;
  color: var(--c-text-dim);
}
.field input,
.field textarea {
  background: var(--c-bg);
  border: 1px solid var(--c-border);
  border-radius: var(--radius-sm);
  padding: 0.7rem 0.85rem;
  color: var(--c-text);
  font-family: var(--f-body);
  font-size: 0.95rem;
  resize: vertical;
  transition: border-color var(--transition);
}
.field input:focus,
.field textarea:focus { border-color: var(--c-signal); }
.field input[aria-invalid='true'],
.field textarea[aria-invalid='true'] { border-color: var(--c-danger); }

.field__error {
  font-size: 0.8rem;
  color: var(--c-danger);
}

.contact__submit { align-self: flex-start; margin-top: var(--s-2); }

.contact__success {
  font-size: 0.85rem;
  color: var(--c-circuit);
}

@media (max-width: 760px) {
  .contact__grid { grid-template-columns: 1fr; }
}
</style>
