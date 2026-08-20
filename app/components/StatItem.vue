<script setup>
defineProps({
  value: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  highlight: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div>
    <div 
      class="font-noto text-3xl md:text-4xl lg:text-5xl font-black mb-2"
      :class="highlight ? 'text-cyan-400' : 'text-white'"
    >
      {{ value }}
    </div>
    <div class="text-sm text-gray-400 uppercase tracking-widest font-bold">
      {{ label }}
    </div>
  </div>
</template>
