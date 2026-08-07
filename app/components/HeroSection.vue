<template>
  <section class="relative pt-8 pb-24 md:pt-24 md:pb-32 overflow-hidden bg-[#170a3c]">
    
    <!-- Marquee Background (Full width, dense) -->
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <UMarquee
        reverse
        orientation="vertical"
        :overlay="false"
        :ui="{
          root: '[--duration:40s] absolute w-[460px] -left-[100px] -top-[300px] h-[1040px] transform-3d rotate-x-55 rotate-y-0 rotate-z-30'
        }"
      >
        <img
          v-for="i in 4"
          :key="`col1-${i}`"
          :src="images[i-1]"
          width="460"
          height="258"
          :alt="`Hero Image ${i}`"
          loading="lazy"
          class="aspect-video object-cover border border-white/20 rounded-lg shadow-2xl mb-6"
        />
      </UMarquee>
      <UMarquee
        orientation="vertical"
        :overlay="false"
        :ui="{
          root: '[--duration:50s] absolute w-[460px] -top-[400px] left-[480px] h-[1260px] transform-3d rotate-x-55 rotate-y-0 rotate-z-30'
        }"
      >
        <img
          v-for="i in [5, 6, 7, 8]"
          :key="`col2-${i}`"
          :src="images[i-1]"
          width="460"
          height="258"
          :alt="`Hero Image ${i}`"
          loading="lazy"
          class="aspect-video object-cover border border-white/20 rounded-lg shadow-2xl mb-6"
        />
      </UMarquee>
      <UMarquee
        reverse
        orientation="vertical"
        :overlay="false"
        :ui="{
          root: 'hidden md:flex [--duration:45s] absolute w-[460px] -top-[300px] left-[1020px] h-[1160px] transform-3d rotate-x-55 rotate-y-0 rotate-z-30'
        }"
      >
        <img
          v-for="i in [9, 10, 11, 12]"
          :key="`col3-${i}`"
          :src="images[i-1]"
          width="460"
          height="258"
          :alt="`Hero Image ${i}`"
          loading="lazy"
          class="aspect-video object-cover border border-white/20 rounded-lg shadow-2xl mb-6"
        />
      </UMarquee>
    </div>

    <!-- Gradient Overlay (above marquee, below text) -->
    <!-- Solid background on the left for text readability, fading completely to transparent on the right -->
    <div class="absolute inset-0 bg-gradient-to-r from-[#170a3c] via-[#170a3c] via-50% to-transparent z-10 pointer-events-none"></div>
    <div class="absolute inset-0 bg-gradient-to-t from-[#170a3c] via-transparent to-transparent z-10 pointer-events-none"></div>

    <!-- Purple Glow -->
    <div class="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-[150px] pointer-events-none z-10"></div>

    <!-- Main Content -->
    <UContainer class="relative z-20">
      <div class="max-w-3xl">
        <div class="inline-flex items-center gap-3 mb-6">
          <div class="w-12 h-[2px] bg-purple-500"></div>
          <span class="text-purple-400 font-bold tracking-[0.2em] uppercase text-xs md:text-sm">Ваш цифровий партнер</span>
        </div>
        
        <!-- Glowing Header (Smaller) -->
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-6 uppercase tracking-tight text-white" style="text-shadow: 0 0 40px rgba(168, 85, 247, 0.6), 0 0 80px rgba(168, 85, 247, 0.4);">
          Створюємо <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400" style="text-shadow: none;">веб-рішення</span>,<br />
          які генерують<br />
          прибуток.
        </h1>
        
        <p class="text-base md:text-lg text-gray-300 mb-10 leading-relaxed max-w-xl font-light">
          Привіт, я Олег Власюк. Перетворюю складні бізнес-ідеї на потужні кастомні веб-продукти з бездоганним дизайном та блискавичною швидкістю.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4">
          <UButton size="lg" color="gray" class="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-black px-8 py-4 text-base justify-center rounded-none uppercase tracking-wider group transition-all border-none shadow-lg shadow-purple-500/20">
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
const images = [
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop',
  'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
  'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
  'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=500&h=300&fit=crop',
  'https://images.unsplash.com/photo-1481481600465-36a08f28d4ea?w=500&h=300&fit=crop',
  'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=500&h=300&fit=crop',
  'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&h=300&fit=crop',
  'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=500&h=300&fit=crop',
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&h=300&fit=crop',
  'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&h=300&fit=crop'
]
</script>
