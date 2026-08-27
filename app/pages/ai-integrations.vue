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
              { label: 'AI-Інтеграції', class: 'text-cyan-400 font-bold' }
            ]" 
          />
        </div>
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="font-noto text-4xl md:text-5xl font-black leading-[1.1] mb-8 uppercase tracking-tight text-white">
            <span class="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">AI-інтеграції</span><br/>
            для сайтів та бізнесу
          </h1>
          
          <p class="text-lg md:text-xl text-gray-300 font-light mb-12 leading-relaxed max-w-3xl mx-auto">
            Зробіть свій веб-проект розумнішим. Ми впроваджуємо сучасні алгоритми штучного інтелекту, які автоматизують рутину, покращують клієнтський досвід та виділяють вас серед конкурентів.
          </p>
          
          <!-- Price Card -->
          <div class="mb-16">
            <PriceCard 
              color="purple"
              price="Вартість залежить від функціоналу"
              suffix="та складності інтеграції"
              :is-custom="true"
            />
          </div>

          <!-- Interactive Accordion (Features) -->
          <div class="mb-16 max-w-3xl mx-auto text-left relative z-10">
            <h2 class="font-noto text-3xl font-black text-white mb-8 text-center uppercase">Що ми можемо додати?</h2>
            <AppAccordion :items="appFeatures" />
          </div>
          
          <!-- CTA Button -->
          <UButton to="#contact" size="lg" color="gray" class="bg-linear-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-black px-8 py-4 text-base justify-center rounded-none uppercase tracking-wider group transition-all border-none shadow-lg shadow-purple-500/20 w-full sm:w-auto mx-auto flex">
            Обговорити AI-інтеграцію
            <UIcon name="i-heroicons-sparkles" class="w-5 h-5 ml-2 transition-transform" />
          </UButton>
        </div>
      </UContainer>
    </section>

    <!-- Why Custom Code Section (Adapted for AI) -->
    <section class="py-18 relative bg-linear-to-r from-[#005c8a] via-[#1a367d] to-[#2c237a]">
      <UContainer>
        <div class="max-w-6xl mx-auto bg-linear-to-br from-[#050b14]/90 to-[#0a1120]/90 backdrop-blur-md border border-white/10 p-10 md:p-16 rounded-3xl relative overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
          <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
          <div class="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-[80px] pointer-events-none"></div>
          
          <h2 class="relative z-10 font-noto text-3xl md:text-4xl font-black text-white mb-12 text-center uppercase tracking-tight">Чому варто впроваджувати <span class="text-cyan-400">ШІ</span> вже зараз?</h2>
          
          <div class="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 text-left">
            <!-- Part 1 -->
            <div class="space-y-4">
              <div class="w-12 h-1 bg-cyan-400 rounded-full mb-6"></div>
              <p class="text-gray-300 leading-relaxed text-lg">
                Світ швидко змінюється. Ті, хто використовують ШІ, вже сьогодні <strong class="text-white">працюють швидше і заробляють більше</strong>, залишаючи конкурентів далеко позаду.
              </p>
            </div>
            
            <!-- Part 2 -->
            <div class="space-y-4 md:border-l md:border-white/10 md:pl-12">
              <div class="w-12 h-1 bg-purple-400 rounded-full mb-6"></div>
              <div class="text-gray-300 leading-relaxed text-lg space-y-4 font-medium">
                <div class="flex items-center gap-3"><UIcon name="i-heroicons-bolt" class="w-6 h-6 text-purple-400 shrink-0"/> <strong class="text-white">Автоматизація рутини</strong></div>
                <div class="flex items-center gap-3"><UIcon name="i-heroicons-bolt" class="w-6 h-6 text-purple-400 shrink-0"/> новий клієнтський досвід</div>
                <div class="flex items-center gap-3"><UIcon name="i-heroicons-bolt" class="w-6 h-6 text-purple-400 shrink-0"/> <strong class="text-white">зменшення витрат на персонал</strong></div>
              </div>
            </div>
            
            <!-- Part 3 -->
            <div class="space-y-4 md:border-l md:border-white/10 md:pl-12">
              <div class="w-12 h-1 bg-pink-400 rounded-full mb-6"></div>
              <p class="text-gray-300 leading-relaxed text-lg">
                AI-рішення <strong class="text-white">не обов'язково мають бути складними</strong>. Іноді достатньо однієї розумної функції (як-от підбір матеріалів з вашого прайсу), щоб неймовірно скоротити час обробки заявок.
              </p>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- CTA Form Section -->
    <ContactSection 
      id="contact"
      title="Готові інтегрувати<br/><span class='text-cyan-400'>ШІ</span> у ваш бізнес?" 
      description="Розкажіть про свої задачі, і ми підкажемо, як за допомогою штучного інтелекту можна оптимізувати ваші процеси." 
    />
  </div>
</template>

<script setup>
import { ref, onUnmounted, watch } from 'vue'
import { useWindowScroll } from '@vueuse/core'

const appFeatures = [
  { emoji: '💬', label: 'AI-чат та консультант', content: 'Розумний помічник, який відповідає на запитання клієнтів, допомагає знайти потрібну інформацію або товар. Він не діє за жорстким скриптом, а дійсно розуміє контекст.' },
  { emoji: '🛍️', label: 'AI-підбір товарів', content: 'Ідеально для інтернет-магазинів. Користувач вказує бюджет та параметри, а AI аналізує каталог і пропонує найбільш релевантні товари.' },
  { emoji: '📄', label: 'Розпізнавання документів (OCR)', content: 'Клієнт завантажує фото рукописного тексту, анкети чи накладної — AI розпізнає інформацію та перетворює її на структуровані дані у вашій базі.' },
  { emoji: '🧾', label: 'AI-розрахунки та підбір матеріалів', content: 'Клієнт описує своє завдання, а AI аналізує ваші прайс-листи: знаходить матеріали, розраховує кількість та автоматично формує готовий кошторис.' },
  { emoji: '🎙️', label: 'Голосові функції (Voice-to-Text)', content: 'Розпізнавання голосу для керування сайтом. Клієнти зможуть шукати товари, просто продиктувавши запит, що неймовірно зручно з мобільних пристроїв.' },
  { emoji: '📸', label: 'Аналіз зображень', content: 'Користувач завантажує фото, а AI класифікує товар, визначає матеріал або оцінює стан. Особливо корисно для будівельної чи сервісної тематики.' },
  { emoji: '✨', label: 'Візуальні AI-примірочні', content: 'Генерація та редагування зображень. Наприклад, клієнт може завантажити своє фото, щоб віртуально «приміряти» зачіску, одяг чи аксесуар.' },
  { emoji: '✍️', label: 'AI-генератор контенту для каталогу', content: 'Інструмент для адміністраторів: достатньо вказати назву, і ШІ автоматично згенерує унікальний SEO-опис товару, характеристики та метатеги.' },
  { emoji: '📲', label: 'Сповіщення (Telegram / Email)', content: 'Миттєве отримання заявок із контактних форм сайту безпосередньо у ваш Telegram-бот або на електронну пошту.' }
]

const headerTheme = useState('headerTheme')
</script>
