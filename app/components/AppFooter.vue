<template>
  <footer class="py-12 bg-[#00769b] border-t border-white/10">
    <UContainer class="flex flex-col md:flex-row justify-between items-center gap-6">
      <NuxtLink to="/" class="text-2xl font-black tracking-tighter text-white flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
        <span class="w-6 h-6 bg-white rounded-sm flex items-center justify-center text-[#00769b] text-[10px]">VO</span>
        WebStudio
      </NuxtLink>
      <p class="text-white/80 text-sm font-medium">© {{ new Date().getFullYear() }} VO WebStudio. Всі права захищені.</p>
      <div class="flex gap-6">
        <a href="#" class="text-white/70 hover:text-white transition-colors"><UIcon name="i-simple-icons-telegram" class="w-5 h-5" /></a>
        <a href="#" class="text-white/70 hover:text-white transition-colors"><UIcon name="i-simple-icons-instagram" class="w-5 h-5" /></a>
        <a href="#" class="text-white/70 hover:text-white transition-colors"><UIcon name="i-simple-icons-linkedin" class="w-5 h-5" /></a>
      </div>
    </UContainer>
  </footer>
</template>
