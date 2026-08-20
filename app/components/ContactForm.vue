<template>
  <UForm :state="state" @submit="onSubmit" class="space-y-8">
    <UFormField name="name" label="Ім'я" :ui="{ label: 'text-white dark:text-white' }">
      <UInput v-model="state.name" size="xl" placeholder="Ваше ім'я" class="w-full" :ui="{ base: 'transition-colors focus:ring-brand-500' }" />
    </UFormField>
    
    <UFormField name="contact" label="Контактні дані" :ui="{ label: 'text-white dark:text-white' }">
      <UInput v-model="state.contact" size="xl" placeholder="Email або Telegram" class="w-full" :ui="{ base: 'transition-colors focus:ring-brand-500' }" />
    </UFormField>
    
    <UFormField name="service" label="Яка послуга вас цікавить?" :ui="{ label: 'text-white dark:text-white' }">
      <USelect v-model="state.service" :items="serviceOptions" placeholder="Оберіть послугу..." size="xl" class="w-full" :ui="{ base: 'transition-colors focus:ring-brand-500' }" />
    </UFormField>
    
    <UFormField name="message" label="Повідомлення" :ui="{ label: 'text-white dark:text-white' }">
      <UTextarea v-model="state.message" :rows="3" size="xl" placeholder="Розкажіть про ваш проект" class="w-full" :ui="{ base: 'transition-colors focus:ring-brand-500' }" />
    </UFormField>
    
    <UButton type="submit" size="xl" class="w-full  text-[#050b14] hover:bg-cyan-400 font-black px-10 py-5 text-base md:text-lg justify-center rounded-none uppercase tracking-wider group transition-all mt-4 md:mt-8">
      Надіслати заявку
    </UButton>
  </UForm>
</template>

<script setup>
import { reactive, computed, watch } from 'vue'

const route = useRoute()

const serviceMap = {
  '/landing': 'Лендінги',
  '/ecommerce': 'E-Commerce',
  '/web-apps': 'Веб-додатки',
  '/ai-integrations': 'AI-Інтеграції'
}

const serviceOptions = Object.values(serviceMap)

const defaultService = computed(() => {
  if (route.query.service) return route.query.service
  
  const path = route.path.toLowerCase()
  const matchedKey = Object.keys(serviceMap).find(key => path.includes(key))
  
  return matchedKey ? serviceMap[matchedKey] : undefined
})

const state = reactive({
  name: '',
  contact: '',
  service: defaultService.value,
  message: ''
})

watch(defaultService, (newVal) => {
  if (newVal) {
    state.service = newVal
  }
}, { immediate: true })

const onSubmit = () => {
  console.log('Form submitted:', state)
  alert('Дякуємо за заявку! Ми зв\'яжемося з вами найближчим часом.')
  state.name = ''
  state.contact = ''
  state.service = undefined
  state.message = ''
}
</script>
