<template>
  <section id="process" class="py-10 md:py-18 bg-[#00042a] relative">
    <UContainer>
      <div class="text-center max-w-3xl mx-auto mb-12 md:mb-20">
        <h2 class="font-noto text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Етапи розробки</h2>
        <p class="text-slate-400 text-lg md:text-xl leading-relaxed font-light">Прозорий, структурований процес, орієнтований на результат. Від ідеї до успішного запуску.</p>
      </div>

      <div class="max-w-4xl mx-auto relative px-4 md:px-0">
        <!-- Background dark vertical line -->
        <div class="absolute left-[70px] md:left-[164px] top-6 bottom-6 w-[2px] bg-[#1a365d]/50"></div>
        
        <div class="flex flex-col gap-12 md:gap-20">
          <div 
            v-for="(step, index) in steps" 
            :key="index"
            :ref="el => { if (el) stepRefs[index] = el }"
            class="relative flex gap-8 md:gap-16 items-start"
          >
            <!-- Glowing Number -->
            <div class="w-[50px] md:w-[130px] flex justify-end shrink-0 relative z-20 py-2">
              <span 
                class="text-6xl md:text-[7rem] font-black font-sans leading-none transition-all duration-700"
                :class="activeStep >= index ? 'text-[#00d2ff] drop-shadow-[0_0_25px_rgba(0,210,255,0.6)]' : 'text-[#1a365d] drop-shadow-none'"
              >
                0{{ index + 1 }}
              </span>
            </div>
            
            <!-- Glowing Dot on the line -->
            <div 
              class="absolute left-[67px] md:left-[161px] top-[26px] md:top-[45px] w-2 h-2 rounded-full transition-all duration-700 z-20"
              :class="activeStep >= index ? 'bg-[#00d2ff] shadow-[0_0_10px_#00d2ff]' : 'bg-[#1a365d]'"
            ></div>

            <!-- Content Column -->
            <div class="pt-2 md:pt-6 flex-1 max-w-xl">
              <h3 
                class="font-noto text-2xl md:text-3xl font-bold mb-4 transition-colors duration-700"
                :class="activeStep >= index ? 'text-[#00d2ff]' : 'text-white'"
              >
                {{ step.title }}
              </h3>
              <p class="text-slate-300 text-base md:text-lg leading-relaxed font-light">
                {{ step.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const steps = [
  {
    title: 'Знайомство та планування',
    description: 'Обговорюємо ваш бізнес, цілі та завдання майбутнього сайту. Визначаємо структуру, необхідний функціонал, інтеграції та формуємо зрозумілий план роботи.'
  },
  {
    title: 'UI/UX Дизайн',
    description: 'Створюємо структуру та візуальний стиль майбутнього сайту. Продумуємо навігацію, розташування елементів і сценарії взаємодії, щоб сайт був зручним для ваших клієнтів.'
  },
  {
    title: 'Розробка',
    description: 'Перетворюємо затверджений дизайн на повноцінний веб-продукт. Реалізуємо необхідний функціонал, адаптивність, інтеграції та оптимізуємо швидкість роботи.'
  },
  {
    title: 'Тестування',
    description: 'Перевіряємо сайт на різних пристроях і екранах, тестуємо функціонал, форми, інтеграції та основні сценарії користувача. Виправляємо помилки перед запуском.'
  },
  {
    title: 'Запуск',
    description: 'Публікуємо готовий сайт на сервері, підключаємо домен та необхідні сервіси. Налаштовуємо аналітику та перевіряємо роботу сайту після запуску.'
  }
]

const stepRefs = ref([])
const activeStep = ref(-1)

const handleScroll = () => {
  let maxVisible = -1
  stepRefs.value.forEach((el, index) => {
    if (el) {
      const rect = el.getBoundingClientRect()
      // Activate when the item's top crosses 75% of the viewport height
      if (rect.top < window.innerHeight * 0.75) {
        maxVisible = index
      }
    }
  })
  activeStep.value = maxVisible
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  // Check initial state after a short delay to ensure rendering is complete
  setTimeout(handleScroll, 100)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
