<template>
  <section id="portfolio" class="py-32 relative">
    <UContainer>
      <div class="flex items-center gap-3 mb-12">
        <div class="w-12 h-[2px] bg-cyan-500"></div>
        <span class="text-cyan-400 font-bold tracking-[0.2em] uppercase text-sm">Вибрані кейси</span>
      </div>
      
      <div class="space-y-32">
        <!-- Project 1 -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="order-2 lg:order-1">
            <div class="text-sm font-bold tracking-widest uppercase text-gray-500 mb-4">Логістика / Корпоративний сайт</div>
            <h3 class="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6">Global Logistics</h3>
            <p class="text-gray-400 text-lg font-light leading-relaxed mb-8">
              Повна трансформація цифрової присутності для міжнародної логістичної компанії. Кастомний калькулятор вартості, інтеграція з внутрішньою CRM та неймовірна швидкість завдяки Nuxt SSR.
            </p>
            <div class="grid grid-cols-2 gap-6 mb-10 border-t border-b border-white/10 py-6">
              <div>
                <div class="text-3xl font-black text-white mb-1">+40%</div>
                <div class="text-xs text-gray-500 uppercase tracking-widest font-bold">Конверсія заявок</div>
              </div>
              <div>
                <div class="text-3xl font-black text-white mb-1">0.8s</div>
                <div class="text-xs text-gray-500 uppercase tracking-widest font-bold">Швидкість загрузки</div>
              </div>
            </div>
            <UButton size="xl" variant="outline" color="gray" class="font-bold px-8 py-4 text-sm justify-center rounded-none text-white border-white/20 hover:bg-white hover:text-black uppercase tracking-wider transition-all">
              Детальний кейс
            </UButton>
          </div>
          <div class="order-1 lg:order-2 relative aspect-[4/3] bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden group">
            <div class="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay"></div>
            <!-- Abstract mockup representation -->
            <div class="absolute inset-10 bg-[#050b14] shadow-2xl border border-white/10 overflow-hidden group-hover:scale-[1.02] transition-transform duration-700 ease-out">
              <div class="h-6 border-b border-white/10 flex items-center px-4 gap-1.5 bg-[#0a1120]">
                <div class="w-2 h-2 rounded-full bg-white/20"></div>
                <div class="w-2 h-2 rounded-full bg-white/20"></div>
                <div class="w-2 h-2 rounded-full bg-white/20"></div>
              </div>
              <div class="p-8 h-full flex flex-col justify-center items-center text-white/5">
                <UIcon name="i-heroicons-computer-desktop" class="w-32 h-32" />
                <span class="text-xl font-bold tracking-widest uppercase mt-4">Project Preview</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Project 2 -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="relative aspect-[4/3] bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden group">
            <div class="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay"></div>
            <!-- Mobile App Mockup representation -->
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-[80%] bg-[#050b14] rounded-3xl shadow-2xl border-4 border-gray-800 overflow-hidden group-hover:scale-[1.05] transition-transform duration-700 ease-out">
              <div class="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-4 bg-gray-800 rounded-b-xl"></div>
              <div class="p-8 h-full flex flex-col justify-center items-center text-white/5">
                <UIcon name="i-heroicons-device-phone-mobile" class="w-24 h-24" />
              </div>
            </div>
          </div>
          <div>
            <div class="text-sm font-bold tracking-widest uppercase text-gray-500 mb-4">Спорт / Web App</div>
            <h3 class="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6">FitLife App</h3>
            <p class="text-gray-400 text-lg font-light leading-relaxed mb-8">
              Прогресивний веб-додаток (PWA) для мережі фітнес-центрів. Зручний запис на тренування, особистий кабінет клієнта, інтеграція платіжних систем та гейміфікація досягнень.
            </p>
            <div class="grid grid-cols-2 gap-6 mb-10 border-t border-b border-white/10 py-6">
              <div>
                <div class="text-3xl font-black text-white mb-1">10k+</div>
                <div class="text-xs text-gray-500 uppercase tracking-widest font-bold">Активних юзерів</div>
              </div>
              <div>
                <div class="text-3xl font-black text-white mb-1">PWA</div>
                <div class="text-xs text-gray-500 uppercase tracking-widest font-bold">Технологія</div>
              </div>
            </div>
            <UButton size="xl" variant="outline" color="gray" class="font-bold px-8 py-4 text-sm justify-center rounded-none text-white border-white/20 hover:bg-white hover:text-black uppercase tracking-wider transition-all">
              Детальний кейс
            </UButton>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>
