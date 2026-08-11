<template>
  <UForm :state="state" @submit="onSubmit" class="space-y-8">
    <UFormField name="name">
      <UInput v-model="state.name" size="xl" placeholder="Ваше ім'я" class="w-full !bg-transparent !border-b !border-white/20 !border-t-0 !border-x-0 !rounded-none focus:!border-cyan-400 !px-0 !shadow-none text-white text-lg transition-colors placeholder:text-gray-600 focus:!ring-0" />
    </UFormField>
    
    <UFormField name="contact">
      <UInput v-model="state.contact" size="xl" placeholder="Email або Telegram" class="w-full !bg-transparent !border-b !border-white/20 !border-t-0 !border-x-0 !rounded-none focus:!border-cyan-400 !px-0 !shadow-none text-white text-lg transition-colors placeholder:text-gray-600 focus:!ring-0" />
    </UFormField>
    
    <UFormField name="message">
      <UTextarea v-model="state.message" :rows="3" size="xl" placeholder="Розкажіть про ваш проект" class="w-full !bg-transparent !border-b !border-white/20 !border-t-0 !border-x-0 !rounded-none focus:!border-cyan-400 !px-0 !shadow-none text-white text-lg transition-colors placeholder:text-gray-600 focus:!ring-0" />
    </UFormField>
    
    <UButton type="submit" size="xl" color="gray" class="w-full bg-cyan-500 text-[#050b14] hover:bg-cyan-400 font-black px-10 py-5 text-lg justify-center rounded-none uppercase tracking-wider group transition-all mt-8">
      Надіслати заявку
    </UButton>
  </UForm>
</template>

<script setup>
import { reactive } from 'vue'

const state = reactive({
  name: '',
  contact: '',
  message: ''
})

const onSubmit = () => {
  console.log('Form submitted:', state)
  alert('Дякуємо за заявку! Ми зв\'яжемося з вами найближчим часом.')
  state.name = ''
  state.contact = ''
  state.message = ''
}
</script>
