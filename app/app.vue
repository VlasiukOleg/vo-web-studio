<template>
  <UApp>
    <div class="bg-[#00042a] text-white min-h-screen font-sans selection:bg-cyan-500/30 selection:text-cyan-50">
      <AppHeader />
      <NuxtPage />
      <AppFooter />
      <ScrollToTop />
    </div>
  </UApp>
</template>


<script setup>
useSeoMeta({
  title: 'РОЗРОБЛЕНО - Студія цифрових рішень',
  description: 'Комплексні рішення для розвитку вашого бізнесу в інтернеті. Створення сайтів від прототипу до успішного релізу.',
  ogTitle: 'РОЗРОБЛЕНО - Студія цифрових рішень',
  ogDescription: 'Комплексні рішення для розвитку вашого бізнесу в інтернеті. Створення сайтів від прототипу до успішного релізу.',
  ogImage: 'https://vo-web-studio.vercel.app/og-image.png',
  ogSiteName: 'РОЗРОБЛЕНО',
  ogUrl: 'https://vo-web-studio.vercel.app/',
  twitterCard: 'summary_large_image',
})
</script>
