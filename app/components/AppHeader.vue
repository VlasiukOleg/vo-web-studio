<template>
  <header class="py-4 border-b border-white/5 sticky top-0 bg-[#050b14]/80 backdrop-blur-xl z-50">
    <UContainer class="flex justify-between items-center">
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
  </header>
</template>
