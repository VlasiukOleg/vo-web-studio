<template>
  <div class="absolute inset-0 w-full h-full overflow-hidden">
    <UMarquee
      reverse
      orientation="vertical"
      :overlay="false"
      :ui="{
        root: '[--duration:40s] absolute w-[260px] left-[10px] md:left-[485px] -top-[300px] h-[1040px] transform-3d rotate-x-35 rotate-y-0 rotate-z-15 [--gap:--spacing(6)]'
      }"
    >
      <img
        v-for="i in 4"
        :key="i"
        :src="`/blocks/image${i}.webp`"
        width="260"
        height="260"
        :alt="`Nuxt UI Screenshot ${i}`"
        loading="eager"
        fetchpriority="high"
        class="aspect-square object-cover bg-white/5 opacity-40 md:opacity-100 transition-opacity duration-300"
      />
    </UMarquee>
    <UMarquee
      orientation="vertical"
      :overlay="false"
      :ui="{
        root: '[--duration:40s] absolute w-[260px] -top-[400px] left-[310px] md:left-[800px] h-[1160px] transform-3d rotate-x-35 rotate-y-0 rotate-z-15 [--gap:--spacing(6)]'
      }"
    >
      <img
        v-for="i in [5, 6, 7, 8]"
        :key="i"
        :src="`/blocks/image${i}.png`"
        width="260"
        height="260"
        :alt="`Nuxt UI Screenshot ${i}`"
        loading="eager"
        fetchpriority="high"
        class="aspect-square object-cover bg-white/5 opacity-40 md:opacity-100 transition-opacity duration-300"
      />
    </UMarquee>
    <UMarquee
      reverse
      orientation="vertical"
      :overlay="false"
      :ui="{
        root: 'hidden md:flex [--duration:40s] absolute w-[260px] -top-[300px] left-[1080px] h-[1060px] transform-3d rotate-x-35 rotate-y-0 rotate-z-15 [--gap:--spacing(6)]'
      }"
    >
      <img
        v-for="i in [9, 10, 11, 12]"
        :key="i"
        :src="`/blocks/image${i}.png`"
        width="260"
        height="260"
        :alt="`Nuxt UI Screenshot ${i}`"
        loading="eager"
        class="aspect-square object-cover bg-white/5 opacity-40 md:opacity-100 transition-opacity duration-300"
      />
    </UMarquee>
    <UMarquee
      orientation="vertical"
      :overlay="false"
      :ui="{
        root: 'hidden md:flex [--duration:40s] absolute w-[260px] -top-[300px] left-[1380px] h-[1060px] transform-3d rotate-x-35 rotate-y-0 rotate-z-15 [--gap:--spacing(6)]'
      }"
    >
      <img
        v-for="i in [9, 10, 11, 12]"
        :key="i"
        :src="`/blocks/image${i}.png`"
        width="260"
        height="260"
        :alt="`Nuxt UI Screenshot ${i}`"
        loading="eager"
        class="aspect-square object-cover bg-white/5 opacity-40 md:opacity-100 transition-opacity duration-300"
      />
    </UMarquee>
  </div>
</template>
