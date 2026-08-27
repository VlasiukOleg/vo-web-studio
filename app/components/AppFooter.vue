<template>
  <UFooter class="bg-[#00769b] border-t border-white/10">
    <template #left>
      <NuxtLink to="/" class="flex flex-col items-start cursor-pointer hover:opacity-80 transition-opacity">
        <div class="flex items-center text-[20px] md:text-[24px] font-normal tracking-[0.05em] text-white leading-none mb-0.5">
          <span>РОЗР</span>
          <span class="relative flex items-center justify-center text-cyan-400 mx-[1px]">
            <UIcon name="i-lucide-crosshair" class="w-[0.95em] h-[0.95em] drop-shadow-[0_0_6px_rgba(34,211,238,0.8)]" />
          </span>
          <span>БЛЕНО</span>
        </div>
        <div class="text-[7px] md:text-[8px] font-medium tracking-[0.18em] text-white/90 uppercase pl-1">
          Студія цифрових рішень
        </div>
      </NuxtLink>
    </template>

      <p class="text-white/80 text-sm font-medium">© {{ new Date().getFullYear() }} РОЗРОБЛЕНО. Всі права захищені.</p>

    <template #right>
      <UButton icon="i-simple-icons-telegram" color="neutral" variant="ghost" to="https://t.me/vl_oleg_frontend" target="_blank" class="text-white/70 hover:text-white hover:bg-white/10 transition-colors" aria-label="Telegram" />
      <UButton icon="i-simple-icons-viber" color="neutral" variant="ghost" to="viber://chat?number=%2B380632790437" target="_blank" class="text-white/70 hover:text-white hover:bg-white/10 transition-colors" aria-label="Viber" />
    </template>
  </UFooter>
</template>
