<template>
  <section id="portfolio" class="py-18 relative bg-linear-to-bl from-[#005c8a] via-[#1a367d] to-[#2c237a]">
    <UContainer>
      <div class="flex items-center gap-3 mb-12">
        <div class="w-12 h-0.5 bg-cyan-500"></div>
        <span class="text-cyan-400 font-bold tracking-[0.2em] uppercase text-sm">Вибрані кейси</span>
      </div>
      
      <UCarousel 
        v-slot="{ item }" 
        :items="projects" 
        arrows 
        dots
        :prev="{ class: 'bg-cyan-500 hover:bg-cyan-400 cursor-pointer text-[#050b14] rounded-full shadow-lg w-10 h-10 flex items-center justify-center -left-12 transition-all' }"
        :next="{ class: 'bg-cyan-500 hover:bg-cyan-400 cursor-pointer text-[#050b14] rounded-full shadow-lg w-10 h-10 flex items-center justify-center -right-12 transition-all' }"
        :ui="{ 
          item: 'basis-full', 
          container: 'gap-4', 
          arrows: 'hidden md:flex',
          dot: 'w-3 h-3 mx-1 rounded-full bg-white/30 transition-colors hover:bg-cyan-400/50'
        }" 
        class="w-full mx-auto portfolio-carousel"
      >
        <!-- Slide content -->
        <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4 md:px-12 py-4">
          <div class="order-2 lg:order-1">
            <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/30 border border-white/40 text-xs font-bold tracking-widest uppercase text-gray-900 mb-6 backdrop-blur-md shadow-lg">
              <span class="w-1.5 h-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(6,182,212,0.8)] animate-pulse"></span>
              {{ item.category }}
            </div>
            <div class="flex items-center gap-2">
              <img v-if="item.logo" :src="item.logo" :alt="item.title" class="h-14 md:h-16 object-contain mb-6" />
              <h3 v-if="item.title" class="font-noto text-4xl md:text-5xl font-black text-gray-600 uppercase tracking-tight mb-6">{{ item.title }}</h3>
            </div>
            
            <p class="text-white/80 text-lg font-light leading-relaxed mb-8">
              {{ item.description }}
            </p>
            <UButton 
              :to="item.link"
              target="_blank"
              size="xl" 
              class="bg-cyan-500 text-[#050b14] hover:bg-cyan-400 font-black px-8 py-4 text-sm justify-center rounded-none uppercase tracking-wider transition-all border-none shadow-lg shadow-cyan-500/20"
            >
              Перейти на сайт
            </UButton>
          </div>
          <div class="order-1 lg:order-2 relative aspect-[4/3] bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden group rounded-xl shadow-2xl">
            <div class="absolute inset-0 bg-[#005c8a]/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay"></div>
            <!-- Abstract mockup representation -->
            <div class="absolute inset-4 sm:inset-8 md:inset-10 bg-[#050b14] shadow-2xl border border-white/10 overflow-hidden group-hover:scale-[1.02] transition-transform duration-700 ease-out flex flex-col rounded-t-md">
              <div class="h-6 shrink-0 border-b border-white/10 flex items-center px-4 gap-1.5 bg-[#0a1120]">
                <div class="w-2 h-2 rounded-full bg-white/20"></div>
                <div class="w-2 h-2 rounded-full bg-white/20"></div>
                <div class="w-2 h-2 rounded-full bg-white/20"></div>
              </div>
              <div class="relative w-full flex-1 bg-[#1a1a1a]">
                <img :src="item.image" :alt="item.title" class="w-full h-full object-cover object-top" />
              </div>
            </div>
          </div>
        </div>
      </UCarousel>
    </UContainer>
  </section>
</template>

<script setup>
const baseProject = {
  title: 'LUM',
  logo: '/works/lum-logo.png',
  category: 'E-commerce / Інтернет-магазин',
  description: 'Сучасний інтернет-магазин будівельних матеріалів (Local United Materials) з можливістю покупки прямо зі складу. Зручний каталог за видами робіт, актуальні ціни та швидке замовлення доставки.',
  image: '/works/lum.webp',
  link: 'https://www.lum.net.ua/'
}

// Create an array with 4 identical projects
const projects = [
  { ...baseProject },
  { ...baseProject, title: 'L.U.M. (Demo 2)' },
  { ...baseProject, title: 'L.U.M. (Demo 3)' },
  { ...baseProject, title: 'L.U.M. (Demo 4)' }
]
</script>

<style scoped>
/* Override default active dot color for the carousel to match the theme */
:deep(.portfolio-carousel button.bg-primary-500) {
  background-color: #06b6d4 !important; /* cyan-500 */
}
:deep(.portfolio-carousel button[aria-selected="true"]) {
  background-color: #06b6d4 !important;
}
</style>
