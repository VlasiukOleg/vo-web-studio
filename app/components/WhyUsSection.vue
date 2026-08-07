<template>
  <section class="flex flex-col lg:flex-row w-full bg-white border-y border-gray-200 overflow-hidden">
    <!-- Left Column (Light Blue) -->
    <div class="w-full lg:w-1/2 bg-[#def3ff] p-10 md:p-16 lg:p-24 flex flex-col justify-center border-r border-blue-200">
      <div class="max-w-xl mx-auto lg:mx-0 lg:ml-auto w-full lg:pr-10">
        <div class="text-[#00a8ff] font-bold tracking-widest uppercase text-sm mb-4">
          Переваги технології
        </div>
        <h2 class="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-[#15234b] mb-8 leading-[1.1] tracking-tight">
          Чому кастомний<br/> Nuxt SSR?
        </h2>
        
        <div class="space-y-6 text-[#2d4263] text-lg font-medium leading-relaxed mb-16">
          <p>
            Ми створюємо продукти, які працюють на вас, а не обмежують ваші можливості шаблонними рішеннями.
          </p>
          <p>
            Використання сучасного стеку гарантує найвищу продуктивність, гнучкість та довговічність вашого цифрового продукту.
          </p>
        </div>
        
        <!-- Collage Placeholder -->
        <div class="relative w-full aspect-[4/3] rounded-sm overflow-hidden shadow-2xl group cursor-pointer">
          <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop" alt="Code collage" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          <div class="absolute inset-0 bg-gradient-to-t from-[#15234b]/90 to-transparent pointer-events-none"></div>
          <div class="absolute bottom-6 left-6 text-white font-bold text-xl lg:text-2xl">Технологічна перевага</div>
        </div>
      </div>
    </div>
    
    <!-- Right Column (White List) -->
    <div class="w-full lg:w-1/2 flex flex-col justify-center bg-white">
      <!-- Item 1 -->
      <div class="relative group border-b border-gray-200 border-l-4 border-l-transparent hover:border-l-[#00a8ff] transition-all bg-white cursor-pointer overflow-hidden flex-1 flex flex-col justify-center">
        <!-- Faded background image -->
        <div class="absolute top-0 right-0 w-2/3 h-full opacity-40 transition-transform duration-700 group-hover:scale-105 pointer-events-none" style="mask-image: linear-gradient(to right, transparent, black 80%); -webkit-mask-image: linear-gradient(to right, transparent, black 80%);">
          <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
        </div>
        
        <div class="relative z-10 p-10 md:p-12 lg:p-16 xl:p-20 max-w-xl">
          <h3 class="text-3xl font-bold text-[#15234b] mb-4">Блискавичне завантаження</h3>
          <p class="text-[#5a6b8c] text-base lg:text-lg mb-8 leading-relaxed font-medium max-w-md">
            SSR-рендеринг забезпечує завантаження за долі секунди. Ви не втрачаєте клієнтів через повільний сайт.
          </p>
          <div class="text-[#00a8ff] font-bold uppercase tracking-widest text-sm flex items-center gap-2 group-hover:gap-4 transition-all">
            Дізнатися більше <UIcon name="i-heroicons-chevron-right" class="w-5 h-5" />
          </div>
        </div>
      </div>
      
      <!-- Item 2 -->
      <div class="relative group border-b border-gray-200 border-l-4 border-l-transparent hover:border-l-[#00a8ff] transition-all bg-white cursor-pointer overflow-hidden flex-1 flex flex-col justify-center">
        <div class="absolute top-0 right-0 w-2/3 h-full opacity-40 transition-transform duration-700 group-hover:scale-105 pointer-events-none" style="mask-image: linear-gradient(to right, transparent, black 80%); -webkit-mask-image: linear-gradient(to right, transparent, black 80%);">
          <img src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074&auto=format&fit=crop" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
        </div>
        
        <div class="relative z-10 p-10 md:p-12 lg:p-16 xl:p-20 max-w-xl">
          <h3 class="text-3xl font-bold text-[#15234b] mb-4">Бездоганне SEO</h3>
          <p class="text-[#5a6b8c] text-base lg:text-lg mb-8 leading-relaxed font-medium max-w-md">
            Пошуковики люблять чистий та швидкий код кастомних сайтів. Ваш бізнес буде вище в рейтингах Google.
          </p>
          <div class="text-[#00a8ff] font-bold uppercase tracking-widest text-sm flex items-center gap-2 group-hover:gap-4 transition-all">
            Дізнатися більше <UIcon name="i-heroicons-chevron-right" class="w-5 h-5" />
          </div>
        </div>
      </div>
      
      <!-- Item 3 -->
      <div class="relative group border-b border-gray-200 border-l-4 border-l-transparent hover:border-l-[#00a8ff] transition-all bg-white cursor-pointer overflow-hidden flex-1 flex flex-col justify-center">
        <div class="absolute top-0 right-0 w-2/3 h-full opacity-40 transition-transform duration-700 group-hover:scale-105 pointer-events-none" style="mask-image: linear-gradient(to right, transparent, black 80%); -webkit-mask-image: linear-gradient(to right, transparent, black 80%);">
          <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
        </div>
        
        <div class="relative z-10 p-10 md:p-12 lg:p-16 xl:p-20 max-w-xl">
          <h3 class="text-3xl font-bold text-[#15234b] mb-4">Безмежне масштабування</h3>
          <p class="text-[#5a6b8c] text-base lg:text-lg mb-8 leading-relaxed font-medium max-w-md">
            Жодних обмежень шаблонів. Ми створюємо архітектуру, яка легко адаптується під зростання вашого бізнесу.
          </p>
          <div class="text-[#00a8ff] font-bold uppercase tracking-widest text-sm flex items-center gap-2 group-hover:gap-4 transition-all">
            Дізнатися більше <UIcon name="i-heroicons-chevron-right" class="w-5 h-5" />
          </div>
        </div>
      </div>
      
    </div>
  </section>
</template>
