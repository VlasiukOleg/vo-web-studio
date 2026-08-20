<template>
  <div 
    ref="cardRef"
    class="relative group border-b border-gray-200 border-l-4 border-l-transparent transition-all duration-700 bg-white overflow-hidden flex flex-col justify-center min-h-[20vh] md:min-h-[50vh] lg:min-h-[30vh] hover:bg-[#15234b]"
    :class="accentBorderClass"
  >
    <!-- animated wrapper for content -->
    <div class="w-full flex-1 flex flex-col justify-center transition-all duration-1000 ease-out"
         :class="[delayClass, isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24']">
      
      <div class="absolute top-0 right-0 w-2/3 h-full opacity-30 group-hover:opacity-50 transition-opacity duration-700 pointer-events-none" style="mask-image: linear-gradient(to right, transparent, black 80%); -webkit-mask-image: linear-gradient(to right, transparent, black 80%);">
        <img :src="image" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
      </div>
      
      <div class="relative z-10 p-8 md:p-10 lg:p-12 max-w-xl">
        <div class="w-12 h-1 rounded-full mb-4" :class="accentLineClass"></div>
        <h3 class="font-noto text-2xl md:text-3xl font-bold text-[#15234b] group-hover:text-white transition-colors duration-700 mb-4">{{ title }}</h3>
        <p class="text-[#5a6b8c] group-hover:text-gray-300 transition-colors duration-700 text-base lg:text-lg leading-relaxed font-medium">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  accentLineClass: { type: String, required: true },
  accentBorderClass: { type: String, required: true },
  delayClass: { type: String, default: '' }
})

const cardRef = ref(null)
const isVisible = ref(false)

// Use intersection observer to trigger animations when scrolled into view
useIntersectionObserver(cardRef, ([{ isIntersecting }]) => {
  isVisible.value = isIntersecting
}, { threshold: 0.5 })
</script>
