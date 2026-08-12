<template>
  <section id="services" class="py-18 relative bg-linear-to-r from-[#005c8a] via-[#1a367d] to-[#2c237a]">
    <UContainer>
      <div class="text-center mb-12">
        <div class="text-sm font-bold tracking-widest uppercase text-white mb-4">Експертиза</div>
        <h2 class="font-noto text-4xl md:text-5xl font-black text-white mb-6">Наші послуги</h2>
        <p class="text-white/80 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
          Комплексні рішення для розвитку вашого бізнесу в інтернеті, від прототипу до успішного релізу.
        </p>
      </div>
      
      <!-- Tabs -->
      <div class="flex justify-center flex-wrap gap-2 md:gap-4 mb-12">
        <button 
          v-for="(service, index) in services" 
          :key="index"
          @click="activeTab = index"
          :class="[
            'flex flex-col items-center justify-center px-6 py-4 min-w-30 transition-all duration-300 rounded-sm',
            activeTab === index 
              ? 'bg-white text-[#1a365d]' 
              : 'bg-transparent text-white hover:bg-white/10'
          ]"
        >
          <UIcon :name="service.icon" class="w-6 h-6 mb-2" />
          <span class="text-xs font-bold tracking-widest uppercase">{{ service.title }}</span>
        </button>
      </div>

      <!-- Content Area -->
      <div class="max-w-6xl mx-auto shadow-2xl overflow-hidden rounded-sm transition-all duration-500">
        <div class="grid grid-cols-1 lg:grid-cols-6">
          <!-- Left: Image -->
          <div class="relative aspect-video lg:aspect-auto lg:col-span-2">
            <!-- Smooth fade between images -->
            <transition name="fade" mode="out-in">
              <img :key="activeTab" :src="services[activeTab].image" :alt="services[activeTab].title" class="w-full h-full object-cover absolute inset-0" />
            </transition>
          </div>
          
          <!-- Right: Text Block -->
          <div class="bg-[#0e163b] p-10 flex flex-col justify-center text-white lg:col-span-4">
            <transition name="fade" mode="out-in">
              <div :key="activeTab">
                <h3 class="font-noto text-3xl font-bold mb-6 leading-tight">{{ services[activeTab].heading }}</h3>
                <div class="space-y-6 text-gray-300 leading-relaxed font-light text-base md:text-lg">
                  <p>{{ services[activeTab].description1 }}</p>
                  <p>{{ services[activeTab].description2 }}</p>
                </div>
                
                <div class="mt-6 flex justify-end">
                  <UButton :to="services[activeTab].link" size="xl" class="bg-cyan-500 text-[#050b14] hover:bg-cyan-400 font-black px-8 py-4 text-sm justify-center rounded-none uppercase tracking-wider transition-all border-none shadow-lg shadow-cyan-500/20">
                    Ціна та інформація
                  </UButton>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref(0)

const services = [
  {
    title: 'Лендінги',
    icon: 'i-heroicons-star',
    heading: 'Лендінги – Ефективне залучення клієнтів',
    description1: 'Ми створюємо сучасні односторінкові сайти з продуманим UX/UI дизайном, які ідеально підходять для рекламних кампаній та презентації одного продукту чи послуги.',
    description2: 'Кожен лендінг оптимізується під максимальну конверсію завдяки потужним закликам до дії, швидкій загрузці та бездоганній адаптації під мобільні пристрої.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    link: '/landing'
  },
  {
    title: 'E-Commerce',
    icon: 'i-heroicons-shopping-cart',
    heading: 'E-Commerce – Інтернет-магазин під ключ',
    description1: 'Створюємо сучасні інтернет-магазини з зручним каталогом, кошиком та оформленням замовлень. Швидкий, адаптивний і продуманий магазин, яким легко керувати.',
    description2: 'Продумана структура каталогу, адаптація під смартфони та інтеграція необхідних сервісів створюють комфортний шлях від першого перегляду до покупки.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1950&auto=format&fit=crop',
    link: '/ecommerce'
  },
  {
    title: 'Веб-додатки',
    icon: 'i-heroicons-computer-desktop',
    heading: 'Веб-додатки – Кастомні рішення для бізнесу',
    description1: 'Якщо вам потрібен унікальний калькулятор послуг, система обліку лідів або портал для співробітників — ми розробимо це з нуля під вашу логіку.',
    description2: 'Використовуючи сучасний стек Nuxt та Vue, ми створюємо додатки, що працюють блискавично швидко, масштабуються та забезпечують найвищий рівень безпеки даних.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    link: '/web-apps'
  },
  {
    title: 'AI-Інтеграції',
    icon: 'i-heroicons-sparkles',
    heading: 'ШІ-ДЛЯ ВАШОГО БІЗНЕСУ',
    description1: 'AI-рішення не обов\'язково мають бути складними. Іноді достатньо однієї розумної функції, щоб автоматизувати частину роботи та скоротити час обробки заявок.',
    description2: 'Ми не просто «додаємо ChatGPT» на сайт — ми вбудовуємо штучний інтелект у ваші бізнес-процеси: від розумних чат-ботів та підбору товарів до розпізнавання документів (OCR).',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop',
    link: '/ai-integrations'
  }
]
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
