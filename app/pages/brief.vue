<script setup lang="ts">
import { ref, reactive, computed, watch } from 'vue'

const currentStep = ref(1)
const carouselRef = ref()

const steps = [
  { id: 1, title: 'Project Context', description: 'Про що ваш проєкт?' },
  { id: 2, title: 'Hero Layout', description: 'Оберіть загальний настрій сайту' },
  { id: 3, title: 'UI Details', description: 'Кольори та форми' },
  { id: 4, title: 'Structure', description: 'Які блоки потрібні на сторінці?' },
  { id: 5, title: 'Prompt', description: 'Ваш результат' }
]

const form = reactive({
  brandName: '',
  mainGoal: '',
  targetAudience: '',
  toneOfVoice: '',
  siteLanguage: 'UA (Українська)',
  competitors: '',
  projectContext: '',
  heroVariant: 1,
  colorPalette: 'Deep Dark + Cyan / Purple',
  customBgColor: '#0f172a',
  customAccentColor: '#6366f1',
  buttonShape: 'Злегка згладжені (8px)',
  cardStyle: 'Glassmorphic (Напівпрозоре скло)',
  iconType: 'Мінімалістичні лінійні',
  sections: [] as string[],
  likedSites: '',
  likedFeatures: '',
  dislikedSites: ''
})

const derivedStyleVibe = computed(() => {
  const variant = form.heroVariant
  if (variant >= 1 && variant <= 4) return 'Dark Tech & Neon'
  if (variant >= 5 && variant <= 8) return 'Minimal Light'
  if (variant >= 9 && variant <= 12) return 'Corporate Solid'
  if (variant >= 13 && variant <= 16) return 'Bold & Vibrant'
  return 'Luxury & Glass'
})

watch(() => form.heroVariant, (newVariant) => {
  if (newVariant >= 1 && newVariant <= 4) {
    form.colorPalette = 'Deep Dark + Cyan / Purple'
    form.buttonShape = 'Злегка згладжені (8px)'
    form.cardStyle = 'Glassmorphic (Напівпрозоре скло)'
  } else if (newVariant >= 5 && newVariant <= 8) {
    form.colorPalette = 'Clean White + Electric Blue'
    form.buttonShape = 'Повністю круглі (99px)'
    form.cardStyle = 'Solid Card (Щільний фон з тінню)'
  } else if (newVariant >= 9 && newVariant <= 12) {
    form.colorPalette = 'Monochrome (Black & White)'
    form.buttonShape = 'Гострі кути (0px)'
    form.cardStyle = 'Flat & Border (Тільки тонка рамка)'
  } else if (newVariant >= 13 && newVariant <= 16) {
    form.colorPalette = 'Warm Beige + Emerald / Sage'
    form.buttonShape = 'Повністю круглі (99px)'
    form.cardStyle = 'Solid Card (Щільний фон з тінню)'
  } else {
    form.colorPalette = 'Monochrome (Black & White)'
    form.buttonShape = 'Злегка згладжені (8px)'
    form.cardStyle = 'Glassmorphic (Напівпрозоре скло)'
  }
})

const goalOptions = [
  'Збір лідів (Контакти/Заявки)',
  'Продаж товарів або послуг',
  'Портфоліо / Візитка',
  'Презентація продукту / SaaS',
  'Найм співробітників (HR)'
]

const toneOptions = [
  'Дружній та відкритий (Friendly)',
  'Офіційний та професійний (Corporate)',
  'Преміальний та розкішний (Luxury)',
  'Зухвалий та креативний (Bold)',
  'Мінімалістичний та спокійний (Calm)'
]

const languageOptions = ['UA (Українська)', 'EN (English)', 'PL (Polski)', 'Інша']

const colorOptions = [
  'Deep Dark + Cyan / Purple',
  'Clean White + Electric Blue',
  'Monochrome (Black & White)',
  'Warm Beige + Emerald / Sage',
  'Custom Palette (Свій варіант)'
]

const buttonOptions = [
  'Гострі кути (0px)',
  'Злегка згладжені (8px)',
  'Повністю круглі (99px)'
]

const cardOptions = [
  'Glassmorphic (Напівпрозоре скло)',
  'Solid Card (Щільний фон з тінню)',
  'Flat & Border (Тільки тонка рамка)'
]

const iconOptions = [
  'Мінімалістичні лінійні',
  'Заповнені кольорові 2D',
  '3D-ілюстрації'
]

