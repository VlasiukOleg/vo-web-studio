<template>
  <div class="border-y border-white/10 bg-white/5 backdrop-blur-sm relative z-20">
    <UContainer class="py-8 md:py-12">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-y-0 md:gap-x-0 text-center">
        <StatItem 
          class="border-r border-white/10 px-4 md:px-8" 
          value="5+" 
          label="Років досвіду" 
          highlight 
        />
        <StatItem 
          class="border-transparent md:border-r md:border-white/10 px-4 md:px-8" 
          value="60+" 
          label="Реалізованих проєктів" 
        />
        <StatItem 
          class="border-r border-white/10 px-4 md:px-8" 
          value="100%" 
          label="Кастомний код" 
        />
        <StatItem 
          class="px-4 md:px-8" 
          value="14 дн." 
          label="Безкоштовна підтримка" 
        />
      </div>
    </UContainer>
  </div>
</template>
