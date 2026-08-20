<template>
  <UForm :schema="schema" :state="state" @submit="onSubmit" class="space-y-4">
    <UFormField name="name" label="Ім'я" required :ui="{ label: 'text-white dark:text-white' }">
      <UInput v-model="state.name" size="xl" placeholder="Ваше ім'я" class="w-full" :ui="{ base: 'transition-colors focus:ring-brand-500' }" />
    </UFormField>
    
    <UFormField name="contact" label="Телефон" required :ui="{ label: 'text-white dark:text-white' }">
      <UInput v-model="state.contact" v-maska="'+380 (##) ###-##-##'" size="xl" placeholder="+380 (__) ___-__-__" class="w-full" :ui="{ base: 'transition-colors focus:ring-brand-500' }" />
    </UFormField>
    
    <UFormField name="service" label="Яка послуга вас цікавить?" required :ui="{ label: 'text-white dark:text-white' }">
      <USelect v-model="state.service" :items="serviceOptions" placeholder="Оберіть послугу..." size="xl" class="w-full" :ui="{ base: 'transition-colors focus:ring-brand-500' }" />
    </UFormField>
    
    <UFormField name="message" label="Повідомлення" :ui="{ label: 'text-white dark:text-white' }">
      <UTextarea v-model="state.message" :rows="3" size="xl" placeholder="Розкажіть про ваш проект" class="w-full" :ui="{ base: 'transition-colors focus:ring-brand-500' }" />
    </UFormField>
    
    <UButton type="submit" :loading="isSubmitting" :disabled="isSubmitting" size="xl" class="w-full  text-[#050b14] hover:bg-cyan-400 font-black px-10 py-5 text-base md:text-lg justify-center rounded-none uppercase tracking-wider group transition-all mt-4 md:mt-8">
      Надіслати заявку
    </UButton>
  </UForm>
</template>

<script setup lang="ts">
import { reactive, computed, watch, ref } from 'vue'
import { object, string } from 'yup'
import type { FormSubmitEvent } from '@nuxt/ui'
import { vMaska } from 'maska/vue'

const route = useRoute()
const toast = useToast()

const isSubmitting = ref(false)

const schema = object({
  name: string().required("Будь ласка, вкажіть ваше ім'я"),
 contact: string()
    .matches(
      /^\+380 \(\d{2}\) \d{3}-\d{2}-\d{2}$/,
      "Введіть номер у форматі +380 (XX) XXX-XX-XX",
    )
    .required("Номер телефону обов'язковий"),
  service: string().required("Будь ласка, оберіть послугу"),
  message: string().optional()
})

const serviceMap = {
  '/landing': 'Лендінги',
  '/ecommerce': 'E-Commerce',
  '/web-apps': 'Веб-додатки',
  '/ai-integrations': 'AI-Інтеграції'
}

const serviceOptions = Object.values(serviceMap)

const defaultService = computed(() => {
  if (route.query.service) {
    const serviceQuery = Array.isArray(route.query.service) ? route.query.service[0] : route.query.service
    if (serviceQuery) return String(serviceQuery)
  }
  
  const path = route.path.toLowerCase()
  const matchedKey = Object.keys(serviceMap).find(key => path.includes(key))
  
  return matchedKey ? serviceMap[matchedKey as keyof typeof serviceMap] : undefined
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

async function onSubmit(event: FormSubmitEvent<any>) {
  isSubmitting.value = true
  
  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: event.data
    })

    toast.add({
      title: 'Заявка успішно відправлена!',
      description: 'Ми зв\'яжемося з вами найближчим часом.',
      color: 'primary',
      icon: 'i-heroicons-check-circle'
    })

    // Очищення форми
    state.name = ''
    state.contact = ''
    state.service = defaultService.value
    state.message = ''
  } catch (error) {
    console.error('Error submitting form:', error)
    toast.add({
      title: 'Помилка відправки',
      description: 'Сталася помилка при відправці заявки. Будь ласка, спробуйте ще раз.',
      color: 'error',
      icon: 'i-heroicons-exclamation-circle'
    })
  } finally {
    isSubmitting.value = false
  }
}
</script>