const sectionOptions = [
  { label: 'Блок брендів / Логотипи', value: 'Brands/Logos', description: 'Логотипи компаній-партнерів або клієнтів (Social Proof).' },
  { label: 'Переваги / УТП (Key Features)', value: 'Key Features', description: 'Головні особливості вашого продукту з іконками або коротким текстом.' },
  { label: 'Детальний опис (Таби/Акордеон)', value: 'Detailed Info Tabs', description: 'Більш детальний опис можливостей, розбитий по вкладках.' },
  { label: 'Процес роботи (Step-by-Step)', value: 'Process Timeline', description: 'Як працює ваш продукт або послуга крок за кроком.' },
  { label: 'Як це працює (How it works video)', value: 'How It Works Video', description: 'Блок з відеопрезентацією або скріншотами інтерфейсу.' },
  { label: 'Цифри та статистика', value: 'Stats & Counters', description: 'Кількісні досягнення: кількість клієнтів, роки на ринку тощо.' },
  { label: 'Галерея / Портфоліо', value: 'Portfolio Gallery', description: 'Фотографії робіт, продукту або життя компанії.' },
  { label: 'Відгуки (Testimonials)', value: 'Testimonials', description: 'Цитати від клієнтів або партнерів з їхніми фото.' },
  { label: 'Команда / Засновник', value: 'Team Section', description: 'Знайомство з ключовими людьми компанії.' },
  { label: 'Інтеграції (Integrations)', value: 'Integrations', description: 'З якими сервісами та програмами сумісний ваш продукт.' },
  { label: 'Тарифи / Ціни', value: 'Pricing Cards', description: 'Пакети послуг, порівняння цін та функціоналу.' },
  { label: 'Заклик до дії (CTA Banner)', value: 'CTA Banner', description: 'Великий банер перед підвалом з пропозицією діяти.' },
  { label: 'Часті запитання (FAQ)', value: 'FAQ Accordion', description: 'Відповіді на найпоширеніші запитання користувачів.' },
  { label: 'Форма захоплення (Lead Form)', value: 'CTA Lead Form', description: 'Поля для збору контактів (ім\'я, телефон, email).' },
  { label: 'Блог / Останні новини', value: 'Blog / Latest News', description: 'Анонси останніх статей або подій.' },
  { label: 'Футер (Контакти, Карта)', value: 'Footer', description: 'Підвал сайту з посиланнями, контактами та соцмережами.' }
]

// Computed properties for Live Preview
const previewButtonRadiusClass = computed(() => {
  if (form.buttonShape.includes('0px')) return 'rounded-none'
  if (form.buttonShape.includes('99px')) return 'rounded-full'
  return 'rounded-lg'
})

const previewBgColor = computed(() => {
  if (form.colorPalette === 'Custom Palette (Свій варіант)') return form.customBgColor
  if (form.colorPalette.includes('Deep Dark')) return '#0f172a'
  if (form.colorPalette.includes('Clean White')) return '#ffffff'
  if (form.colorPalette.includes('Monochrome')) return '#18181b'
  if (form.colorPalette.includes('Warm Beige')) return '#fdf8f5'
  return '#ffffff'
})

const previewAccentColor = computed(() => {
  if (form.colorPalette === 'Custom Palette (Свій варіант)') return form.customAccentColor
  if (form.colorPalette.includes('Deep Dark')) return '#6366f1' // Cyan/Purple
  if (form.colorPalette.includes('Clean White')) return '#2563eb' // Electric Blue
  if (form.colorPalette.includes('Monochrome')) return '#ffffff'
  if (form.colorPalette.includes('Warm Beige')) return '#10b981' // Emerald
  return '#6366f1'
})

const previewTextColor = computed(() => {
  if (form.colorPalette === 'Custom Palette (Свій варіант)') {
    const hex = form.customBgColor.replace('#', '')
    const r = parseInt(hex.substring(0, 2), 16) || 0
    const g = parseInt(hex.substring(2, 2), 16) || 0
    const b = parseInt(hex.substring(4, 2), 16) || 0
    const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000
    return yiq >= 128 ? '#1e293b' : '#f8fafc'
  }
  if (form.colorPalette.includes('Deep Dark') || form.colorPalette.includes('Monochrome')) return '#f8fafc'
  return '#1e293b'
})

const previewContainerStyle = computed(() => ({
  backgroundColor: previewBgColor.value
}))

