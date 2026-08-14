<template>
  <div class="bg-[#00042a] text-white min-h-screen">
    <!-- Hero Section -->
    <section class="relative pt-18 pb-18 md:pt-24 overflow-hidden bg-[#170a3c]">
      <!-- Background effects -->
      <div class="absolute inset-0 z-0">
        <div class="absolute top-1/4 left-1/4 w-125 h-125 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div class="absolute bottom-1/4 right-1/4 w-100 h-100 bg-cyan-600/20 rounded-full blur-[100px] pointer-events-none"></div>
      </div>
      
      <UContainer class="relative z-10">
        <div class="mb-10">
          <UBreadcrumb 
            :items="[
              { label: 'Головна', to: '/', class: 'text-gray-400 hover:text-white transition-colors' }, 
              { label: 'Landing Page', class: 'text-cyan-400 font-bold' }
            ]" 
          />
        </div>
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="font-noto text-5xl md:text-6xl font-black leading-[1.1] mb-8 uppercase tracking-tight text-white">
            Розробка Landing Page<br/>
            <span class="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">під ключ</span>
          </h1>
          
          <p class="text-xl md:text-2xl text-gray-300 font-light mb-12 leading-relaxed max-w-3xl mx-auto">
            Потужний інструмент для ваших продажів з індивідуальним дизайном, швидким завантаженням та зручною адмін-панеллю.
          </p>
          
          <!-- Price Card -->
          <div class="mb-16 max-w-md mx-auto bg-white/5 backdrop-blur-md border border-cyan-500/30 rounded-3xl p-6 shadow-[0_0_30px_rgba(6,182,212,0.15)] relative overflow-hidden transition-all duration-500 hover:border-cyan-400/60 hover:shadow-[0_0_50px_rgba(6,182,212,0.25)]">
            <div class="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-2xl pointer-events-none"></div>
            <div class="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-2xl pointer-events-none"></div>
            <div class="text-cyan-400 uppercase tracking-widest text-sm md:text-base font-bold mb-3 relative z-10">Фіксована ціна</div>
            <div class="text-5xl md:text-5xl  font-black text-white relative z-10">8 000 <span class="text-2xl md:text-3xl text-gray-400">грн</span></div>
          </div>

          <!-- Interactive Accordion (Features) -->
          <div class="mb-16 max-w-3xl mx-auto text-left relative z-10">
            <h2 class="font-noto text-3xl font-black text-white mb-8 text-center">Що входить у вартість?</h2>
            <UAccordion 
              :items="accordionItems" 
              size="xl"
              :ui="{
                wrapper: 'flex flex-col w-full space-y-4',
                container: 'w-full',
                body: 'text-base',
                item: { base: 'bg-white/5 border border-t-0 border-white/10 rounded-b-xl p-6', padding: '' },
                default: { class: 'w-full flex items-center justify-between p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all focus:ring-0', variant: 'ghost', color: 'gray' }
              }"
            >
              <template #default="{ item }">
                <div class="flex items-center gap-4 text-left w-full">
                  <span class="text-2xl">{{ item.emoji }}</span>
                  <span class="text-xl font-bold text-white">{{ item.label }}</span>
                </div>
              </template>
            </UAccordion>
          </div>
          
          <!-- CTA Button -->
          <UButton size="lg" color="gray" class="bg-linear-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-black px-8 py-4 text-base justify-center rounded-none uppercase tracking-wider group transition-all border-none shadow-lg shadow-purple-500/20">
            Замовити лендінг
            <UIcon name="i-heroicons-arrow-right" class="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
          </UButton>
        </div>
      </UContainer>
    </section>

    <!-- Why Custom Code Section -->
    <section class="py-18 relative bg-linear-to-r from-[#005c8a] via-[#1a367d] to-[#2c237a]">
      <UContainer>
        <div class="max-w-6xl mx-auto bg-linear-to-br from-[#050b14]/90 to-[#0a1120]/90 backdrop-blur-md border border-white/10 p-10 md:p-16 rounded-3xl relative overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
          <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
          <div class="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-[80px] pointer-events-none"></div>
          
          <h2 class="relative z-10 font-noto text-3xl md:text-4xl font-black text-white mb-12 text-center uppercase tracking-tight">Чому кастомна розробка краща за конструктори?</h2>
          
          <div class="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 text-left">
            <!-- Part 1 -->
            <div class="space-y-4">
              <div class="w-12 h-1 bg-cyan-400 rounded-full mb-6"></div>
              <p class="text-gray-300 leading-relaxed text-lg">
                Ми створюємо лендінги без зайвого коду та важких шаблонів. Це дозволяє зробити сайт <strong class="text-white">швидким, адаптивним</strong> і максимально точно налаштувати його під ваш бізнес та рекламні кампанії.
              </p>
            </div>
            
            <!-- Part 2 -->
            <div class="space-y-4 md:border-l md:border-white/10 md:pl-12">
              <div class="w-12 h-1 bg-purple-400 rounded-full mb-6"></div>
              <div class="text-gray-300 leading-relaxed text-lg space-y-4 font-medium">
                <div class="flex items-center gap-3"><UIcon name="i-heroicons-arrow-right-circle" class="w-6 h-6 text-purple-400 shrink-0"/> <strong class="text-white">Швидке завантаження</strong></div>
                <div class="flex items-center gap-3"><UIcon name="i-heroicons-arrow-right-circle" class="w-6 h-6 text-purple-400 shrink-0"/> комфорт користувача</div>
                <div class="flex items-center gap-3"><UIcon name="i-heroicons-arrow-right-circle" class="w-6 h-6 text-purple-400 shrink-0"/> <strong class="text-white">менше втрат клієнтів</strong></div>
              </div>
            </div>
            
            <!-- Part 3 -->
            <div class="space-y-4 md:border-l md:border-white/10 md:pl-12">
              <div class="w-12 h-1 bg-blue-400 rounded-full mb-6"></div>
              <p class="text-gray-300 leading-relaxed text-lg">
                Ми не обмежуємося можливостями готових шаблонів — <strong class="text-white">створюємо саме те рішення</strong>, яке потрібне вашому бізнесу.
              </p>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- CTA Form Section -->
    <ContactSection 
      title="Готові запустити ефективний<br/><span class='text-cyan-400'>лендінг</span> для вашого бізнесу?" 
      description="Залиште заявку, і ми зв'яжемося з вами для безкоштовної консультації та обговорення вашого проекту." 
    />
  </div>
