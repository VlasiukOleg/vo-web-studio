<template>
  <section id="contact" class="py-18 relative bg-white">
    <UContainer>
      <div class="bg-[#0a1120] border border-white/10 p-10 md:p-20 relative overflow-hidden rounded-2xl shadow-2xl">
        <!-- Glitch / Glow effects -->
        <div class="absolute top-0 right-0 w-125 h-125 bg-cyan-500/10 blur-[100px] pointer-events-none"></div>
        <div class="absolute bottom-0 left-0 w-125 h-125 bg-purple-500/10 blur-[100px] pointer-events-none"></div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
          <div>
            <h2 class="font-noto text-4xl md:text-5xl font-black uppercase tracking-tight mb-6 text-white" v-html="title"></h2>
            <p class="text-gray-400 text-lg md:text-xl font-light mb-12" v-html="description"></p>
            
            <div class="flex flex-row gap-8">
              <a href="https://t.me/vowebstudio" target="_blank" class="inline-flex items-center gap-3 hover:opacity-80 transition-opacity group">
                <div class="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform shrink-0">
                  <UIcon name="i-simple-icons-telegram" class="w-6 h-6" />
                </div>
                <span class="text-lg font-bold text-white">Telegram</span>
              </a>
              
              <a href="viber://chat?number=%2B380991234567" target="_blank" class="inline-flex items-center gap-3 hover:opacity-80 transition-opacity group">
                <div class="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform shrink-0">
                  <UIcon name="i-simple-icons-viber" class="w-6 h-6" />
                </div>
                <span class="text-lg font-bold text-white">Viber</span>
              </a>
            </div>
          </div>
          
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: 'Давайте<br/><span class="text-cyan-400">створимо</span><br/>щось цікаве'
  },
  description: {
    type: String,
    default: 'Заповніть форму, і ми зв\'яжемося з вами найближчим часом для обговорення вашого бачення.'
  }
})
</script>
