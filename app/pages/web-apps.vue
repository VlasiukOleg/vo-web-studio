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
              { label: 'Веб-додатки (SPA)', class: 'text-cyan-400 font-bold' }
            ]" 
          />
        </div>
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="font-noto text-4xl md:text-5xl font-black leading-[1.1] mb-8 uppercase tracking-tight text-white">
            Розробка <span class="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">веб-додатків</span><br/>
            під ваші задачі
          </h1>
          
          <p class="text-lg md:text-xl text-gray-300 font-light mb-12 leading-relaxed max-w-3xl mx-auto">
            Створюємо швидкі та зручні веб-додатки для автоматизації бізнес-процесів, роботи з даними та вирішення конкретних задач вашого бізнесу.
          </p>
          
          <!-- Price Card -->
          <div class="mb-16">
            <PriceCard 
              color="purple"
              price="Вартість залежить від функціоналу"
              suffix="та складності проєкту"
              :is-custom="true"
            />
          </div>

          <!-- Interactive Accordion (Features) -->
          <div class="mb-16 max-w-3xl mx-auto text-left relative z-10">
            <h2 class="font-noto text-3xl font-black text-white mb-8 text-center">Що ми можемо розробити?</h2>
            <AppAccordion :items="appFeatures" />
          </div>
          
          <!-- CTA Button -->
          <UButton to="#contact" size="lg" color="gray" class="bg-linear-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-black px-8 py-4 text-base justify-center rounded-none uppercase tracking-wider group transition-all border-none shadow-lg shadow-purple-500/20 w-full sm:w-auto mx-auto flex">
            Обговорити проєкт
            <UIcon name="i-heroicons-arrow-right" class="w-5 h-5 ml-2 transition-transform" />
          </UButton>
        </div>
      </UContainer>
    </section>

    <!-- Why Custom Code Section (Adapted for Web Apps) -->
    <section class="py-18 relative bg-linear-to-r from-[#005c8a] via-[#1a367d] to-[#2c237a]">
      <UContainer>
        <div class="max-w-6xl mx-auto bg-linear-to-br from-[#050b14]/90 to-[#0a1120]/90 backdrop-blur-md border border-white/10 p-10 md:p-16 rounded-3xl relative overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
          <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
          <div class="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-[80px] pointer-events-none"></div>
          
          <h2 class="relative z-10 font-noto text-3xl md:text-4xl font-black text-white mb-12 text-center uppercase tracking-tight">Чому кастомна розробка краща за конструктори?</h2>
          
          <div class="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 text-left">
            <div class="space-y-4">
              <div class="w-12 h-1 bg-cyan-400 rounded-full mb-6"></div>
              <p class="text-gray-300 leading-relaxed text-lg">
                Веб-додатки створюються під <strong class="text-white">ваші унікальні процеси</strong>. Жоден шаблон не здатен покрити специфічну логіку розрахунків чи інтеграцій так, як це робить кастомний код.
              </p>
            </div>
            
            <div class="space-y-4 md:border-l md:border-white/10 md:pl-12">
              <div class="w-12 h-1 bg-purple-400 rounded-full mb-6"></div>
              <div class="text-gray-300 leading-relaxed text-lg space-y-4 font-medium">
                <div class="flex items-center gap-3"><UIcon name="i-heroicons-arrow-right-circle" class="w-6 h-6 text-purple-400 shrink-0"/> <strong class="text-white">Безпека даних</strong></div>
                <div class="flex items-center gap-3"><UIcon name="i-heroicons-arrow-right-circle" class="w-6 h-6 text-purple-400 shrink-0"/> повний контроль</div>
                <div class="flex items-center gap-3"><UIcon name="i-heroicons-arrow-right-circle" class="w-6 h-6 text-purple-400 shrink-0"/> <strong class="text-white">масштабованість</strong></div>
              </div>
            </div>
            
            <div class="space-y-4 md:border-l md:border-white/10 md:pl-12">
              <div class="w-12 h-1 bg-blue-400 rounded-full mb-6"></div>
              <p class="text-gray-300 leading-relaxed text-lg">
                Ми використовуємо сучасний стек <strong class="text-white">Vue.js та Nuxt</strong>, щоб ваш додаток працював без перезавантажень сторінки, як справжня десктопна програма.
              </p>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- CTA Form Section -->
    <ContactSection 
      title="Маєте ідею для<br/><span class='text-cyan-400'>веб-додатка?</span>" 
      description="Залиште заявку, і ми зв'яжемося з вами для безкоштовної консультації та прорахунку вашого проєкту." 
    />
  </div>
</template>

<script setup>
import { ref, onUnmounted, watch } from 'vue'

useHead({
  title: 'Веб-додатки (SPA) - РОЗРОБЛЕНО',
  meta: [
    { name: 'description', content: 'Розробка веб-додатків під ваші задачі: онлайн-калькулятори, дашборди, системи бронювання та інші рішення від студії РОЗРОБЛЕНО.' }
  ]
})
import { useWindowScroll } from '@vueuse/core'

const appFeatures = [
  { emoji: '🧮', label: 'Онлайн-калькулятори', content: 'Інструменти для точного розрахунку вартості послуг, будівельних матеріалів, логістики чи доставки.' },
  { emoji: '📊', label: 'Дашборди та аналітика', content: 'Панелі для візуалізації даних, куди виводяться графіки, статистика продажів або фінансові показники через сторонні API.' },
  { emoji: '📅', label: 'Системи бронювання (Booking)', content: 'Індивідуальні інтерфейси для запису клієнтів (віджети для послуг, барбершопів, СТО чи клінік).' },
  { emoji: '👤', label: 'Особисті кабінети', content: 'Персональні кабінети користувачів із профілем, історією замовлень, документами, статусами та іншою необхідною інформацією.' },
  { emoji: '🔐', label: 'Внутрішні системи для бізнесу', content: 'Невеликі системи для обліку клієнтів, заявок, замовлень, товарів, документів та інших внутрішніх процесів.' },
  { emoji: '🔄', label: 'Автоматизація процесів', content: 'Автоматизація рутинних операцій, обробки заявок, розрахунків, повідомлень та інших повторюваних процесів.' },
  { emoji: '🔗', label: 'Інтеграції з зовнішніми сервісами', content: 'Підключення API, платіжних систем, CRM, служб доставки, аналітики та інших сервісів.' },
  { emoji: '📲', label: 'Сповіщення (Telegram / Email)', content: 'Миттєве отримання заявок із контактних форм сайту безпосередньо у ваш Telegram-бот або на електронну пошту.' }
]

const headerTheme = useState('headerTheme')
</script>
