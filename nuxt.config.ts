// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxtjs/google-fonts', 'nuxt-gtag'],
  css: ['~/assets/css/main.css'],
  googleFonts: {
    families: {
      Nunito: [400, 700, 900], // 900 — для тих самих жирних заголовків
      'Noto Sans': [400, 700, 900]
    },
    display: 'swap',
    download: true // Завантажує шрифт локально при збірці (краще для швидкості)
  },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ]
    }
  },
  gtag: {
    id: 'GTM-5DTCLZZH', // Or replace with your G-XXXXXX Measurement ID
  },
  runtimeConfig: {
    telegramBotToken: '',
    telegramChatId: '',
  }
});