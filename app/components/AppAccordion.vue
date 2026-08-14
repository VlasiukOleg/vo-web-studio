<template>
  <div class="w-full">
    <UAccordion 
      :items="items" 
      multiple
      :ui="{
        root: 'flex flex-col gap-4 w-full',
        item: 'border-none',
        trigger: 'group w-full flex items-center justify-between p-4 bg-[#0a1120]/50 backdrop-blur-sm border rounded-xl transition-all duration-300 relative z-10 border-white/10 hover:border-cyan-500/50 focus-visible:ring-0 data-[state=open]:border-cyan-500 data-[state=open]:shadow-[0_0_15px_rgba(6,182,212,0.3)]',
        body: 'p-6 pt-10 rounded-b-xl -mt-6 bg-cyan-950/20 backdrop-blur-md shadow-[0_10px_20px_rgba(6,182,212,0.1)] relative z-0 text-gray-300 text-base leading-relaxed',
        trailingIcon: 'shrink-0 size-5 ms-auto group-data-[state=open]:rotate-180 group-data-[state=open]:text-cyan-400 text-gray-500 transition-transform duration-300 ease-out'
      }"
    >
      <!-- Trigger Content (Label area) -->
      <template #default="{ item }">
        <div class="flex items-center gap-4 text-left">
          <span class="text-2xl">{{ item.emoji }}</span>
          <span class="text-lg font-bold text-white">{{ item.label }}</span>
        </div>
      </template>

      <!-- Body Content -->
      <template #body="{ item }">
        {{ item.content }}
      </template>
    </UAccordion>
  </div>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true
  }
})
</script>
