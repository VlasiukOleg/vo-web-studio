<template>
  <UApp>
    <div class="bg-[#00042a] text-white min-h-screen font-sans selection:bg-cyan-500/30 selection:text-cyan-50">
      <AppHeader v-if="!isBriefPage" />
      <NuxtPage />
      <AppFooter v-if="!isBriefPage" />
      <ScrollToTop />
    </div>
  </UApp>
</template>


<script setup>
import { computed } from 'vue'

const route = useRoute()
const isBriefPage = computed(() => route.path === '/brief' || route.name === 'brief')

useSeoMeta({
  title: 'РОЗРОБЛЕНО - Студія цифрових рішень',
  description: 'Комплексні рішення для розвитку вашого бізнесу в інтернеті. Створення сайтів від прототипу до успішного релізу.',
  ogTitle: 'РОЗРОБЛЕНО - Студія цифрових рішень',
  ogDescription: 'Комплексні рішення для розвитку вашого бізнесу в інтернеті. Створення сайтів від прототипу до успішного релізу.',
  ogImage: 'https://www.rozrobleno.com.ua/og-image.png',
  ogSiteName: 'РОЗРОБЛЕНО',
  ogUrl: 'https://www.rozrobleno.com.ua/',
  twitterCard: 'summary_large_image',
})
</script>