</template>

<script setup>
import { ref, onUnmounted, watch } from 'vue'
import { useWindowScroll } from '@vueuse/core'

const headerTheme = useState('headerTheme')

const features = [
  {
    emoji: '🎨',
    title: 'Індивідуальний UI/UX дизайн',
    description: 'Створюємо Дизайн сторінки відповідно до вашого бізнесу, бренду та завдань.'
  },
  {
    emoji: '💻',
    title: 'Кастомна розробка',
    description: 'Пишемо чистий та швидкий код без використання важких конструкторів, що гарантує миттєве завантаження сторінки. Ви отримуэте адаптивний сайт, який коректно працює на десктопах, планшетах та смартфонах.'
  },
  {
    emoji: '⚙️',
    title: 'Зручна адмін-панель',
    description: 'Зручне керування контентом сайту без необхідності звертатися до розробника для кожної зміни.'
  },
  {
    emoji: '🌐',
    title: 'Домен та Хостинг',
    description: 'Розміщення сайту на хостингу та налаштування його роботи. Реєстрація доменного імені та його підключення к вашому сайту.'
  },
  {
    emoji: '🔍',
    title: 'Базове SEO та Google Search Console',
    description: 'Реєструємо сайт у пошуковій системі Google для швидкої індексації, щоб клієнти могли знайти вас у пошуку.'
  }
]

const accordionItems = features.map(f => ({
  label: f.title,
  emoji: f.emoji,
  content: f.description
}))

useHead({
  title: 'Розробка Landing Page під ключ | VO Web Studio'
})
</script>
