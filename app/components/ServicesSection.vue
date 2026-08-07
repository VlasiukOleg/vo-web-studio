<template>
  <section id="services" class="py-24 md:py-32 relative bg-gradient-to-r from-[#005c8a] via-[#1a367d] to-[#2c237a]">
    <UContainer>
      <div class="text-center mb-12">
        <div class="text-sm font-bold tracking-widest uppercase text-white mb-4">Експертиза</div>
        <h2 class="font-noto text-4xl md:text-5xl font-black text-white mb-6">Наші послугирр</h2>
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
            'flex flex-col items-center justify-center px-6 py-4 min-w-[120px] transition-all duration-300 rounded-sm',
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
        <div class="grid grid-cols-1 lg:grid-cols-2">
          <!-- Left: Image -->
          <div class="relative aspect-video lg:aspect-auto">
            <!-- Smooth fade between images -->
            <transition name="fade" mode="out-in">
              <img :key="activeTab" :src="services[activeTab].image" :alt="services[activeTab].title" class="w-full h-full object-cover absolute inset-0" />
            </transition>
          </div>
          
          <!-- Right: Text Block -->
          <div class="bg-[#0e163b] p-10 md:p-16 flex flex-col justify-center text-white min-h-[400px]">
            <transition name="fade" mode="out-in">
              <div :key="activeTab">
                <h3 class="font-noto text-3xl font-bold mb-6 leading-tight">{{ services[activeTab].heading }}</h3>
                <div class="space-y-6 text-gray-300 leading-relaxed font-light text-base md:text-lg">
                  <p>{{ services[activeTab].description1 }}</p>
                  <p>{{ services[activeTab].description2 }}</p>
                </div>
                
                <div class="mt-12">
                  <UButton size="xl" variant="outline" color="gray" class="font-bold px-8 py-4 text-sm justify-center rounded-none text-white border-white/30 hover:bg-white hover:text-[#0e163b] uppercase tracking-wider transition-all">
                    Дізнатися більше
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
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop'
  },
  {
    title: 'E-Commerce',
    icon: 'i-heroicons-shopping-cart',
    heading: 'E-Commerce – Масштабовані онлайн магазини',
    description1: 'Ми розробляємо зручні інтернет-магазини, які забезпечують безперебійний процес покупок для ваших клієнтів та легке управління товарами для вас.',
    description2: 'Інтеграція платіжних систем, CRM, складського обліку та оптимізація швидкості загрузки каталогу гарантують стабільне зростання ваших онлайн-продажів.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1950&auto=format&fit=crop'
  },
  {
    title: 'Веб-додатки',
    icon: 'i-heroicons-computer-desktop',
    heading: 'Веб-додатки – Кастомні рішення для бізнесу',
    description1: 'Розробляємо складні кастомні CRM-системи, Single Page Applications (SPA), дашборди та портали, які автоматизують ваші унікальні бізнес-процеси.',
    description2: 'Використовуючи сучасний стек Nuxt та Vue, ми створюємо додатки, що працюють блискавично швидко, масштабуються та забезпечують найвищий рівень безпеки даних.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
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
