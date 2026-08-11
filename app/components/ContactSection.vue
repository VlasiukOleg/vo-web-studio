<template>
  <section class="py-32 relative">
    <UContainer>
      <div class="bg-[#0a1120] border border-white/10 p-10 md:p-20 relative overflow-hidden">
        <!-- Glitch / Glow effects -->
        <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[100px] pointer-events-none"></div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
          <div>
            <h2 class="font-noto text-5xl md:text-6xl font-black uppercase tracking-tight mb-8">Давайте<br/><span class="text-cyan-400">створимо</span><br/>щось величне</h2>
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
            <ContactForm />
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>


