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
              { label: 'E-commerce', class: 'text-cyan-400 font-bold' }
            ]" 
          />
        </div>
        <div class="max-w-5xl mx-auto text-center">
          <h1 class="font-noto text-5xl md:text-6xl font-black leading-[1.1] mb-8 uppercase tracking-tight text-white">
            Розробка сучасних<br/>
            <span class="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">Інтернет-магазинів</span>
          </h1>
          
          <p class="text-xl md:text-2xl text-gray-300 font-light mb-12 leading-relaxed max-w-4xl mx-auto">
            Від швидкого старту для малого бізнесу до масштабованих e-commerce платформ зі складними інтеграціями. Адаптивний дизайн, швидке завантаження та зручна адмінка.
          </p>

          <!-- Pricing Tabs -->
          <div class="relative z-10 mt-12">
            <UTabs :items="tabs" class="w-full max-w-lg mx-auto" :ui="{ 
              list: 'bg-[#0a1120]/80 backdrop-blur-md border border-white/10 rounded-full p-1.5', 
              indicator: 'bg-linear-to-r from-cyan-400 to-blue-500 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.5)]', 
              trigger: 'h-11 rounded-full font-bold transition-all data-[state=inactive]:text-gray-400 data-[state=inactive]:hover:text-white data-[state=active]:text-[#050b14] data-[state=active]:font-black' 
            }">
              <template #start>
                <!-- Price Card Start -->
                <PriceCard 
                  color="cyan"
                  subtitle="До 100 товарів"
                  price="20 000"
                  suffix="грн"
                />

                <!-- Interactive Accordion (Features Start) -->
                <div class="mb-16 max-w-3xl mx-auto text-left relative z-10">
                  <h2 class="font-noto text-3xl font-black text-white mb-8 text-center">Що входить у тариф Start?</h2>
                  <AppAccordion :items="startFeatures" />
                </div>
                
                <!-- CTA Button Start -->
                <UButton size="lg" color="gray" class="bg-linear-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-black px-8 py-4 text-base justify-center rounded-none uppercase tracking-wider group transition-all border-none shadow-lg shadow-purple-500/20 w-full sm:w-auto mx-auto flex">
                  Замовити Start
                  <UIcon name="i-heroicons-arrow-right" class="w-5 h-5 ml-2 transition-transform" />
                </UButton>
              </template>

              <template #pro>
                <!-- Price Card Pro -->
                <PriceCard 
                  color="purple"
                  subtitle="Необмежена кількість"
                  price="Індивідуальний"
                  suffix="розрахунок"
                  :is-custom="true"
                />

                <!-- Interactive Accordion (Features Pro Base) -->
                <div class="mb-12 max-w-3xl mx-auto text-left relative z-10">
                  <h2 class="font-noto text-3xl font-black text-white mb-8 text-center">Що входить у тариф Pro?</h2>
                  <AppAccordion :items="startFeatures" />
                </div>

                <!-- Interactive Accordion (Features Pro Addons) -->
                <div class="mb-16 max-w-3xl mx-auto text-left relative z-10">
                  <h2 class="font-noto text-3xl font-black text-purple-400 mb-8 text-center">Що ще можна додати?</h2>
                  <AppAccordion :items="proFeatures" />
                </div>
                
                <!-- CTA Button Pro -->
                <UButton size="lg" color="gray" class="bg-linear-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-black px-8 py-4 text-base justify-center rounded-none uppercase tracking-wider group transition-all border-none shadow-lg shadow-purple-500/20 w-full sm:w-auto mx-auto flex">
                  Отримати консультацію
                  <UIcon name="i-heroicons-arrow-right" class="w-5 h-5 ml-2 transition-transform" />
                </UButton>
              </template>
            </UTabs>
          </div>
          
        </div>
      </UContainer>
    </section>

    <!-- Why Custom Code Section -->
    <section class="py-18 relative bg-linear-to-r from-[#005c8a] via-[#1a367d] to-[#2c237a]">
      <UContainer>
        <div class="max-w-6xl mx-auto bg-linear-to-br from-[#050b14]/90 to-[#0a1120]/90 backdrop-blur-md border border-white/10 p-10 md:p-16 rounded-3xl relative overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
          <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
          <div class="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-[80px] pointer-events-none"></div>
          
          <h2 class="relative z-10 font-noto text-3xl md:text-4xl font-black text-white mb-12 text-center uppercase tracking-tight">Чому кастомний магазин, а не конструктор?</h2>
          
          <div class="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 text-left">
            <!-- Part 1 -->
            <div class="space-y-4">
              <div class="w-12 h-1 bg-cyan-400 rounded-full mb-6"></div>
              <div class="text-xl font-bold text-white mb-2">Блискавична швидкість</div>
              <p class="text-gray-300 leading-relaxed text-base">
                Ми використовуємо <strong class="text-white">SSR-рендеринг</strong>. Ваш каталог товарів завантажується миттєво, що критично важливо для утримання клієнтів з мобільних пристроїв.
              </p>
            </div>
            
            <!-- Part 2 -->
            <div class="space-y-4 md:border-l md:border-white/10 md:pl-12">
              <div class="w-12 h-1 bg-purple-400 rounded-full mb-6"></div>
              <div class="text-xl font-bold text-white mb-2">Гнучкість налаштувань</div>
              <p class="text-gray-300 leading-relaxed text-base">
                Ми не обмежені функціоналом готових плагінів. Будь-яка нестандартна бізнес-логіка (від калькуляторів доставки до гуртових цін) <strong class="text-white">реалізується саме так, як потрібно вам.</strong>
              </p>
            </div>
            
            <!-- Part 3 -->
            <div class="space-y-4 md:border-l md:border-white/10 md:pl-12">
              <div class="w-12 h-1 bg-blue-400 rounded-full mb-6"></div>
              <div class="text-xl font-bold text-white mb-2">Безпека та незалежність</div>
              <p class="text-gray-300 leading-relaxed text-base">
                Ваш код <strong class="text-white">належить вам</strong>. Жодних щомісячних платежів платформам-конструкторам та ризиків блокування.
              </p>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- CTA Form Section -->
    <ContactSection 
      title="Готові запустити ефективний<br/><span class='text-cyan-400'>магазин</span> для вашого бізнесу?" 
      description="Залиште заявку, і ми зв'яжемося з вами для безкоштовної консультації та обговорення вашого проекту." 
    />
  </div>
