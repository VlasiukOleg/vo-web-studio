<template>
  <section class="py-32 relative">
    <UContainer>
      <div class="bg-[#0a1120] border border-white/10 p-10 md:p-20 relative overflow-hidden">
        <!-- Glitch / Glow effects -->
        <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[100px] pointer-events-none"></div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
          <div>
            <h2 class="text-5xl md:text-6xl font-black uppercase tracking-tight mb-8">Давайте<br/><span class="text-cyan-400">створимо</span><br/>щось величне</h2>
            <p class="text-gray-400 text-xl font-light mb-12">
              Заповніть форму, і ми зв'яжемося з вами найближчим часом для обговорення вашого бачення.
            </p>
            
            <div class="space-y-6">
              <div>
                <div class="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">Напишіть нам</div>
                <div class="text-xl font-bold">hello@vowebstudio.com</div>
              </div>
              <div>
                <div class="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">Зателефонуйте</div>
                <div class="text-xl font-bold">+380 99 123 45 67</div>
              </div>
            </div>
          </div>
          
          <div>
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
                Надіслати запит
              </UButton>
            </UForm>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
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
  alert('Дякуємо за запит! Ми зв\'яжемося з вами найближчим часом.')
  state.name = ''
  state.contact = ''
  state.message = ''
}
</script>
