# Kenzo — Portfolio

A Vue 3 + Vite personal portfolio for an ICT student / aspiring Software
Developer & Data Analyst. Built around a "live dashboard" visual language —
fitting, since the featured work is BI dashboards and data systems.

## Run locally

Requires [Node.js](https://nodejs.org) 18+.

```bash
cd kenzo-portfolio
npm install
npm run dev
```

Vite will print a local URL (usually `http://localhost:5173`). Open it in
your browser — the site hot-reloads as you edit.

To build for production:

```bash
npm run build    # outputs to dist/
npm run preview  # preview the production build locally
```

The `dist/` folder is static and can be deployed anywhere (Vercel, Netlify,
GitHub Pages, etc).

## Project structure

```
kenzo-portfolio/
├── index.html              # HTML shell, fonts, SEO meta tags
├── public/                 # static assets served as-is
│   ├── resume.pdf          # ← replace with your real resume
│   ├── favicon.svg
│   └── og-cover.svg
└── src/
    ├── main.js             # app entry, registers the v-reveal directive
    ├── App.vue             # assembles all sections
    ├── style.css           # design tokens, resets, shared utility classes
    ├── data/               # ← edit these files to change site content
    │   ├── skills.js
    │   ├── projects.js
    │   ├── experience.js
    │   └── education.js
    ├── composables/
    │   ├── useTheme.js     # dark/light mode, persisted to localStorage
    │   └── useReveal.js    # scroll-triggered fade-in directive
    ├── assets/
    │   └── profile-placeholder.svg
    └── components/
        ├── NavBar.vue
        ├── ScrollProgress.vue
        ├── HeroSection.vue
        ├── AboutSection.vue
        ├── SkillsSection.vue
        ├── ProjectsSection.vue
        ├── ExperienceSection.vue
        ├── EducationSection.vue
        ├── ResumeSection.vue
        ├── ContactSection.vue
        ├── FooterSection.vue
        ├── AnimatedCounter.vue
        └── BackToTop.vue
```

## What to customize before publishing

1. **Resume** — swap `public/resume.pdf` for your real resume (same filename
   so the "Download Resume" buttons keep working).
2. **Profile photo** — replace `src/assets/profile-placeholder.svg` with a
   real photo import in `AboutSection.vue` (`import profile from '../assets/your-photo.jpg'`).
3. **Social links & email** — edit the `socials` array and the `mailto:`
   address in `src/components/ContactSection.vue`.
4. **Content** — all copy for Skills, Projects, Experience, and Education
   lives in `src/data/*.js`, not hardcoded in components — edit there.
5. **Contact form** — it currently opens the visitor's email client via a
   prefilled `mailto:` link (no backend needed). To collect submissions
   directly, wire `handleSubmit()` in `ContactSection.vue` to a service like
   Formspree, EmailJS, or your own API endpoint.
6. **Colors/fonts** — all design tokens are CSS variables at the top of
   `src/style.css` (`--c-signal`, `--c-circuit`, `--f-display`, etc.) — change
   them once and they cascade everywhere.

## Features included

- Dark/light mode toggle (persisted, respects system preference)
- Typing animation cycling through roles in the hero
- Scroll progress indicator
- Animated count-up KPI strip and stats
- Scroll-triggered fade-in reveals (`v-reveal` directive)
- Back-to-top button
- Responsive nav with mobile menu
- Accessible: skip link, visible focus states, `prefers-reduced-motion`
  support, semantic landmarks, alt text
- SEO: meta description, Open Graph/Twitter tags, semantic heading order

## Notes

This project was built with Vue 3 + Vite but **not compiled in this
environment** (no network access to install npm packages here). Every
`<script setup>` block was syntax-checked with Node, and all templates were
hand-reviewed — but run `npm run build` locally to confirm it's clean in your
own environment before deploying.