</template>

<script setup>
import { ref, onUnmounted, watch } from 'vue'
import { useWindowScroll } from '@vueuse/core'

const tabs = [
  { label: 'Тариф Start', slot: 'start' },
  { label: 'Тариф Pro', slot: 'pro' }
]

const startFeatures = [
  { emoji: '🎨', label: 'Індивідуальний UI/UX дизайн', content: 'Створюємо Дизайн сторінки відповідно до вашого бізнесу, бренду та завдань.' },
  { emoji: '💻', label: 'Кастомна розробка', content: 'Пишемо чистий та швидкий код без використання важких конструкторів, що гарантує миттєве завантаження сторінки. Ви отримуєте адаптивний сайт, який коректно працює на десктопах, планшетах та смартфонах.' },
  { emoji: '⚙️', label: 'Зручна адмін-панель', content: 'Зручне керування контентом сайту без необхідності звертатися до розробника для кожної зміни.' },
  { emoji: '🌐', label: 'Домен та Хостинг', content: 'Розміщення сайту на хостингу та налаштування його роботи. Реєстрація доменного імені та його підключення к вашому сайту.' },
  { emoji: '🔍', label: 'Базове SEO та Google Search Console', content: 'Реєструємо сайт у пошуковій системі Google для швидкої індексації, щоб клієнти могли знайти вас у пошуку.' },
  { emoji: '🛍️', label: 'Каталог товарів', content: 'До 100 товарів, категорії та підкатегорії, детальні картки товарів із варіантами (розмір, колір тощо), зручний пошук, базова фільтрація та функція "Обране".' },
  { emoji: '🛒', label: 'Кошик та замовлення', content: 'Зручне додавання товарів, інтерактивний міні-кошик, швидке оформлення замовлення на одній сторінці без зайвих кроків.' },
  { emoji: '📦', label: 'Інтеграція Нова Пошта', content: 'Автопідтягування міст, відділень та поштоматів для зручної доставки.' },
  { emoji: '📊', label: 'Аналітика та реклама', content: 'Налаштування Google Analytics, GTM, Facebook/TikTok Pixel.' },
  { emoji: '📲', label: 'Отримання заявок (Telegram / Email)', content: 'Миттєве отримання заявок із контактних форм сайту безпосередньо у ваш Telegram-бот або на електронну пошту.' }
]

const proFeatures = [
  { emoji: '👤', label: 'Особистий кабінет покупця', content: 'Авторизація, збережені дані та повна історія замовлень.' },
  { emoji: '💳', label: 'Онлайн-оплата', content: 'Підключення популярних платіжних систем (Monobank, WayForPay, LiqPay).' },
  { emoji: '🔄', label: 'Інтеграція з CRM', content: 'Двостороння інтеграція з CRM-системами (KeyCRM, SalesDrive) та складським обліком.' },
  { emoji: '🔍', label: 'Складні фільтри', content: 'Багаторівневі системи фільтрації товарів за характеристиками.' },
  { emoji: '🌍', label: 'Мультимовність та мультивалютність', content: 'Дозвольте клієнтам обирати зручну мову та валюту.' },
  { emoji: '📱', label: 'Автоматичні сповіщення', content: 'Email та SMS сповіщення про зміну статусу замовлення.' }
]

const headerTheme = useState('headerTheme')

useHead({
  title: 'Розробка E-commerce під ключ | VO Web Studio'
})
</script>
