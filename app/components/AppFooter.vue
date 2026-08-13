<template>
  <UFooter class="bg-[#00769b] border-t border-white/10">
    <template #left>
      <NuxtLink to="/" class="text-2xl font-black tracking-tighter text-white flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
        <span class="w-6 h-6 bg-white rounded-sm flex items-center justify-center text-[#00769b] text-[10px]">VO</span>
        WebStudio
      </NuxtLink>
    </template>

      <p class="text-white/80 text-sm font-medium">© {{ new Date().getFullYear() }} VO WebStudio. Всі права захищені.</p>

    <template #right>
      <UButton icon="i-simple-icons-telegram" color="neutral" variant="ghost" to="#" class="text-white/70 hover:text-white hover:bg-white/10 transition-colors" aria-label="Telegram" />
      <UButton icon="i-simple-icons-instagram" color="neutral" variant="ghost" to="#" class="text-white/70 hover:text-white hover:bg-white/10 transition-colors" aria-label="Instagram" />
      <UButton icon="i-simple-icons-linkedin" color="neutral" variant="ghost" to="#" class="text-white/70 hover:text-white hover:bg-white/10 transition-colors" aria-label="LinkedIn" />
    </template>
  </UFooter>
</template>