const previewContainerClass = computed(() => {
  if (derivedStyleVibe.value.includes('Dark Tech')) return 'border-slate-800'
  if (derivedStyleVibe.value.includes('Minimal Light')) return 'border-slate-200'
  return 'border-slate-200 dark:border-slate-700'
})

const previewButtonStyle = computed(() => ({
  backgroundColor: previewAccentColor.value,
  color: form.colorPalette.includes('Monochrome') ? '#000000' : '#ffffff',
  borderColor: previewAccentColor.value
}))

const previewButtonSecondaryStyle = computed(() => ({
  backgroundColor: 'transparent',
  color: previewTextColor.value,
  borderColor: previewTextColor.value
}))

const previewCardClass = computed(() => {
  if (form.cardStyle.includes('Glassmorphic')) {
    return 'bg-white/10 backdrop-blur-md border border-white/20 shadow-xl'
  }
  if (form.cardStyle.includes('Solid')) {
    return previewTextColor.value === '#f8fafc' 
      ? 'bg-slate-800/80 border border-slate-700 shadow-lg' 
      : 'bg-white border border-slate-200 shadow-lg'
  }
  // Flat
  return previewTextColor.value === '#f8fafc'
    ? 'bg-transparent border-2 border-slate-700'
    : 'bg-transparent border-2 border-slate-200'
})

const previewIconBgStyle = computed(() => ({
  backgroundColor: `${previewAccentColor.value}20` // 20% opacity
}))

const generatedPrompt = computed(() => {
  const colorOutput = form.colorPalette === 'Custom Palette (Свій варіант)' 
    ? `Custom Palette (Bg: ${form.customBgColor}, Accent: ${form.customAccentColor})` 
    : form.colorPalette;
    
  let referencesText = ''
  if (form.likedSites || form.likedFeatures || form.dislikedSites) {
    referencesText = `\nReferences:\n`
    if (form.likedSites) referencesText += `- Liked Sites: ${form.likedSites}\n`
    if (form.likedFeatures) referencesText += `- What we like: ${form.likedFeatures}\n`
    if (form.dislikedSites) referencesText += `- Anti-references: ${form.dislikedSites}\n`
  }
    
  return `Create a high-converting Landing Page UI design in Figma.
Project Info:
- Brand Name: ${form.brandName || 'Not specified'}
- Main Goal: ${form.mainGoal || 'Not specified'}
- Target Audience: ${form.targetAudience || 'Not specified'}
- Tone of Voice: ${form.toneOfVoice || 'Not specified'}
- Language: ${form.siteLanguage || 'Not specified'}
- Competitors: ${form.competitors || 'Not specified'}

Project Context / Description:
${form.projectContext || 'Not specified.'}
${referencesText}
Style: ${derivedStyleVibe.value}.
Color Palette: ${colorOutput}.
UI Details: Button shape - ${form.buttonShape}, Card style - ${form.cardStyle}, Icon type - ${form.iconType}.
Structure:
1. Hero section matching Variant ${form.heroVariant} (from library).
${form.sections.map((s, i) => `${i + 2}. ${s}`).join('\n')}
Make sure the design is modern, pixel-perfect, and uses auto-layout.`
})

