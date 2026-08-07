<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const scrollProgress = ref(0)

const updateProgress = () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0
  const docHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  )
  const winHeight = window.innerHeight || document.documentElement.clientHeight
  
  const scrollableHeight = docHeight - winHeight
  if (scrollableHeight > 0) {
    const scrollPercent = scrollTop / scrollableHeight
    scrollProgress.value = Math.round(Math.min(100, Math.max(0, scrollPercent * 100)))
  } else {
    scrollProgress.value = 0
  }
}

onMounted(() => {
  window.addEventListener('scroll', updateProgress, { passive: true })
  updateProgress()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateProgress)
})
</script>

<template>
  <header class="py-4 border-b border-white/5 fixed top-0 left-0 w-full bg-transparent backdrop-blur-xl z-50">
    <UContainer class="flex justify-between items-center relative">
      <div class="text-2xl font-black tracking-tighter text-white flex items-center gap-2 cursor-pointer">
        <span class="w-8 h-8 bg-cyan-500 rounded-sm flex items-center justify-center text-[#050b14] text-sm">VO</span>
        WebStudio
      </div>
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
  </header>
</template>
