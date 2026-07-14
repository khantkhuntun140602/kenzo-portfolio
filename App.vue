<script setup>
import ScrollProgress from './components/ScrollProgress.vue'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import EducationSection from './components/EducationSection.vue'
import ResumeSection from './components/ResumeSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'
import BackToTop from './components/BackToTop.vue'
</script>

<template>
  <ScrollProgress />
  <NavBar />

  <main id="main-content">
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <ExperienceSection />
    <EducationSection />
    <ResumeSection />
    <ContactSection />
  </main>

  <FooterSection />
  <BackToTop />
</template>
