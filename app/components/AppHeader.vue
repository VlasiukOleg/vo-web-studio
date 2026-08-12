<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'

const { y } = useWindowScroll();

const scrollProgress = computed(() => {
  if (!import.meta.client) return 0

  const scrollableHeight =
    document.documentElement.scrollHeight - window.innerHeight

  if (scrollableHeight <= 0) return 0

  return Math.min(100, (y.value / scrollableHeight) * 100)
})

const headerTheme = useState('headerTheme', () => 'dark')
</script>

<template>
  <header 
    :class="[
      'py-4 fixed top-0 left-0 w-full z-50 backdrop-blur-xl transition-all duration-300',
      headerTheme === 'light' ? 'bg-[#00042a]/95 border-b border-white/10 shadow-lg' : 'bg-transparent border-b border-white/5'
    ]"
  >
    <UContainer class="flex justify-between items-center relative">
      <NuxtLink to="/" class="text-2xl font-black tracking-tighter text-white flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
        <span class="w-8 h-8 bg-cyan-500 rounded-sm flex items-center justify-center text-[#050b14] text-sm">VO</span>
        WebStudio
      </NuxtLink>
      <div class="hidden md:flex gap-8 text-sm font-bold tracking-widest uppercase text-gray-400">
        <a href="#services" class="hover:text-cyan-400 transition-colors">Експертиза</a>
        <a href="#portfolio" class="hover:text-cyan-400 transition-colors">Роботи</a>
        <a href="#process" class="hover:text-cyan-400 transition-colors">Процес</a>
      </div>
      <UButton label="Обговорити проект" variant="solid" class="font-bold bg-white text-black hover:bg-cyan-400 hover:text-black transition-all px-6 py-2.5 rounded-none" />
    </UContainer>
    
    <!-- Прогрес-бар, прикріплений до самого низу хедера -->
    <div class="absolute bottom-0 left-0 w-full z-60">
      <UProgress 
        v-model="scrollProgress"
        :max="100"
        size="sm"
        :ui="{
        indicator: 'bg-cyan-500',
        base: 'bg-blue-950'
      }"/>
    </div>
    <div>
  </div>
  </header>
   
</template>