const nextStep = () => {
  if (currentStep.value < 5) currentStep.value++
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const prevStep = () => {
  if (currentStep.value > 1) currentStep.value--
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const selectHero = (variant: number) => {
  form.heroVariant = variant
  if (carouselRef.value) {
    carouselRef.value.select(variant - 1)
  }
}

const copyPrompt = () => {
  navigator.clipboard.writeText(generatedPrompt.value)
  alert('Промпт скопійовано в буфер обміну!')
}
</script>

<template>
  <div class="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white py-12">
    <UContainer class="max-w-7xl">
      <!-- Header -->
      <div class="mb-12 text-center">
        <h1 class="text-4xl md:text-5xl font-black mb-4">Project Brief</h1>
        <p class="text-lg text-slate-500">Створіть ідеальну структуру вашого майбутнього сайту</p>
      </div>

      <!-- Stepper -->
      <div class="flex flex-wrap md:flex-nowrap justify-between mb-12 gap-4">
        <div 
          v-for="step in steps" 
          :key="step.id"
          class="flex-1 flex flex-col items-center md:items-start text-center md:text-left relative"
          :class="{ 'opacity-50': currentStep < step.id }"
        >
          <div 
            class="w-10 h-10 rounded-full flex items-center justify-center font-bold mb-2 transition-colors z-10 relative"
            :class="currentStep >= step.id ? 'bg-indigo-600 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-500'"
          >
            <UIcon v-if="currentStep > step.id" name="i-heroicons-check" class="w-5 h-5" />
            <span v-else>{{ step.id }}</span>
          </div>
          <div class="font-bold">{{ step.title }}</div>
          <div class="text-xs text-slate-500 hidden md:block">{{ step.description }}</div>
          
          <!-- Connecting Line -->
          <div v-if="step.id !== 5" class="hidden md:block absolute top-5 left-12 right-0 h-[2px] -z-0"
               :class="currentStep > step.id ? 'bg-indigo-600' : 'bg-slate-200 dark:bg-slate-800'"
               style="width: calc(100% - 1.5rem);">
          </div>
        </div>
      </div>

      <!-- Content Area -->
      <div class="bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700 p-6 md:p-10 mb-8">
        
        <!-- Step 1: Project Context -->
        <div v-show="currentStep === 1" class="animate-fade-in">
          <h2 class="text-2xl font-bold mb-2">Крок 1. Базова інформація</h2>
          <p class="text-slate-500 mb-8">Розкажіть нам про ваш бізнес, щоб ми (та ШІ) могли створити максимально влучний дизайн, підібрати правильний настрій та тексти.</p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <UFormField label="Назва бренду / компанії" class="w-full font-bold">
              <UInput v-model="form.brandName" placeholder="Наприклад: Aura, Vo Web Studio" size="lg" class="w-full font-normal" />
            </UFormField>

            <UFormField label="Головна ціль сайту" class="w-full font-bold">
              <USelect v-model="form.mainGoal" :items="goalOptions" size="lg" class="w-full font-normal" placeholder="Оберіть ціль..." />
            </UFormField>
          </div>

          <UFormField label="Короткий опис проєкту" description="Чим ви займаєтесь? Яку проблему вирішує ваш продукт?" class="w-full font-bold mb-6">
            <UTextarea v-model="form.projectContext" :rows="4" class="w-full mt-2 font-normal" placeholder="Опишіть ваш проєкт своїми словами..." />
          </UFormField>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <UFormField label="Цільова аудиторія" description="Хто ваші клієнти?" class="w-full font-bold">
              <UInput v-model="form.targetAudience" placeholder="Вік, професія, болі клієнта..." size="lg" class="w-full mt-2 font-normal" />
            </UFormField>

            <UFormField label="Головні конкуренти (Необов'язково)" description="На кого ви орієнтуєтесь або хочете перевершити" class="w-full font-bold">
              <UInput v-model="form.competitors" placeholder="Посилання або назви..." size="lg" class="w-full mt-2 font-normal" />
            </UFormField>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <UFormField label="Tone of Voice (Настрій текстів)" class="w-full font-bold">
              <USelect v-model="form.toneOfVoice" :items="toneOptions" size="lg" class="w-full font-normal" placeholder="Оберіть настрій..." />
            </UFormField>

            <UFormField label="Мова сайту" class="w-full font-bold">
              <USelect v-model="form.siteLanguage" :items="languageOptions" size="lg" class="w-full font-normal" />
            </UFormField>
          </div>
        </div>

        <!-- Step 2: Hero Carousel -->
        <div v-show="currentStep === 2" class="animate-fade-in">
          <h2 class="text-2xl font-bold mb-2">Крок 2. Вибір Hero-секції</h2>
          <p class="text-slate-500 mb-8">Перший екран задає настрій всьому сайту. Оберіть варіант, який вам найбільше подобається.</p>
          
          <UCarousel
            ref="carouselRef"
            :items="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]"
            :ui="{ 
              item: 'basis-full md:basis-full snap-center',
              dots: 'relative flex items-center justify-center gap-4 mt-8',
              dot: 'transition-colors cursor-pointer w-3 h-3 rounded-full bg-slate-300 hover:bg-slate-400 data-[state=active]:bg-indigo-600 data-[state=active]:scale-125'
            }"
            class="mb-12"
            arrows
            dots
          >
            <template #default="{ item }">
              <div class="w-full h-[510px] sm:h-[722px] relative group cursor-pointer" @click="selectHero(item)">
                <!-- Ring indicator if selected -->
                <div class="absolute inset-0 z-50 pointer-events-none rounded-xl transition-all duration-300"
                     :class="form.heroVariant === item ? 'ring-4 ring-indigo-600 ring-inset bg-indigo-600/5' : 'group-hover:bg-black/5'">
                </div>
                <div v-if="form.heroVariant === item" class="absolute top-4 right-4 z-50 w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white shadow-lg">
                  <UIcon name="i-heroicons-check-badge" class="w-5 h-5" />
                </div>
                <!-- Transform scale to fit the whole preview in view without massive scrolling -->
                <div class="absolute top-0 left-0 w-[117.647%] h-[117.647%] pointer-events-none origin-top-left" style="transform: scale(0.85);">
                   <QuizVariants :variant="item" />
                </div>
              </div>
            </template>
          </UCarousel>
        </div>

        <!-- Step 3: UI Details -->
        <div v-show="currentStep === 3" class="animate-fade-in">
          <h2 class="text-2xl font-bold mb-2">Крок 3. Візуальний стиль (UI Details)</h2>
          <p class="text-slate-500 mb-8">Налаштування кольорів та форм елементів інтерфейсу.</p>
          
          <div class="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <!-- Left: Options (col-span-3) -->
            <div class="lg:col-span-3 space-y-8">
              <UFormField label="1. Кольорова гама" class="font-bold">
                <URadioGroup v-model="form.colorPalette" :items="colorOptions" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-2" :ui="{ label: 'font-normal' }" />
                
                <div v-if="form.colorPalette === 'Custom Palette (Свій варіант)'" class="mt-4 p-4 border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800/50 flex flex-wrap gap-6">
                  <div class="flex flex-col gap-2">
                    <label class="text-sm font-medium">Фон (Background)</label>
                    <div class="flex items-center gap-2">
                      <input type="color" v-model="form.customBgColor" class="w-10 h-10 rounded cursor-pointer border-0 p-0 bg-transparent" />
                      <span class="font-mono text-sm uppercase">{{ form.customBgColor }}</span>
                    </div>
                  </div>
                  <div class="flex flex-col gap-2">
                    <label class="text-sm font-medium">Акцент (Accent)</label>
                    <div class="flex items-center gap-2">
                      <input type="color" v-model="form.customAccentColor" class="w-10 h-10 rounded cursor-pointer border-0 p-0 bg-transparent" />
                      <span class="font-mono text-sm uppercase">{{ form.customAccentColor }}</span>
                    </div>
                  </div>
                </div>
              </UFormField>
              <USeparator />
              <UFormField label="2. Форма кнопок" class="font-bold">
                <URadioGroup v-model="form.buttonShape" :items="buttonOptions" class="flex flex-wrap gap-6 mt-2" :ui="{ label: 'font-normal' }" />
              </UFormField>
              <USeparator />
              <UFormField label="3. Стиль карток / блоків" class="font-bold">
                <URadioGroup v-model="form.cardStyle" :items="cardOptions" class="flex flex-wrap gap-6 mt-2" :ui="{ label: 'font-normal' }" />
              </UFormField>
            </div>

            <!-- Right: Live Preview (col-span-2) -->
            <div class="lg:col-span-2 relative">
              <div class="sticky top-24">
                <h3 class="font-bold mb-4 text-lg">Live Preview</h3>
                <div 
                  class="border rounded-2xl p-6 min-h-[400px] transition-colors duration-500 flex flex-col gap-6"
                  :class="previewContainerClass"
                  :style="previewContainerStyle"
                >
                  <div>
                    <h4 class="text-2xl font-black mb-2 transition-colors duration-500" :style="{ color: previewTextColor }">Build Your SaaS</h4>
                    <p class="text-sm mb-4 opacity-80 transition-colors duration-500" :style="{ color: previewTextColor }">Select options on the left to see how your UI components will look.</p>
                  </div>
                  
                  <div class="flex flex-wrap gap-4 mb-4">
                    <button 
                      class="px-6 py-3 font-semibold transition-all duration-300 shadow-md border"
                      :class="previewButtonRadiusClass"
                      :style="previewButtonStyle"
                    >
                      Get Started
                    </button>
                    <button 
                      class="px-6 py-3 font-medium transition-all duration-300 border"
                      :class="previewButtonRadiusClass"
                      :style="previewButtonSecondaryStyle"
                    >
                      Learn More
                    </button>
                  </div>

                  <div 
                    class="p-6 transition-all duration-500 rounded-2xl"
                    :class="[previewCardClass]"
                  >
                    <div class="w-10 h-10 rounded-lg flex items-center justify-center mb-4 transition-colors duration-500" :style="previewIconBgStyle">
                      <UIcon name="i-heroicons-cube" class="w-6 h-6 transition-colors duration-500" :style="{ color: previewAccentColor }" />
                    </div>
                    <h5 class="font-bold text-lg mb-2 transition-colors duration-500" :style="{ color: previewTextColor }">Feature Title</h5>
                    <p class="text-sm opacity-80 transition-colors duration-500" :style="{ color: previewTextColor }">
                      This is how a standard feature card looks in your selected style. Try changing colors or shapes!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Step 4: Sections Constructor -->
        <div v-show="currentStep === 4" class="animate-fade-in">
          <h2 class="text-2xl font-bold mb-2">Крок 4. Конструктор структури</h2>
          <p class="text-slate-500 mb-8">Оберіть блоки, які обов'язково мають бути на вашій сторінці (крім Hero-секції).</p>
          
          <UCheckboxGroup
            v-model="form.sections"
            :items="sectionOptions"
            :ui="{ 
              fieldset: 'grid grid-cols-1 md:grid-cols-2 gap-4',
              container: 'grid grid-cols-1 md:grid-cols-2 gap-4',
              wrapper: 'grid grid-cols-1 md:grid-cols-2 gap-4',
              item: 'border rounded-xl p-4 flex items-start gap-3 transition-colors hover:bg-slate-50 dark:hover:bg-slate-700/50 has-[:checked]:border-indigo-500 has-[:checked]:bg-indigo-50 dark:has-[:checked]:bg-indigo-900/20 border-slate-200 dark:border-slate-700 w-full',
              label: 'cursor-pointer w-full font-bold',
              description: 'text-xs text-slate-500 mt-1 leading-relaxed'
            }"
          />

          <div class="mt-12 border-t border-slate-200 dark:border-slate-800 pt-8">
            <h3 class="text-sm font-bold uppercase tracking-wider text-slate-500 mb-6">Референси (Необов'язково)</h3>
            <div class="space-y-6 max-w-2xl">
              <UFormField label="Сайти, які подобаються (1-3 посилання)">
                <UInput v-model="form.likedSites" placeholder="https://..." size="lg" class="w-full" />
              </UFormField>
              <UFormField label="Що саме в них подобається?">
                <UInput v-model="form.likedFeatures" placeholder="Анімація, кольори, верстка, шрифти..." size="lg" class="w-full" />
              </UFormField>
              <UFormField label="Сайти, які НЕ подобаються (анти-референси)">
                <UInput v-model="form.dislikedSites" placeholder="https://..." size="lg" class="w-full" />
              </UFormField>
            </div>
          </div>
        </div>

        <!-- Step 5: Result -->
        <div v-show="currentStep === 5" class="animate-fade-in text-center">
          <div class="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <UIcon name="i-heroicons-check-circle" class="w-12 h-12" />
          </div>
          <h2 class="text-3xl font-bold mb-4">Бриф сформовано!</h2>
          <p class="text-slate-500 mb-8 max-w-lg mx-auto">Ваші побажання перетворені на структурований Prompt, готовий для генерації дизайну в Figma (Relume/Make).</p>
          
          <div class="bg-slate-900 text-slate-300 text-left p-6 rounded-2xl font-mono text-sm sm:text-base leading-relaxed relative shadow-inner overflow-x-auto">
            <pre class="whitespace-pre-wrap">{{ generatedPrompt }}</pre>
            <UButton 
              icon="i-heroicons-clipboard-document" 
              variant="solid" 
              class="absolute top-4 right-4" 
              @click="copyPrompt"
            >
              Copy
            </UButton>
          </div>
        </div>

      </div>

      <!-- Navigation Buttons -->
      <div class="flex justify-between items-center px-4 md:px-0">
        <UButton 
          v-if="currentStep > 1" 
          icon="i-heroicons-arrow-left" 
          variant="soft" 
          size="lg"
          @click="prevStep"
        >
          Назад
        </UButton>
        <div v-else></div> <!-- Spacer -->

        <UButton 
          v-if="currentStep < 4" 
          icon="i-heroicons-arrow-right" 
          trailing 
          variant="solid" 
          size="lg"
          @click="nextStep"
        >
          Далі
        </UButton>
        <UButton 
          v-else-if="currentStep === 4" 
          icon="i-heroicons-paper-airplane" 
          trailing
          variant="solid" 
          size="lg"
          @click="nextStep"
        >
          Згенерувати промпт
        </UButton>
      </div>

    </UContainer>
  </div>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.4s ease-out;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
