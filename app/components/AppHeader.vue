<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'
import { computed } from 'vue'

const { y } = useWindowScroll();

const scrollProgress = computed(() => {
  if (!import.meta.client) return 0

  const scrollableHeight =
    document.documentElement.scrollHeight - window.innerHeight

  if (scrollableHeight <= 0) return 0

  return Math.min(100, (y.value / scrollableHeight) * 100)
})

const headerTheme = useState('headerTheme', () => 'dark')

watch(y, () => {
  if (!import.meta.client) return
  
  const firstSection = document.querySelector('section')
  if (firstSection) {
    const rect = firstSection.getBoundingClientRect()
    // When the bottom of the first section reaches the header, make the header dark (headerTheme = 'light')
    headerTheme.value = rect.bottom <= 85 ? 'light' : 'dark'
  } else {
    headerTheme.value = y.value > 50 ? 'light' : 'dark'
  }
})
const items = computed(() => [{
  label: 'Послуги',
  to: '#services'
}, {
  label: 'Переваги',
  to: '#why-us'
}, {
  label: 'Наші роботи',
  to: '#portfolio'
}, {
  label: 'Етапи розробки',
  to: '#process'
}])
</script>

<template>
  <UHeader
    :class="[
      'fixed top-0 left-0 w-full z-50 backdrop-blur-xl transition-all duration-300',
      headerTheme === 'light' ? 'bg-[#00042a]/95 border-b border-white/10 shadow-lg' : 'bg-transparent border-b border-white/5'
    ]"
    :ui="{
      toggle: 'text-cyan-500 hover:text-cyan-400',
      content: 'bg-[#00042a] ring-1 ring-white/10',
      header: 'bg-[#00042a] border-b border-white/10',
      body: 'bg-[#00042a]'
    }"
  >
    <template #left>
      <NuxtLink to="/" class="text-2xl font-black tracking-tighter text-white flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
        <span class="w-8 h-8 bg-cyan-500 rounded-sm flex items-center justify-center text-[#050b14] text-sm">VO</span>
        WebStudio
      </NuxtLink>
    </template>

    <UNavigationMenu :items="items" class="hidden md:flex" :ui="{
      link: 'text-gray-400 text-base'
    }"/>

    <template #right>
      <UButton to="#contact" label="Зв'язатися з нами" variant="solid" class="font-bold bg-white text-black hover:bg-cyan-400 hover:text-black transition-all px-6 py-2.5 rounded-none hidden md:inline-flex" />
    </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
    </template>
    
    <template #bottom>
      <div class="w-full">
        <UProgress 
          v-model="scrollProgress"
          :max="100"
          size="sm"
          :ui="{ indicator: 'bg-cyan-500', base: 'bg-transparent' }"
        />
      </div>
    </template>
  </UHeader>
</template>

<style>
html {
  scroll-behavior: smooth;
}
</style>