<template>
  <section class="relative pt-24 pb-18 overflow-hidden bg-[#170a3c]">
    
    <!-- Marquee Background (Full width, dense) -->
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <HeroMarquee />
    </div>

    <!-- Gradient Overlay (above marquee, below text) -->
    <!-- Solid background on the left for text readability, fading completely to transparent on the right -->
    <div class="absolute inset-0 bg-linear-to-r from-[#170a3c] via-[#170a3c] via-0% md:via-20% to-transparent z-10 pointer-events-none"></div>
    <div class="absolute inset-0 bg-linear-to-t from-[#170a3c] via-transparent to-transparent z-10 pointer-events-none"></div>

    <!-- Purple Glow -->
    <div class="absolute top-1/4 left-1/4 w-150 h-150 bg-purple-600/30 rounded-full blur-[150px] pointer-events-none z-10"></div>

    <!-- Main Content -->
    <UContainer class="relative z-20">
      <div class="max-w-3xl">
        <div class="inline-flex items-center gap-3 mb-6">
          <div class="w-12 h-0.5 bg-purple-500"></div>
          <span class="text-purple-400 font-bold tracking-[0.2em] uppercase text-xs md:text-sm">Ваш цифровий партнер</span>
        </div>
        
        <!-- Glowing Header (Smaller) -->
        <h1 class="font-noto text-4xl md:text-4xl lg:text-6xl font-black leading-[1.1] mb-6 uppercase tracking-tight text-white" style="text-shadow: 0 0 40px rgba(168, 85, 247, 0.6), 0 0 80px rgba(168, 85, 247, 0.4);">
          Створюємо <br/><span class="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-blue-400" style="text-shadow: none;">веб-рішення</span>,<br />
          які працюють <br/>на бізнес.
        </h1>
        
        <div class="flex flex-col sm:flex-row items-start gap-4 md:gap-8 mb-10 max-w-xl">
          <div class="shrink-0 flex flex-col items-center">
            <div class="relative mb-3">
              <!-- Світіння навколо фото -->
              <div class="absolute inset-0 bg-cyan-400 rounded-full blur-[10px] opacity-40 animate-pulse"></div>
              <img 
                src="/video/vo-photo.jpg" 
                class="relative w-22 h-22 rounded-full object-cover border-2 border-cyan-400/80 shadow-lg z-10" 
                alt="Власюк Олег"
              />
            </div>
            <div class="text-center">
              <div class="font-bold text-white text-sm">Власюк Олег</div>
              <div class="text-cyan-400 text-[10px] mt-0.5 tracking-wider uppercase">Founder & CEO</div>
            </div>
          </div>
          <p class="text-base md:text-lg text-gray-300 leading-relaxed font-light flex-1 pt-1 md:pt-4">
            {{ typedText }}<span class="animate-pulse text-cyan-400">|</span>
          </p>
        </div>
        
        <div class="flex flex-col sm:flex-row gap-4">
          <UButton size="lg" color="gray" class="bg-linear-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-black px-8 py-4 text-base justify-center rounded-none uppercase tracking-wider group transition-all border-none shadow-lg shadow-purple-500/20">
            Отримати пропозицію
            <UIcon name="i-heroicons-arrow-right" class="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
          </UButton>
          <UButton size="lg" variant="outline" color="gray" class="font-bold px-8 py-4 text-base justify-center rounded-none text-white border-white/20 hover:bg-white hover:text-black uppercase tracking-wider transition-all">
            Наші кейси
          </UButton>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const fullText = 'Вітаю! Ми розробляємо швидкі та ефективні лендінги, зручні інтернет-магазини, сучасні SPA та AI-рішення, які допомагають бізнесу виділятися серед конкурентів і впевнено зростати.'
const typedText = ref('')

onMounted(() => {
  let i = 0
  const typeWriter = () => {
    if (i < fullText.length) {
      typedText.value += fullText.charAt(i)
      i++
      // Збільшена затримка на ~20% для ефекту реального друку
      setTimeout(typeWriter, Math.random() * 35 + 20)
    }
  }
  
  // Починаємо друк через невелику затримку після завантаження сторінки
  setTimeout(typeWriter, 1000)
})
</script>
