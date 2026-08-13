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
import { useWindowScroll } from '@vueuse/core'

const headerTheme = useState('headerTheme')
const contactSectionRef = ref(null)
const { y } = useWindowScroll()

watch(y, () => {
  if (contactSectionRef.value?.$el) {
    const rect = contactSectionRef.value.$el.getBoundingClientRect()
    headerTheme.value = rect.top <= 85 ? 'light' : 'dark'
  }
})

onUnmounted(() => {
  headerTheme.value = 'dark'
})

useHead({
  title: 'VO Web Studio - Розробка сайтів та веб-рішень'
})
</script>
