<template>
  <div>
    <HeroSection />
    <StatsSection />
    <ServicesSection />
    <WhyUsSection />
    <PortfolioSection />
    <ProcessSection />
    <ContactSection ref="contactSectionRef" />
  </div>
</template>

<script setup>
import { ref, watch, onUnmounted } from 'vue'
const headerTheme = useState('headerTheme')


useHead({
  title: 'VO Web Studio - Розробка сайтів та веб-рішень'
})
</script>
