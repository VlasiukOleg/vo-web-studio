<template>
  <UCard 
    :ui="{ 
      root: ['mt-8 mb-16 max-w-md mx-auto bg-white/5 backdrop-blur-md rounded-3xl relative overflow-hidden transition-all duration-500 flex flex-col justify-center min-h-[180px]', themeColors.border, themeColors.hoverBorder, themeColors.shadow, themeColors.hoverShadow].join(' '),
      body: 'p-4 md:p-6 h-full flex flex-col justify-center w-full z-10',
      header: 'hidden',
      footer: 'hidden'
    }"
  >
    <!-- Background Blobs -->
    <div class="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-2xl pointer-events-none z-0" :class="themeColors.blobTop"></div>
    <div class="absolute -bottom-10 -left-10 w-40 h-40 rounded-full blur-2xl pointer-events-none z-0" :class="themeColors.blobBottom"></div>
    
    <!-- Content -->
    <div v-if="title" class="font-black text-white text-xl md:text-2xl uppercase tracking-wide mb-1 relative z-10">
      {{ title }}
    </div>
    
    <div v-if="description" class="text-white/80 text-xs md:text-sm font-medium mb-4 relative z-10">
      {{ description }}
    </div>
    
    <div class="font-black text-white relative z-10 leading-tight" :class="priceSizeClass">
      <span v-html="formattedPrice"></span>
    </div>
  </UCard>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  color: {
    type: String,
    default: 'cyan',
    validator: (v) => ['cyan', 'purple'].includes(v)
  },
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  price: {
    type: String,
    required: true
  },
  suffix: {
    type: String,
    default: ''
  },
  isCustom: {
    type: Boolean,
    default: false
  }
})

const colors = {
  cyan: {
    border: 'border-cyan-500/30',
    hoverBorder: 'hover:border-cyan-400/60',
    shadow: 'shadow-[0_0_30px_rgba(6,182,212,0.15)]',
    hoverShadow: 'hover:shadow-[0_0_50px_rgba(6,182,212,0.25)]',
    text: 'text-cyan-400',
    blobTop: 'bg-cyan-500/20',
    blobBottom: 'bg-purple-500/20'
  },
  purple: {
    border: 'border-purple-500/30',
    hoverBorder: 'hover:border-purple-400/60',
    shadow: 'shadow-[0_0_30px_rgba(168,85,247,0.15)]',
    hoverShadow: 'hover:shadow-[0_0_50px_rgba(168,85,247,0.25)]',
    text: 'text-purple-400',
    blobTop: 'bg-purple-500/20',
    blobBottom: 'bg-cyan-500/20'
  }
}

const themeColors = computed(() => colors[props.color])

const priceSizeClass = computed(() => {
  return props.isCustom ? 'text-2xl md:text-3xl mt-2' : 'text-4xl md:text-5xl mt-1'
})

const formattedPrice = computed(() => {
  if (props.isCustom) {
    return `<span class="text-gray-400">${props.price}</span><br><span class="text-sm md:text-base tracking-widest uppercase text-gray-400 block mt-2">${props.suffix}</span>`
  }
  return `${props.price} <span class="text-2xl md:text-3xl text-gray-400">${props.suffix}</span>`
})
</script>
