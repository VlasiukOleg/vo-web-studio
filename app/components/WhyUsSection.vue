<template>
  <section class="relative w-full bg-white border-y border-gray-200 lg:bg-[linear-gradient(to_right,#def3ff_50%,white_50%)]">
    <div class="flex flex-col lg:flex-row w-full relative items-start">
      
      <!-- Left Column (Sticky on Desktop) -->
      <div class="w-full lg:w-1/2 bg-[#def3ff] lg:bg-transparent border-r border-blue-200 lg:sticky lg:top-15 h-fit flex flex-col p-10 md:p-16 lg:p-18 overflow-hidden z-10">
        <div class="max-w-xl mx-auto lg:mx-0 lg:ml-auto w-full lg:pr-10 relative">
          <div class="text-[#00a8ff] font-bold tracking-widest uppercase text-sm mb-4">
            Переваги технології
          </div>
          <h2 class="font-noto text-4xl md:text-5xl lg:text-[3.5rem] font-black text-[#15234b] mb-8 leading-[1.1] tracking-tight">
            Чому варто обрати кастомну розробку?
          </h2>
          
          <div class="space-y-6 text-[#2d4263] text-lg font-medium leading-relaxed mb-10">
            <p>
              Ми створюємо кастомні веб-продукти, які працюють на вас, а не обмежують готовими шаблонами. Поєднуючи надійність серверних технологій із гнучкістю інтерактивних інтерфейсів, ми забезпечуємо максимальну швидкість, безпеку та повну готовність вашого проєкту до майбутнього масштабування.
            </p>
          </div>
          
          <!-- Collage (Reduced height) -->
          <div class="relative w-full aspect-video lg:aspect-16/7 rounded-xl overflow-hidden shadow-2xl group cursor-pointer">
            <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop" alt="Code collage" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div class="absolute inset-0 bg-linear-to-t from-[#15234b]/90 to-transparent pointer-events-none"></div>
            <div class="absolute bottom-6 left-6 text-white font-bold text-xl lg:text-2xl">Технологічна перевага</div>
          </div>
        </div>
      </div>
      
      <!-- Right Column (Scrollable content) -->
      <div class="w-full lg:w-1/2 flex flex-col bg-white">
        <WhyUsCard 
          v-for="(card, index) in cards" 
          :key="index"
          :title="card.title"
          :description="card.description"
          :image="card.image"
          :accent-line-class="card.accentLineClass"
          :accent-border-class="card.accentBorderClass"
          :delay-class="card.delayClass"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
const cards = [
  {
    title: 'Швидка робота',
    description: 'Оптимізований код, серверний рендеринг та правильна робота з ресурсами допомагають сторінкам швидко завантажуватися та реагувати на дії користувача.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop',
    accentLineClass: 'bg-[#00a8ff]',
    accentBorderClass: 'hover:border-l-[#00a8ff]',
    delayClass: ''
  },
  {
    title: 'Плавна взаємодія',
    description: 'Переходи між сторінками та взаємодія з сайтом відбуваються без зайвих перезавантажень. Сайт працює швидко та комфортно на різних пристроях.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    accentLineClass: 'bg-pink-500',
    accentBorderClass: 'hover:border-l-pink-500',
    delayClass: 'delay-100'
  },
  {
    title: 'SEO-оптимізована основа',
    description: 'Семантична структура, метадані, швидкість завантаження та серверний рендеринг створюють якісну технічну основу для подальшого SEO-просування.',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074&auto=format&fit=crop',
    accentLineClass: 'bg-purple-500',
    accentBorderClass: 'hover:border-l-purple-500',
    delayClass: 'delay-200'
  },
  {
    title: 'Готовий до розвитку',
    description: 'Нові сторінки, функції, інтеграції, особисті кабінети та інші можливості можна додавати поступово, без необхідності створювати сайт заново.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop',
    accentLineClass: 'bg-blue-500',
    accentBorderClass: 'hover:border-l-blue-500',
    delayClass: 'delay-300'
  }
]
</script>
