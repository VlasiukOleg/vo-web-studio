<script setup lang="ts">
defineProps<{ variant: number }>();
</script>

<template>
  <div class="w-full h-full overflow-y-auto overflow-x-hidden font-sans border rounded-xl shadow-lg relative bg-white dark:bg-gray-900 group">
    <div class="absolute top-0 left-0 bg-black text-white text-xs font-mono px-3 py-1 z-50 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity">
      <span v-if="variant === 1">1. Classic SaaS</span>
      <span v-else-if="variant === 2">2. Centered Modern</span>
      <span v-else-if="variant === 3">3. Neo-Brutalist</span>
      <span v-else-if="variant === 4">4. Dark Tech</span>
      <span v-else-if="variant === 5">5. Glassmorphism</span>
      <span v-else-if="variant === 6">6. Minimalist</span>
      <span v-else-if="variant === 7">7. Luxury Editorial</span>
      <span v-else-if="variant === 8">8. Soft D2C</span>
      <span v-else-if="variant === 9">9. Web3 / Glow</span>
      <span v-else-if="variant === 10">10. Bento Grid</span>
      <span v-else-if="variant === 11">11. Y2K / 2000s</span>
      <span v-else-if="variant === 12">12. Retro 70s</span>
      <span v-else-if="variant === 13">13. Swiss International</span>
      <span v-else-if="variant === 14">14. Terminal / CLI</span>
      <span v-else-if="variant === 15">15. Memphis 80s</span>
      <span v-else-if="variant === 16">16. Vaporwave / Synthwave</span>
      <span v-else-if="variant === 17">17. Skeuomorphic</span>
      <span v-else-if="variant === 18">18. Newspaper Editorial</span>
      <span v-else-if="variant === 19">19. Flat Design / Metro</span>
      <span v-else-if="variant === 20">20. Indie / Handcrafted</span>
    </div>

    <!-- 1. Classic SaaS -->
    <section v-if="variant === 1" class="relative min-h-[850px] bg-white border-b-8 border-gray-100 flex flex-col">
      <header class="flex items-center justify-between px-6 md:px-12 py-6 border-b border-gray-100">
        <div class="font-bold text-xl tracking-tight text-blue-600">AcmeCorp</div>
        <nav class="hidden md:flex gap-8 text-sm font-medium text-gray-600">
          <a href="#" class="hover:text-blue-600">Products</a>
          <a href="#" class="hover:text-blue-600">Solutions</a>
          <a href="#" class="hover:text-blue-600">Pricing</a>
        </nav>
        <div class="hidden md:flex gap-4">
          <button class="text-sm font-medium text-gray-600 hover:text-gray-900">Log in</button>
          <button class="text-sm font-medium bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">Start Free</button>
        </div>
        <button class="md:hidden text-gray-600"><UIcon name="i-heroicons-bars-3" class="w-6 h-6" /></button>
      </header>
      <div class="flex-1 max-w-7xl mx-auto w-full px-6 md:px-12 py-12 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="flex flex-col items-start gap-6">
          <h1 class="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            Build better software, <span class="text-blue-600">faster.</span>
          </h1>
          <p class="text-lg text-gray-600 max-w-lg">
            The all-in-one platform for modern development teams. Ship features, track bugs, and manage sprints with ease.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button class="bg-blue-600 text-white px-8 py-3.5 rounded-lg font-medium hover:bg-blue-700 w-full sm:w-auto">
              Get Started for Free
            </button>
            <button class="bg-white border border-gray-200 text-gray-700 px-8 py-3.5 rounded-lg font-medium hover:bg-gray-50 flex items-center justify-center gap-2 w-full sm:w-auto">
              <UIcon name="i-heroicons-play" class="w-5 h-5" /> Book a Demo
            </button>
          </div>
        </div>
        <div class="w-full aspect-square md:aspect-[4/3] bg-gray-100 rounded-2xl border border-gray-200 shadow-xl overflow-hidden relative">
          <div class="absolute inset-0 bg-gradient-to-tr from-blue-100 to-white/50"></div>
          <div class="absolute inset-4 bg-white rounded-lg shadow-sm border border-gray-100 p-4">
            <div class="w-full h-8 bg-gray-100 rounded mb-4"></div>
            <div class="w-3/4 h-32 bg-gray-50 rounded mb-4"></div>
            <div class="grid grid-cols-2 gap-4">
              <div class="h-24 bg-blue-50 rounded"></div>
              <div class="h-24 bg-green-50 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 2. Centered Modern -->
    <section v-else-if="variant === 2" class="relative min-h-[850px] bg-slate-50 border-b-8 border-gray-200 flex flex-col items-center overflow-hidden">
      <div class="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-200/50 blur-[100px] rounded-full pointer-events-none"></div>
      
      <header class="w-full max-w-5xl mx-auto flex items-center justify-between px-6 py-6 relative z-10">
        <div class="font-bold text-xl text-black">Nexus</div>
        <nav class="hidden md:flex items-center gap-1 p-1 bg-white/60 backdrop-blur-md rounded-full border border-gray-200/50 shadow-sm">
          <a href="#" class="px-5 py-2 text-sm font-medium text-gray-700 hover:text-black hover:bg-gray-100 rounded-full transition-colors">Features</a>
          <a href="#" class="px-5 py-2 text-sm font-medium text-gray-700 hover:text-black hover:bg-gray-100 rounded-full transition-colors">Testimonials</a>
          <a href="#" class="px-5 py-2 text-sm font-medium text-gray-700 hover:text-black hover:bg-gray-100 rounded-full transition-colors">Pricing</a>
        </nav>
        <button class="hidden md:block bg-black text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-gray-800 transition-colors">
          Download App
        </button>
        <button class="md:hidden text-black"><UIcon name="i-heroicons-bars-3" class="w-6 h-6" /></button>
      </header>

      <div class="flex-1 flex flex-col items-center justify-center text-center px-6 py-20 relative z-10 w-full max-w-4xl mx-auto">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm mb-8 text-sm font-medium text-purple-700">
          <UIcon name="i-heroicons-sparkles" class="w-4 h-4" /> Nexus 2.0 is now live
        </div>
        <h1 class="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6">
          The smart way to <br class="hidden md:block" /> manage your work.
        </h1>
        <p class="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl">
          Simplify your workflow with AI-powered tools that help your team stay focused, organized, and on track.
        </p>
        <div class="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button class="w-full sm:w-auto bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 flex items-center justify-center gap-2">
            Get Started <UIcon name="i-heroicons-arrow-right" class="w-5 h-5" />
          </button>
          <div class="text-sm text-slate-500 font-medium">No credit card required.</div>
        </div>
      </div>
    </section>

    <!-- 3. Neo-Brutalist -->
    <section v-else-if="variant === 3" class="relative min-h-[850px] bg-[#FFE500] flex flex-col font-mono border-b-8 border-black">
      <header class="flex items-center justify-between px-6 py-6 border-b-4 border-black bg-white">
        <div class="font-black text-2xl uppercase tracking-tighter text-black">Brtls.</div>
        <nav class="hidden md:flex gap-8 font-bold uppercase text-sm text-black">
          <a href="#" class="hover:underline decoration-4 underline-offset-4">Work</a>
          <a href="#" class="hover:underline decoration-4 underline-offset-4">About</a>
          <a href="#" class="hover:underline decoration-4 underline-offset-4">Contact</a>
        </nav>
        <button class="hidden md:block bg-[#FF6B6B] text-black border-2 border-black font-bold uppercase px-6 py-2 shadow-[4px_4px_0_0_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
          Say Hello
        </button>
        <button class="md:hidden border-2 border-black p-1 shadow-[4px_4px_0_0_#000] bg-white text-black"><UIcon name="i-heroicons-bars-3" class="w-6 h-6" /></button>
      </header>
      
      <div class="flex-1 flex flex-col lg:flex-row w-full">
        <div class="flex-1 flex flex-col justify-center p-8 md:p-16 border-b-4 lg:border-b-0 lg:border-r-4 border-black bg-[#FFE500] text-black">
          <h1 class="text-6xl md:text-8xl font-black uppercase leading-[0.9] tracking-tighter mb-8">
            Make <br/>
            Things <br/>
            Loud.
          </h1>
          <p class="text-xl font-bold mb-10 max-w-md">
            WE DESIGN DIGITAL EXPERIENCES THAT REFUSE TO BE IGNORED. NO BORING STUFF ALLOWED.
          </p>
          <button class="w-fit bg-[#4ECDC4] text-black border-4 border-black font-black uppercase text-xl px-12 py-6 shadow-[8px_8px_0_0_#000] hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all flex items-center gap-4">
            Start Project <UIcon name="i-heroicons-arrow-right" class="w-8 h-8" />
          </button>
        </div>
        <div class="flex-1 bg-[#FF6B6B] relative overflow-hidden flex items-center justify-center p-8">
          <div class="w-64 h-64 bg-white border-4 border-black rounded-full shadow-[16px_16px_0_0_#000] relative z-10 flex items-center justify-center">
             <UIcon name="i-heroicons-star-solid" class="text-black w-24 h-24 text-[#FFE500]" />
          </div>
          <div class="absolute top-10 right-10 w-32 h-32 bg-[#4ECDC4] border-4 border-black shadow-[8px_8px_0_0_#000]"></div>
          <div class="absolute bottom-10 left-10 w-48 h-32 bg-white border-4 border-black rounded-full shadow-[8px_8px_0_0_#000]"></div>
        </div>
      </div>
    </section>

    <!-- 4. Dark Tech / Neon -->
    <section v-else-if="variant === 4" class="relative min-h-[850px] bg-[#0A0A0B] text-white flex flex-col overflow-hidden border-b-8 border-gray-900">
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div class="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-emerald-500/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div class="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-blue-500/20 blur-[120px] rounded-full pointer-events-none"></div>

      <header class="relative z-10 flex items-center justify-between px-6 py-6 max-w-7xl mx-auto w-full border-b border-white/5">
        <div class="flex items-center gap-2 font-bold text-xl tracking-wide text-white">
          <div class="w-6 h-6 rounded bg-gradient-to-br from-emerald-400 to-blue-500"></div>
          SYNAPSE
        </div>
        <nav class="hidden md:flex gap-8 text-sm font-medium text-gray-400">
          <a href="#" class="hover:text-white transition-colors">Platform</a>
          <a href="#" class="hover:text-white transition-colors">Developers</a>
          <a href="#" class="hover:text-white transition-colors">Network</a>
        </nav>
        <button class="hidden md:block px-5 py-2 text-sm font-medium border border-white/10 rounded-md hover:bg-white/5 transition-colors">
          Initialize
        </button>
        <button class="md:hidden text-white"><UIcon name="i-heroicons-bars-3" class="w-6 h-6" /></button>
      </header>

      <div class="relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center max-w-5xl mx-auto">
        <div class="mb-6 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-mono tracking-wider flex items-center gap-2 uppercase">
          <div class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></div>
          System Online
        </div>
        <h1 class="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-white">
          Deploy Infrastructure <br/>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">at the Edge.</span>
        </h1>
        <p class="text-gray-400 text-lg md:text-xl max-w-2xl mb-12 font-light">
          Global, low-latency computing platform built for the next generation of real-time applications and AI workloads.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button class="bg-white text-black px-8 py-3.5 rounded-md font-medium hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
            Start Building
          </button>
          <button class="px-8 py-3.5 rounded-md font-medium text-white border border-white/10 hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
            Read Docs <UIcon name="i-heroicons-chevron-right" class="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>

    <!-- 5. Glassmorphism -->
    <section v-else-if="variant === 5" class="relative min-h-[850px] bg-slate-900 flex flex-col border-b-8 border-gray-800 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-80"></div>
      <div class="absolute top-0 left-0 w-full h-full backdrop-blur-[100px] bg-white/10"></div>
      
      <div class="absolute top-20 right-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-[80px] opacity-70"></div>
      <div class="absolute bottom-20 left-20 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-[80px] opacity-70"></div>
      
      <header class="relative z-20 mx-6 mt-6 px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-between">
        <div class="font-bold text-xl text-white">Aura.</div>
        <nav class="hidden md:flex gap-8 text-sm font-medium text-white/80">
          <a href="#" class="hover:text-white transition-colors">Features</a>
          <a href="#" class="hover:text-white transition-colors">Community</a>
          <a href="#" class="hover:text-white transition-colors">Pricing</a>
        </nav>
        <button class="hidden md:block bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-md px-6 py-2 rounded-xl text-sm font-medium transition-colors">
          Join Beta
        </button>
        <button class="md:hidden text-white"><UIcon name="i-heroicons-bars-3" class="w-6 h-6" /></button>
      </header>

      <div class="relative z-10 flex-1 flex flex-col items-center justify-center px-6">
        <div class="w-full max-w-4xl p-8 md:p-16 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl text-center">
          <h1 class="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Design that feels like <br/> magic.
          </h1>
          <p class="text-white/80 text-lg md:text-xl max-w-xl mx-auto mb-10 font-light">
            Create stunning, glass-like interfaces in seconds with our new UI kit. Built for modern web applications.
          </p>
          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <button class="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg shadow-white/10">
              Get Unlimited Access
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. Minimalist Typography -->
    <section v-else-if="variant === 6" class="relative min-h-[850px] bg-white text-black flex flex-col border-b-8 border-gray-100">
      <header class="flex items-center justify-between px-8 py-8 w-full max-w-screen-2xl mx-auto">
        <div class="font-medium text-sm tracking-widest uppercase text-black">M/NML</div>
        <button class="text-black group flex gap-2 items-center text-sm font-medium uppercase tracking-widest">
          Menu <div class="w-8 h-px bg-black group-hover:w-12 transition-all"></div>
        </button>
      </header>
      
      <div class="flex-1 flex flex-col justify-center px-8 md:px-16 max-w-screen-2xl mx-auto w-full">
        <h1 class="text-[12vw] md:text-[8vw] leading-[0.85] font-normal tracking-tighter mb-12 text-black">
          Think <br/>
          Less. <br/>
          Do <br/>
          More.
        </h1>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 w-full border-t border-black pt-8">
          <p class="col-span-1 text-sm md:text-base font-medium max-w-xs text-black">
            We strip away the noise to build digital experiences that are focused, fast, and highly effective.
          </p>
          <div class="col-span-1 md:col-span-2 flex justify-start md:justify-end">
            <button class="group relative text-2xl md:text-4xl tracking-tight hover:italic transition-all flex items-center gap-4 text-black">
              Discuss a project
              <UIcon name="i-heroicons-arrow-right" class="w-8 h-8 group-hover:translate-x-4 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- 7. Luxury / Editorial -->
    <section v-else-if="variant === 7" class="relative min-h-[800px] bg-stone-900 flex flex-col font-serif border-b-8 border-stone-800">
      <div 
        class="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-60 mix-blend-luminosity"
        style="background-image: url('https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop')"
      ></div>
      <div class="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/60 to-transparent z-0"></div>
      
      <header class="relative z-10 flex items-center justify-between px-8 md:px-16 py-8">
        <nav class="hidden md:flex gap-8 text-sm font-sans tracking-widest uppercase text-stone-300">
          <a href="#" class="hover:text-white">Collection</a>
          <a href="#" class="hover:text-white">Heritage</a>
        </nav>
        <div class="text-3xl md:text-4xl font-serif text-white absolute left-1/2 -translate-x-1/2">
          MAISON
        </div>
        <nav class="hidden md:flex gap-8 text-sm font-sans tracking-widest uppercase text-stone-300">
          <a href="#" class="hover:text-white">Journal</a>
          <a href="#" class="hover:text-white">Boutiques</a>
        </nav>
        <button class="md:hidden text-white ml-auto"><UIcon name="i-heroicons-bars-3" class="w-6 h-6" /></button>
      </header>

      <div class="relative z-10 flex-1 flex flex-col items-center justify-end text-center pb-24 px-6">
        <div class="font-sans text-xs tracking-[0.3em] uppercase text-stone-400 mb-6">Fall / Winter 2024</div>
        <h1 class="text-5xl md:text-8xl font-serif text-white mb-8 font-light">
          The Art of <br/> Understatement.
        </h1>
        <button class="bg-transparent font-sans uppercase tracking-widest text-xs font-medium text-white border-b border-white/30 pb-1 hover:border-white transition-colors">
          Explore the Collection
        </button>
      </div>
    </section>

    <!-- 8. Soft / Playful E-commerce -->
    <section v-else-if="variant === 8" class="relative min-h-[800px] bg-[#FDF8F5] flex flex-col border-b-8 border-[#F0E5DE]">
      <header class="flex items-center justify-between px-6 py-6 max-w-7xl mx-auto w-full">
        <div class="font-black text-2xl text-[#D65D5D] tracking-tight">bloom.</div>
        <nav class="hidden md:flex bg-white rounded-full px-6 py-2 shadow-sm gap-8 text-sm font-medium text-gray-600">
          <a href="#" class="hover:text-[#D65D5D]">Shop</a>
          <a href="#" class="hover:text-[#D65D5D]">About</a>
          <a href="#" class="hover:text-[#D65D5D]">Learn</a>
        </nav>
        <div class="hidden md:flex gap-4">
          <button class="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-gray-600 hover:text-[#D65D5D]">
            <UIcon name="i-heroicons-star" class="w-5 h-5" />
          </button>
          <button class="bg-[#D65D5D] text-white font-medium px-6 py-2 rounded-full hover:bg-[#C24B4B] shadow-md shadow-[#D65D5D]/20">
            Cart (0)
          </button>
        </div>
        <button class="md:hidden text-[#D65D5D]"><UIcon name="i-heroicons-bars-3" class="w-6 h-6" /></button>
      </header>

      <div class="flex-1 max-w-7xl mx-auto w-full px-6 py-12 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div class="flex-1 max-w-xl">
          <h1 class="text-5xl md:text-7xl font-bold text-gray-900 leading-[1.1] mb-6">
            Skincare that actually <span class="text-[#D65D5D]">listens</span> to you.
          </h1>
          <p class="text-lg text-gray-600 mb-8 leading-relaxed">
            Personalized routines formulated with gentle, earth-friendly ingredients. Give your skin the love it deserves.
          </p>
          <button class="bg-[#D65D5D] text-white text-lg font-bold px-10 py-4 rounded-full hover:bg-[#C24B4B] hover:scale-105 transition-all shadow-xl shadow-[#D65D5D]/30">
            Take the Skin Quiz
          </button>
        </div>
        
        <div class="flex-1 relative w-full max-w-lg aspect-square">
          <div class="absolute inset-0 bg-[#F5E6DF] rounded-full scale-105 -z-10 blur-xl opacity-70"></div>
          <div class="w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl relative">
            <img src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1000&auto=format&fit=crop" alt="Product" class="w-full h-full object-cover" />
            <div class="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-full px-4 py-2 font-bold text-[#D65D5D] shadow-sm">
              New Arrival
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 9. Web3 / Glow -->
    <section v-else-if="variant === 9" class="relative min-h-[800px] bg-black flex flex-col font-sans border-b-8 border-gray-900 overflow-hidden">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/40 via-black to-black"></div>
      
      <header class="relative z-10 flex items-center justify-between px-6 py-6 lg:px-12 w-full border-b border-white/10">
        <div class="flex items-center gap-2 text-white font-bold text-xl">
          <UIcon name="i-heroicons-bolt-solid" class="text-indigo-400 w-6 h-6" /> VOLT
        </div>
        <nav class="hidden md:flex gap-8 text-sm font-semibold text-gray-400 uppercase tracking-wide">
          <a href="#" class="hover:text-white transition-colors">Ecosystem</a>
          <a href="#" class="hover:text-white transition-colors">Governance</a>
          <a href="#" class="hover:text-white transition-colors">Build</a>
        </nav>
        <button class="hidden md:block bg-white text-black font-bold uppercase tracking-wider text-xs px-6 py-3 rounded-full hover:scale-105 transition-transform">
          Connect Wallet
        </button>
        <button class="md:hidden text-white"><UIcon name="i-heroicons-bars-3" class="w-6 h-6" /></button>
      </header>

      <div class="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4">
        <h1 class="text-6xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 mb-6 pb-2 tracking-tighter">
          THE FUTURE IS <br/> DECENTRALIZED.
        </h1>
        <p class="text-gray-400 text-lg md:text-2xl max-w-3xl mb-12 font-medium">
          Swap, earn, and build on the leading decentralized crypto trading protocol. 
        </p>
        <div class="flex flex-col sm:flex-row gap-6 justify-center w-full">
          <button class="bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold text-lg px-10 py-4 rounded-2xl hover:scale-105 transition-all shadow-[0_0_40px_-10px_rgba(99,102,241,0.5)]">
            Launch App
          </button>
          <button class="bg-white/5 border border-white/10 backdrop-blur-md text-white font-bold text-lg px-10 py-4 rounded-2xl hover:bg-white/10 transition-all">
            Read Whitepaper
          </button>
        </div>
      </div>
    </section>

    <!-- 10. Bento Grid -->
    <section v-else-if="variant === 10" class="relative min-h-[800px] bg-gray-50 flex flex-col pb-10">
      <header class="flex items-center justify-between px-4 py-4 md:px-8 md:py-6">
        <div class="font-bold text-2xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-500">
          Gridly
        </div>
        <button class="bg-black text-white rounded-full px-6 py-2.5 text-sm font-medium hover:bg-gray-800">
          Get App
        </button>
      </header>
      
      <div class="flex-1 w-full max-w-7xl mx-auto p-4 md:p-8 flex items-center justify-center">
        <div class="grid grid-cols-1 md:grid-cols-4 grid-rows-[auto] md:grid-rows-3 gap-4 h-full min-h-[600px] w-full">
          
          <div class="col-span-1 md:col-span-2 md:row-span-2 bg-gradient-to-br from-orange-100 to-pink-100 rounded-3xl p-8 md:p-12 flex flex-col justify-between overflow-hidden relative">
            <h1 class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight z-10">
              Manage all your <br/> creativity in one <br/> beautiful space.
            </h1>
            <div class="mt-8 z-10">
              <button class="bg-black text-white px-6 py-3 rounded-full font-medium flex items-center gap-2">
                Try it free <UIcon name="i-heroicons-arrow-right" class="w-5 h-5" />
              </button>
            </div>
            <div class="absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-tr from-orange-400 to-pink-400 rounded-full blur-3xl opacity-30"></div>
          </div>

          <div class="col-span-1 md:col-span-2 md:row-span-1 bg-black rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden">
            <h3 class="text-white text-2xl font-bold mb-2 z-10">AI Powered</h3>
            <p class="text-gray-400 z-10">Generate ideas instantly with our new AI engine.</p>
            <UIcon name="i-heroicons-sparkles" class="absolute right-8 bottom-8 text-orange-500 opacity-20 w-24 h-24" />
          </div>

          <div class="col-span-1 md:col-span-1 md:row-span-1 bg-white border border-gray-200 rounded-3xl p-6 flex flex-col items-center justify-center text-center">
             <div class="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-4">
                <UIcon name="i-heroicons-shield-check" class="w-6 h-6" />
             </div>
             <div class="font-bold text-lg text-black">Secure</div>
             <div class="text-sm text-gray-500">Enterprise grade</div>
          </div>

          <div class="col-span-1 md:col-span-1 md:row-span-1 bg-white border border-gray-200 rounded-3xl p-6 flex flex-col items-center justify-center text-center">
             <h2 class="text-4xl font-black text-gray-900 mb-1">99%</h2>
             <div class="text-sm text-gray-500">Customer satisfaction</div>
          </div>

          <div class="col-span-1 md:col-span-4 md:row-span-1 bg-gray-900 rounded-3xl p-8 flex flex-col md:flex-row gap-4 items-center justify-between">
            <div>
               <h3 class="text-white text-xl md:text-2xl font-bold mb-1">Ready to dive in?</h3>
               <p class="text-gray-400">Join 100,000+ creators today.</p>
            </div>
            <button class="bg-white text-black px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 w-full md:w-auto">
              Sign Up
            </button>
          </div>

        </div>
      </div>
    </section>

    <!-- 11. Y2K / Early 2000s -->
    <section v-else-if="variant === 11" class="relative min-h-screen bg-[#0D0D2B] flex flex-col border-b-8 border-[#1a1a4a] overflow-hidden font-sans">
      <div class="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style="background: radial-gradient(circle at 35% 35%, #fff 0%, #a0c8ff 30%, #3060d0 60%, #050530 100%); opacity: 0.6;"></div>
      <div class="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style="background: radial-gradient(circle at 35% 35%, #fff 0%, #ffaade 30%, #9020c0 60%, #050530 100%); opacity: 0.5;"></div>

      <header class="relative z-10 flex items-center justify-between px-6 py-5 border-b border-[#ffffff18]"
        style="background: linear-gradient(180deg, rgba(80,120,255,0.18) 0%, transparent 100%);">
        <div class="font-black text-2xl tracking-tight"
          style="background: linear-gradient(135deg, #fff 0%, #a0e0ff 40%, #8050ff 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
          XPERIA™
        </div>
        <nav class="hidden md:flex gap-1 text-sm">
          <a v-for="l in ['Products', 'Downloads', 'Support', 'Community']" :key="l" href="#" class="px-4 py-2 rounded text-[#a0c0ff] hover:text-white transition-colors font-medium"
            style="text-shadow: 0 0 8px #6080ff;">
            {{ l }}
          </a>
        </nav>
        <button class="hidden md:block text-sm font-bold px-6 py-2 rounded border border-[#6080ff] text-[#a0c0ff] hover:bg-[#6080ff]/20 transition-colors"
          style="box-shadow: 0 0 12px rgba(96,128,255,0.3); text-shadow: 0 0 8px #6080ff;">
          SIGN UP FREE
        </button>
        <button class="md:hidden text-[#a0c0ff]"><UIcon name="i-heroicons-bars-3" class="w-6 h-6" /></button>
      </header>

      <div class="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 py-16">
        <div class="text-xs font-bold tracking-[0.4em] uppercase text-[#80a0ff] mb-6"
          style="text-shadow: 0 0 10px #6080ff;">
          ✦ Next Generation Technology ✦
        </div>
        <h1 class="text-5xl md:text-8xl font-black mb-6 leading-tight"
          style="background: linear-gradient(135deg, #ffffff 0%, #a0d0ff 30%, #8060ff 60%, #ff60a0 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
          ENTER THE<br />NEW WORLD
        </h1>
        <p class="text-[#7090d0] text-lg md:text-xl max-w-xl mb-12 leading-relaxed">
          Blazing fast. Ultra secure. Infinitely scalable. Experience the internet as it was meant to be.
        </p>
        <div class="flex flex-col sm:flex-row gap-4">
          <button class="px-10 py-4 rounded font-black text-white text-sm tracking-widest uppercase"
            style="background: linear-gradient(135deg, #4060d0, #8040c0, #c030a0); box-shadow: 0 0 30px rgba(128,64,192,0.5), inset 0 1px 0 rgba(255,255,255,0.2);">
            LAUNCH NOW
          </button>
          <button class="px-10 py-4 rounded font-bold text-[#a0c0ff] text-sm tracking-widest uppercase border border-[#4060d0] hover:bg-[#4060d0]/20 transition-colors"
            style="box-shadow: 0 0 16px rgba(64,96,208,0.3);">
            LEARN MORE ›
          </button>
        </div>
        <div class="mt-20 w-full max-w-3xl h-px"
          style="background: linear-gradient(90deg, transparent, #6080ff, #ff60a0, #6080ff, transparent);"></div>
        <div class="mt-4 flex gap-12 text-xs text-[#506090] tracking-widest uppercase">
          <span>256-bit SSL</span><span>•</span><span>99.9% Uptime</span><span>•</span><span>24/7 Support</span>
        </div>
      </div>
    </section>

    <!-- 12. Retro 70s -->
    <section v-else-if="variant === 12" class="relative min-h-screen bg-[#F5E6C8] flex flex-col border-b-8 border-[#C8A96E] overflow-hidden">
      <div class="absolute bottom-0 left-0 w-full h-[55%] opacity-30 pointer-events-none"
        style="background: radial-gradient(ellipse 120% 80% at 50% 120%, #C05020 0%, transparent 70%);"></div>
      <div class="absolute top-0 right-0 w-72 h-72 rounded-full bg-[#E8A830] opacity-20 pointer-events-none"
        style="transform: translate(33%, -33%);"></div>

      <header class="relative z-10 flex items-center justify-between px-8 py-6 border-b-2 border-[#8B5A2B]/30">
        <div class="font-black text-3xl text-[#5C3317]" style="font-family: Georgia, serif; font-style: italic;">
          GROOVY.
        </div>
        <nav class="hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest text-[#8B5A2B]">
          <a v-for="l in ['Work', 'Story', 'Vibes', 'Contact']" :key="l" href="#" class="hover:text-[#C05020] transition-colors">{{ l }}</a>
        </nav>
        <button class="hidden md:block bg-[#C05020] text-[#F5E6C8] font-black uppercase tracking-widest text-xs px-6 py-3 rounded-full hover:bg-[#A04010] transition-colors">
          Let's Vibe
        </button>
        <button class="md:hidden text-[#5C3317]"><UIcon name="i-heroicons-bars-3" class="w-6 h-6" /></button>
      </header>

      <div class="relative z-10 flex-1 flex flex-col lg:flex-row items-center max-w-7xl mx-auto w-full px-8 py-16 gap-12">
        <div class="flex-1">
          <div class="inline-block bg-[#E8A830] text-[#5C3317] text-xs font-black uppercase tracking-[0.3em] px-4 py-2 rounded-full mb-8"
            style="transform: rotate(-2deg);">
            Est. 1972 — Still Groovin'
          </div>
          <h1 class="text-6xl md:text-8xl font-black text-[#3D1C0A] leading-[0.9] mb-8" style="font-family: Georgia, serif;">
            Far Out <br/>
            <em class="text-[#C05020]">Design</em><br/>
            Studio
          </h1>
          <p class="text-[#7A4424] text-lg leading-relaxed max-w-md mb-10 font-medium">
            We create bold, soulful brand identities rooted in craft and authenticity. No trends. Just timeless good taste.
          </p>
          <div class="flex flex-wrap gap-4">
            <button class="bg-[#3D1C0A] text-[#F5E6C8] font-black uppercase tracking-widest text-sm px-10 py-4 rounded-full hover:bg-[#C05020] transition-all">
              See Our Work
            </button>
            <button class="border-2 border-[#8B5A2B] text-[#8B5A2B] font-black uppercase tracking-widest text-sm px-10 py-4 rounded-full hover:border-[#C05020] hover:text-[#C05020] transition-all">
              Dig Deeper
            </button>
          </div>
        </div>
        <div class="flex-1 flex items-center justify-center">
          <div class="relative w-72 h-72 md:w-96 md:h-96">
            <div class="absolute inset-0 rounded-full bg-[#C05020] opacity-20" style="transform: scale(1.25);"></div>
            <div class="absolute inset-6 rounded-full bg-[#E8A830] opacity-40" style="transform: scale(1.1);"></div>
            <div class="absolute inset-0 rounded-full border-4 border-[#8B5A2B]/40 flex items-center justify-center">
              <div class="w-56 h-56 md:w-72 md:h-72 rounded-full bg-[#C05020] flex items-center justify-center border-4 border-[#5C3317]">
                <span class="text-6xl md:text-8xl font-black text-[#F5E6C8]" style="font-family: Georgia, serif; font-style: italic;">G</span>
              </div>
            </div>
            <div class="absolute w-20 h-20 rounded-full bg-[#E8A830] border-4 border-[#5C3317]"
              style="top: -1rem; right: -1rem;"></div>
            <div class="absolute w-16 h-16 rounded-full bg-[#F5E6C8] border-4 border-[#8B5A2B]"
              style="bottom: -1.5rem; left: -1.5rem;"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- 13. Swiss International -->
    <section v-else-if="variant === 13" class="relative min-h-screen bg-white flex flex-col border-b-8 border-gray-200">
      <div class="absolute inset-0 pointer-events-none"
        style="background-image: repeating-linear-gradient(to right, #00000008 0px, #00000008 1px, transparent 1px, transparent 80px);"></div>

      <header class="relative z-10 flex items-center px-8 py-0 border-b-2 border-black h-16">
        <div class="font-black text-sm tracking-[0.4em] uppercase border-r-2 border-black pr-8 h-full flex items-center">
          HELVETICA STUDIO
        </div>
        <nav class="hidden md:flex h-full">
          <a v-for="(l, i) in ['Arbeit', 'Studio', 'Methodik', 'Kontakt']" :key="l" href="#"
            class="px-6 h-full flex items-center text-xs font-bold uppercase tracking-[0.2em] border-r border-black/20 hover:bg-black hover:text-white transition-colors">
            <span class="text-[#FF0000] mr-2 font-mono text-[10px]">0{{ i + 1 }}</span>{{ l }}
          </a>
        </nav>
        <div class="ml-auto hidden md:flex items-center h-full border-l-2 border-black">
          <button class="px-8 h-full text-xs font-black uppercase tracking-[0.3em] bg-black text-white hover:bg-[#FF0000] transition-colors">
            Anfrage →
          </button>
        </div>
        <button class="md:hidden ml-auto text-black"><UIcon name="i-heroicons-bars-3" class="w-6 h-6" /></button>
      </header>

      <div class="relative z-10 flex-1 grid grid-cols-12 gap-0 border-b-2 border-black">
        <div class="col-span-1 bg-[#FF0000] hidden md:block"></div>
        <div class="col-span-12 md:col-span-7 border-r-0 md:border-r-2 border-black p-8 md:p-16 flex flex-col justify-between">
          <div>
            <div class="text-xs font-bold tracking-[0.4em] uppercase text-[#FF0000] mb-8">Design. Order. Function.</div>
            <h1 class="text-6xl md:text-[5.5rem] font-black leading-[0.85] tracking-tight uppercase mb-12">
              Form<br />follows<br />function.
            </h1>
            <div class="flex gap-0 mt-8">
              <button class="bg-black text-white font-black uppercase tracking-[0.2em] text-xs px-8 py-4 hover:bg-[#FF0000] transition-colors">
                View Work
              </button>
              <button class="border-2 border-black font-black uppercase tracking-[0.2em] text-xs px-8 py-4 hover:bg-black hover:text-white transition-colors">
                Manifesto
              </button>
            </div>
          </div>
          <div class="flex gap-16 pt-16 border-t-2 border-black">
            <div v-for="([n, l], i) in [['1957', 'Founded'], ['340+', 'Projects'], ['22', 'Awards']]" :key="i">
              <div class="text-3xl font-black text-[#FF0000]">{{ n }}</div>
              <div class="text-xs font-bold uppercase tracking-[0.2em] text-gray-600">{{ l }}</div>
            </div>
          </div>
        </div>
        <div class="col-span-12 md:col-span-4 flex flex-col">
          <div class="flex-1 bg-black flex items-center justify-center p-12">
            <div class="text-center">
              <div class="text-8xl md:text-[10rem] font-black text-white leading-none">H</div>
              <div class="text-xs text-white/40 tracking-[0.4em] uppercase mt-4">Helvetica Neue</div>
            </div>
          </div>
          <div class="p-8 border-t-2 border-black">
            <div class="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-2">Current Project</div>
            <div class="text-sm font-black uppercase">Zürich Typographic Exhibition</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 14. Terminal / CLI -->
    <section v-else-if="variant === 14" class="relative min-h-screen bg-[#0C0C0C] flex flex-col border-b-8 border-[#1a1a1a] overflow-hidden font-mono">
      <div class="absolute inset-0 pointer-events-none opacity-[0.04]"
        style="background-image: repeating-linear-gradient(transparent, transparent 2px, rgba(0,255,0,0.1) 2px, rgba(0,255,0,0.1) 4px);"></div>

      <header class="relative z-10 flex items-center justify-between px-6 py-4 border-b border-[#00ff4118]">
        <div class="flex items-center gap-3">
          <div class="flex gap-1.5">
            <div class="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
            <div class="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
            <div class="w-3 h-3 rounded-full bg-[#27C93F]"></div>
          </div>
          <span class="text-[#00ff41] text-sm opacity-60 ml-4">~/HACKR — bash</span>
        </div>
        <nav class="hidden md:flex gap-6 text-xs text-[#00ff41]/60">
          <a v-for="l in ['./docs', './projects', './blog', './contact']" :key="l" href="#" class="hover:text-[#00ff41] transition-colors">{{ l }}</a>
        </nav>
        <div class="hidden md:flex items-center gap-2 text-xs text-[#00ff41]/60">
          <div class="w-2 h-2 rounded-full bg-[#00ff41] animate-pulse"></div>
          online
        </div>
        <button class="md:hidden text-[#00ff41]"><UIcon name="i-heroicons-bars-3" class="w-6 h-6" /></button>
      </header>

      <div class="relative z-10 flex-1 flex flex-col justify-center max-w-4xl mx-auto w-full px-6 py-16">
        <div class="space-y-3 mb-12">
          <div class="text-[#00ff41]/40 text-sm">
            <span class="text-[#00ff41]/60">hackr@world</span>
            <span class="text-[#ffffff30] mx-1">:</span>
            <span class="text-[#6090ff]/60">~</span>
            <span class="text-[#ffffff30] mx-1">$</span>
            <span class="text-[#00ff41]/60 ml-2">whoami</span>
          </div>
          <div class="text-[#00ff41] text-sm pl-4">HACKR — full-stack engineers who ship at terminal speed</div>
          <div class="text-[#00ff41]/40 text-sm mt-4">
            <span class="text-[#00ff41]/60">hackr@world</span>
            <span class="text-[#ffffff30] mx-1">:</span>
            <span class="text-[#6090ff]/60">~</span>
            <span class="text-[#ffffff30] mx-1">$</span>
            <span class="text-[#00ff41]/60 ml-2">sudo make world-better --now<span class="animate-pulse">▌</span></span>
          </div>
          <div class="pl-4 space-y-1 text-sm">
            <div class="text-[#00ff41]/40">Installing dependencies...</div>
            <div class="text-[#00ff41]/60">✓ empathy loaded</div>
            <div class="text-[#00ff41]/60">✓ clean-code loaded</div>
            <div class="text-[#00ff41]/60">✓ fast-delivery loaded</div>
            <div class="text-[#00ff41]">✓ world-better installed successfully.</div>
          </div>
        </div>

        <h1 class="text-4xl md:text-6xl font-black text-[#00ff41] leading-tight mb-6"
          style="text-shadow: 0 0 30px rgba(0,255,65,0.4);">
          We build software<br />
          <span class="text-white">that actually</span> ships.
        </h1>
        <p class="text-[#00ff41]/60 text-base md:text-lg max-w-xl mb-10 leading-relaxed">
          No fluff. No bloat. Just clean, performant, production-ready code delivered fast. Open-source at heart.
        </p>
        <div class="flex flex-col sm:flex-row gap-3">
          <button class="flex items-center justify-center gap-3 bg-[#00ff41] text-black font-black px-8 py-4 text-sm uppercase tracking-widest hover:bg-[#00cc33] transition-colors"
            style="box-shadow: 0 0 20px rgba(0,255,65,0.3);">
            <UIcon name="i-heroicons-command-line" class="w-5 h-5" /> ./start-project
          </button>
          <button class="flex items-center justify-center gap-3 border border-[#00ff41]/30 text-[#00ff41]/70 font-bold px-8 py-4 text-sm uppercase tracking-widest hover:border-[#00ff41] hover:text-[#00ff41] transition-colors">
            cat README.md
          </button>
        </div>
      </div>
    </section>

    <!-- 15. Memphis Design -->
    <section v-else-if="variant === 15" class="relative min-h-screen bg-[#F2F0E8] flex flex-col border-b-8 border-[#1a1a1a] overflow-hidden">
      <div class="absolute inset-0 pointer-events-none"
        style="background-image: radial-gradient(circle, #1a1a1a 1.5px, transparent 1.5px); background-size: 32px 32px; opacity: 0.12;"></div>
      <div class="absolute top-16 right-16 w-24 h-24 border-8 border-[#FF3366]" style="transform: rotate(12deg);"></div>
      <div class="absolute top-40 right-32 w-12 h-12 bg-[#FFE500] border-4 border-[#1a1a1a] rounded-full"></div>
      <div class="absolute bottom-20 left-8 w-32 h-16 bg-[#00D4FF] border-4 border-[#1a1a1a]" style="transform: rotate(-8deg);"></div>
      <div class="absolute bottom-40 right-8 w-20 h-20 bg-[#FF3366] border-4 border-[#1a1a1a] rounded-full"></div>
      <div class="absolute top-4 left-1/3 w-12 h-12 border-8 border-[#6600CC]" style="transform: rotate(45deg);"></div>

      <header class="relative z-10 flex items-center justify-between px-6 py-4 border-b-4 border-[#1a1a1a] bg-[#FFE500]">
        <div class="font-black text-2xl text-[#1a1a1a] uppercase tracking-tight">MEMPHIS™</div>
        <nav class="hidden md:flex gap-0">
          <a v-for="(l, i) in ['Design', 'Works', 'Studio', 'Contact']" :key="l" href="#"
            class="px-5 py-2 font-black uppercase text-sm border-l-4 border-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-[#FFE500] transition-colors"
            :style="{ color: ['#FF3366', '#6600CC', '#FF8800', '#00D4FF'][i] }">
            {{ l }}
          </a>
        </nav>
        <button class="hidden md:block bg-[#FF3366] border-4 border-[#1a1a1a] text-white font-black uppercase text-xs px-6 py-2"
          style="box-shadow: 4px 4px 0 0 #1a1a1a; transition: all 0.1s;">
          Hire Us!
        </button>
        <button class="md:hidden border-4 border-[#1a1a1a] bg-white p-1"><UIcon name="i-heroicons-bars-3" class="w-6 h-6" /></button>
      </header>

      <div class="relative z-10 flex-1 flex flex-col justify-center px-8 md:px-20 py-16 max-w-5xl">
        <div class="inline-flex items-center gap-2 bg-[#00D4FF] border-4 border-[#1a1a1a] px-4 py-2 mb-8 w-fit"
          style="box-shadow: 4px 4px 0 0 #1a1a1a; transform: rotate(-1deg);">
          <span class="font-black text-xs uppercase text-[#1a1a1a] tracking-[0.2em]">Post-Modern Creative Agency</span>
        </div>
        <h1 class="text-6xl md:text-9xl font-black uppercase text-[#1a1a1a] leading-[0.85] tracking-tight mb-10">
          WILD<br />
          <span style="-webkit-text-stroke: 4px #1a1a1a; color: #FFE500;">DESIGN</span><br />
          MAKES<br />
          HISTORY.
        </h1>
        <div class="flex flex-col sm:flex-row gap-0">
          <button class="bg-[#FF3366] border-4 border-[#1a1a1a] text-white font-black uppercase tracking-widest text-sm px-10 py-5"
            style="box-shadow: 6px 6px 0 0 #1a1a1a;">
            Start a Project →
          </button>
          <button class="bg-[#6600CC] border-4 border-[#1a1a1a] text-white font-black uppercase tracking-widest text-sm px-10 py-5 sm:-ml-1 mt-0"
            style="box-shadow: 6px 6px 0 0 #1a1a1a;">
            View Portfolio →
          </button>
        </div>
      </div>
    </section>

    <!-- 16. Vaporwave / Synthwave -->
    <section v-else-if="variant === 16" class="relative min-h-screen bg-[#0A0015] flex flex-col border-b-8 border-[#2a005a] overflow-hidden font-sans">
      <div class="absolute bottom-0 left-0 w-full h-[50%] pointer-events-none overflow-hidden">
        <div class="w-full h-full"
          style="background-image: linear-gradient(to right, #ff00ff30 1px, transparent 1px), linear-gradient(to bottom, #ff00ff30 1px, transparent 1px); background-size: 60px 60px; transform: perspective(400px) rotateX(40deg); transform-origin: bottom center;"></div>
      </div>
      <div class="absolute top-[15%] left-1/2 w-96 h-48 rounded-full pointer-events-none -translate-x-1/2"
        style="background: radial-gradient(ellipse, #FF6B9D 0%, #FF3366 40%, #FF0066 70%, transparent 100%); filter: blur(4px); opacity: 0.8;"></div>
      <div class="absolute top-[25%] left-1/2 w-[500px] h-16 bg-[#0A0015] pointer-events-none -translate-x-1/2"></div>
      <div class="absolute top-[32%] left-1/2 w-[500px] h-8 bg-[#0A0015] pointer-events-none -translate-x-1/2"></div>
      <div class="absolute top-[38%] left-1/2 w-[500px] h-5 bg-[#0A0015] pointer-events-none -translate-x-1/2"></div>
      <div class="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-[#7B00FF] blur-[100px] opacity-20 pointer-events-none"></div>
      <div class="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-[#FF0066] blur-[100px] opacity-20 pointer-events-none"></div>

      <header class="relative z-10 flex items-center justify-between px-6 py-5 border-b border-[#ff00ff20]">
        <div class="font-black text-xl tracking-wider"
          style="background: linear-gradient(135deg, #FF6EC7, #A855F7, #7B00FF); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
          SYNTHCORP
        </div>
        <nav class="hidden md:flex gap-8 text-xs font-bold uppercase tracking-[0.25em] text-[#A855F7]">
          <a v-for="l in ['Mainframe', 'Archive', 'Connect']" :key="l" href="#" class="hover:text-[#FF6EC7] transition-colors">{{ l }}</a>
        </nav>
        <button class="hidden md:block text-xs font-black uppercase tracking-[0.2em] px-6 py-2.5 border border-[#FF6EC7] rounded text-[#FF6EC7]"
          style="box-shadow: 0 0 12px rgba(255,110,199,0.4);">
          Enter the Grid
        </button>
        <button class="md:hidden text-[#A855F7]"><UIcon name="i-heroicons-bars-3" class="w-6 h-6" /></button>
      </header>

      <div class="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 pb-32">
        <div class="text-xs tracking-[0.5em] uppercase mb-8 font-bold text-[#A855F7]">
          A E S T H E T I C S · 1 9 8 4
        </div>
        <h1 class="text-5xl md:text-8xl font-black leading-tight mb-6"
          style="background: linear-gradient(135deg, #FF6EC7 0%, #A855F7 40%, #7B00FF 70%, #FF6EC7 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; filter: drop-shadow(0 0 30px rgba(168,85,247,0.5));">
          DREAMS<br />IN<br />NEON
        </h1>
        <p class="max-w-lg text-lg mb-12 leading-relaxed font-medium text-[#c084fc]">
          Ride the digital sunset into a world where the past and future collapse into one glorious, pixelated moment.
        </p>
        <div class="flex flex-col sm:flex-row gap-4">
          <button class="px-10 py-4 font-black uppercase tracking-widest text-sm text-[#0A0015]"
            style="background: linear-gradient(135deg, #FF6EC7, #A855F7); box-shadow: 0 0 30px rgba(168,85,247,0.6);">
            DIVE IN
          </button>
          <button class="px-10 py-4 font-black uppercase tracking-widest text-sm border border-[#A855F7]/40 text-[#A855F7]">
            EXPLORE
          </button>
        </div>
      </div>
    </section>

    <!-- 17. Skeuomorphic -->
    <section v-else-if="variant === 17" class="relative min-h-screen flex flex-col border-b-8 border-[#5A3A1A]"
      style="background: linear-gradient(160deg, #8B6F47 0%, #6B4F2F 40%, #4A2E10 100%);">
      <div class="absolute inset-0 pointer-events-none opacity-20"
        style="background-image: repeating-linear-gradient(45deg, transparent, transparent 4px, rgba(0,0,0,0.1) 4px, rgba(0,0,0,0.1) 8px); background-size: 16px 16px;"></div>

      <header class="relative z-10 px-6 py-4">
        <div class="max-w-5xl mx-auto flex items-center justify-between rounded-2xl px-6 py-4 border border-[#ffffff18]"
          style="background: linear-gradient(180deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%); box-shadow: 0 1px 0 rgba(255,255,255,0.1) inset, 0 4px 20px rgba(0,0,0,0.4);">
          <div class="font-black text-2xl text-white" style="text-shadow: 0 1px 2px rgba(0,0,0,0.8);">
            NoteBook Pro
          </div>
          <nav class="hidden md:flex gap-1">
            <a v-for="l in ['Features', 'Gallery', 'Download', 'Support']" :key="l" href="#" class="px-4 py-2 rounded-lg text-sm font-semibold text-white/80 hover:text-white hover:bg-white/10 transition-colors">
              {{ l }}
            </a>
          </nav>
          <button class="hidden md:block px-6 py-2.5 rounded-xl text-sm font-black text-white border border-[#ffffff30]"
            style="background: linear-gradient(180deg, #5A9A2A 0%, #3A7A0A 100%); box-shadow: 0 1px 0 rgba(255,255,255,0.2) inset, 0 2px 8px rgba(0,0,0,0.4); text-shadow: 0 1px 1px rgba(0,0,0,0.5);">
            Buy Now — $4.99
          </button>
          <button class="md:hidden text-white"><UIcon name="i-heroicons-bars-3" class="w-6 h-6" /></button>
        </div>
      </header>

      <div class="relative z-10 flex-1 flex flex-col lg:flex-row items-center max-w-5xl mx-auto w-full px-6 py-16 gap-16">
        <div class="flex-1">
          <div class="inline-block px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest text-white/90 mb-8 border border-[#ffffff30]"
            style="background: linear-gradient(180deg, rgba(255,165,0,0.8) 0%, rgba(200,100,0,0.8) 100%); box-shadow: 0 1px 0 rgba(255,255,255,0.2) inset, 0 2px 8px rgba(0,0,0,0.4);">
            App of the Year 2011
          </div>
          <h1 class="text-5xl md:text-7xl font-black text-white leading-tight mb-6"
            style="text-shadow: 0 2px 4px rgba(0,0,0,0.6);">
            Your thoughts,<br />beautifully<br />
            <span style="color: #FFD700; text-shadow: 0 0 20px rgba(255,215,0,0.5), 0 2px 4px rgba(0,0,0,0.6);">organized.</span>
          </h1>
          <p class="text-white/70 text-lg mb-10 max-w-md leading-relaxed"
            style="text-shadow: 0 1px 2px rgba(0,0,0,0.5);">
            The most beautiful note-taking app ever crafted. Hand-stitched leather covers, real paper texture, and a fountain pen nib that glides like silk.
          </p>
          <div class="flex gap-4">
            <button class="px-8 py-4 rounded-2xl text-sm font-black text-white uppercase tracking-wider border border-[#ffffff30]"
              style="background: linear-gradient(180deg, #3080FF 0%, #1040C0 100%); box-shadow: 0 1px 0 rgba(255,255,255,0.2) inset, 0 4px 20px rgba(0,0,0,0.4); text-shadow: 0 1px 2px rgba(0,0,0,0.5);">
              Download Free
            </button>
            <button class="px-8 py-4 rounded-2xl text-sm font-semibold text-white border border-[#ffffff30] hover:bg-white/10 transition-colors"
              style="background: rgba(255,255,255,0.1); box-shadow: 0 1px 0 rgba(255,255,255,0.15) inset, 0 2px 8px rgba(0,0,0,0.3);">
              Watch Demo
            </button>
          </div>
        </div>
        <div class="flex-shrink-0">
          <div class="w-64 h-80 rounded-2xl relative border border-[#ffffff15]"
            style="background: linear-gradient(135deg, #8B4513 0%, #5C2D0A 100%); box-shadow: 0 0 0 2px rgba(255,255,255,0.05), 8px 8px 32px rgba(0,0,0,0.8), -4px -4px 16px rgba(255,255,255,0.05) inset;">
            <div class="absolute left-6 top-4 bottom-4 w-1 bg-[#C0C0C0] rounded-full"></div>
            <div class="absolute left-12 right-4 top-8 bottom-8 rounded-lg overflow-hidden"
              style="background: #FFF9F0; box-shadow: inset 0 0 8px rgba(0,0,0,0.1);">
              <div v-for="i in 10" :key="i" class="h-px bg-[#6090C030] mx-4" :style="{ marginTop: i === 1 ? '2rem' : '1.75rem' }"></div>
            </div>
            <div class="absolute top-12 left-16 right-6 text-xs font-semibold text-[#6090C0]" style="font-family: Georgia, serif;">
              My Notes...
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 18. Newspaper / Editorial -->
    <section v-else-if="variant === 18" class="relative min-h-screen bg-[#F4F0E4] flex flex-col border-b-8 border-[#2B2008]">
      <div class="relative z-10 border-b-4 border-[#2B2008] text-center py-4 px-6">
        <div class="text-xs font-bold uppercase tracking-[0.4em] text-[#2B2008]/60 mb-2" style="font-family: Georgia, serif;">
          Vol. CLXXIX · No. 62,041 · Est. 1851
        </div>
        <div class="text-5xl md:text-7xl font-black text-[#1A1000] uppercase leading-none" style="font-family: Georgia, serif;">
          The Daily Pixel
        </div>
        <div class="border-t border-b border-[#2B2008]/40 mt-3 py-2 text-xs font-bold tracking-[0.3em] uppercase text-[#2B2008]/70">
          "All the News That's Fit to Ship"
        </div>
      </div>

      <div class="relative z-10 border-b border-[#2B2008]/30 flex items-center justify-between px-6 py-2">
        <nav class="hidden md:flex gap-6 text-xs font-bold uppercase tracking-widest text-[#2B2008]/80">
          <a v-for="l in ['Design', 'Technology', 'Business', 'Culture', 'Opinion']" :key="l" href="#" class="hover:text-[#8B1A1A] transition-colors">{{ l }}</a>
        </nav>
        <div class="text-xs font-bold text-[#2B2008]/60 uppercase tracking-widest hidden md:block">
          Thursday, August 28, 2026
        </div>
        <button class="md:hidden text-[#2B2008]"><UIcon name="i-heroicons-bars-3" class="w-6 h-6" /></button>
      </div>

      <div class="relative z-10 flex-1 max-w-7xl mx-auto w-full px-6 py-8 grid grid-cols-1 md:grid-cols-12 gap-0 border-b border-[#2B2008]/20">
        <div class="md:col-span-7 pr-0 md:pr-8 border-r border-[#2B2008]/20 pb-8 md:pb-0">
          <div class="text-xs font-black uppercase tracking-[0.3em] text-[#8B1A1A] mb-3">Breaking: Digital Revolution</div>
          <h1 class="text-4xl md:text-6xl font-black text-[#1A1000] leading-[1.0] mb-4 uppercase" style="font-family: Georgia, serif;">
            Designers<br />Declare War<br />on Mediocrity;<br />Nation Rejoices
          </h1>
          <div class="border-t border-b border-[#2B2008]/20 py-3 mb-4">
            <p class="text-sm font-bold text-[#2B2008]/70 italic" style="font-family: Georgia, serif;">
              By our own correspondent · Pixel City Bureau
            </p>
          </div>
          <div class="columns-1 md:columns-2 gap-6 text-sm leading-relaxed text-[#2B2008]/90 mb-8" style="font-family: Georgia, serif;">
            <p class="mb-4">In a stunning turn of events that has left the creative world breathless, a coalition of leading digital designers announced yesterday their intention to eliminate bland, generic interfaces from the internet once and for all.</p>
            <p class="mb-4">The movement, which has already gathered considerable momentum in major cities, calls for an immediate end to the practice of using off-the-shelf templates and demands a return to bespoke, intentional design craftsmanship.</p>
          </div>
          <button class="bg-[#1A1000] text-[#F4F0E4] font-black uppercase tracking-widest text-xs px-8 py-4 hover:bg-[#8B1A1A] transition-colors">
            Read Full Story →
          </button>
        </div>
        <div class="md:col-span-5 pl-0 md:pl-8 space-y-6 pt-8 md:pt-0">
          <div v-for="item in [
            { tag: 'Markets', title: 'Good Design Stocks Surge 240% on Record Volume', sub: 'Investors flock to quality amid uncertainty' },
            { tag: 'Technology', title: 'New Algorithm Promises to End Comic Sans Forever', sub: 'Scientists celebrate cautiously' },
            { tag: 'Culture', title: 'Whitespace Declared Basic Human Right by International Design Council', sub: 'Margins rejoice across the globe' }
          ]" :key="item.title" class="border-b border-[#2B2008]/20 pb-6">
            <div class="text-xs font-black uppercase tracking-[0.3em] text-[#8B1A1A] mb-2">{{ item.tag }}</div>
            <h3 class="text-xl font-black text-[#1A1000] leading-tight mb-1 cursor-pointer hover:underline" style="font-family: Georgia, serif;">
              {{ item.title }}
            </h3>
            <p class="text-xs text-[#2B2008]/60 italic" style="font-family: Georgia, serif;">{{ item.sub }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 19. Flat Design / Metro -->
    <section v-else-if="variant === 19" class="relative min-h-screen bg-[#0078D7] flex flex-col border-b-8 border-[#005A9E]">
      <header class="flex items-center justify-between px-8 py-5">
        <div class="font-thin text-2xl text-white tracking-wider uppercase">microsoft</div>
        <nav class="hidden md:flex gap-8 text-sm font-semibold text-white/80 uppercase tracking-widest">
          <a v-for="l in ['Products', 'Devices', 'Cloud', 'Business']" :key="l" href="#" class="hover:text-white transition-colors">{{ l }}</a>
        </nav>
        <button class="hidden md:block text-sm font-semibold text-white uppercase tracking-widest border-b border-white/40 hover:border-white transition-colors pb-0.5">
          Sign in →
        </button>
        <button class="md:hidden text-white"><UIcon name="i-heroicons-bars-3" class="w-6 h-6" /></button>
      </header>

      <div class="flex-1 flex flex-col lg:flex-row">
        <div class="flex-1 flex flex-col justify-center px-8 md:px-16 py-16">
          <h1 class="text-5xl md:text-7xl font-thin text-white leading-tight mb-6">
            Do more.<br />
            <span class="font-semibold">Be more.</span>
          </h1>
          <p class="text-white/80 text-lg mb-10 max-w-md leading-relaxed font-light">
            The tools and technology you need to achieve more every day. Reimagined for the modern world.
          </p>
          <div class="flex flex-wrap gap-0">
            <button class="bg-white text-[#0078D7] font-semibold uppercase tracking-wider text-sm px-8 py-4 hover:bg-[#E0F0FF] transition-colors">
              Get Started
            </button>
            <button class="bg-[#005A9E] text-white font-semibold uppercase tracking-wider text-sm px-8 py-4 hover:bg-[#004880] transition-colors">
              Learn More
            </button>
          </div>
        </div>
        <div class="flex-1 flex items-center justify-center p-8 md:p-12">
          <div class="grid grid-cols-4 gap-3 max-w-sm w-full">
            <div v-for="item in [
              { bg: '#00B294', label: 'Mail', cols: 'col-span-2', rows: 'row-span-2', icon: '✉' },
              { bg: '#FF8C00', label: 'Photos', cols: 'col-span-2', rows: '', icon: '📷' },
              { bg: '#E81123', label: 'Maps', cols: 'col-span-2', rows: '', icon: '📍' },
              { bg: '#5B6ABF', label: 'Calendar', cols: 'col-span-1', rows: '', icon: '📅' },
              { bg: '#00B4C8', label: 'Music', cols: 'col-span-1', rows: '', icon: '♪' },
              { bg: '#107C10', label: 'Xbox', cols: 'col-span-2', rows: '', icon: '🎮' },
              { bg: '#7719AA', label: 'Store', cols: 'col-span-2', rows: '', icon: '🛍' }
            ]" :key="item.label" :class="[item.cols, item.rows, 'flex flex-col justify-end p-3 cursor-pointer hover:brightness-110 transition-all min-h-[80px]']"
              :style="{ backgroundColor: item.bg }">
              <div class="text-2xl mb-1 text-white/90">{{ item.icon }}</div>
              <div class="text-xs font-semibold text-white uppercase tracking-wide">{{ item.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 20. Indie / Handcrafted -->
    <section v-else-if="variant === 20" class="relative min-h-screen bg-[#FEFAF4] flex flex-col border-b-8 border-[#D4C5A9]">
      <header class="relative z-10 flex items-center justify-between px-8 py-7 border-b border-[#D4C5A9]/60">
        <div class="font-black text-2xl text-[#2C1810]" style="font-family: Georgia, serif; letter-spacing: -0.02em;">
          made with ♥
        </div>
        <nav class="hidden md:flex gap-8 text-sm text-[#6B4F38] font-medium" style="font-family: Georgia, serif;">
          <a v-for="l in ['my work', 'about me', 'the process', 'get in touch']" :key="l" href="#" class="hover:text-[#2C1810] transition-colors border-b border-transparent hover:border-[#2C1810]">{{ l }}</a>
        </nav>
        <button class="hidden md:block bg-[#2C1810] text-[#FEFAF4] font-bold text-sm px-6 py-2.5 rounded-full hover:bg-[#6B4F38] transition-colors" style="font-family: Georgia, serif;">
          hire me →
        </button>
        <button class="md:hidden text-[#2C1810]"><UIcon name="i-heroicons-bars-3" class="w-6 h-6" /></button>
      </header>

      <div class="relative z-10 flex-1 flex flex-col lg:flex-row gap-0 max-w-6xl mx-auto w-full px-8 py-12 items-center">
        <div class="flex-1 flex flex-col">
          <div class="inline-block bg-[#E8C84A] px-4 py-2 text-sm font-black text-[#2C1810] w-fit mb-8"
            style="transform: rotate(-2deg); font-family: Georgia, serif;">
            ✦ freelance designer &amp; maker
          </div>
          <h1 class="text-5xl md:text-7xl font-black text-[#2C1810] leading-[1.0] mb-8" style="font-family: Georgia, serif;">
            Hello, I'm<br />
            <em class="text-[#C05A2A]">Sofia.</em><br />
            I make things<br />
            that matter.
          </h1>
          <p class="text-[#7A5A3A] text-lg leading-relaxed max-w-md mb-10" style="font-family: Georgia, serif;">
            Brand identity, illustration, and web design—crafted with intention and a lot of coffee. I care deeply about the work I put into the world.
          </p>
          <div class="flex flex-wrap items-center gap-4">
            <button class="bg-[#C05A2A] text-white font-black px-8 py-4 rounded-full hover:bg-[#A04820] transition-all hover:scale-105" style="font-family: Georgia, serif;">
              See my work ↓
            </button>
            <div class="flex items-center gap-2 text-[#7A5A3A] text-sm font-medium">
              <span class="text-[#C05A2A] text-base">☕</span>
              <span style="font-family: Georgia, serif;">currently open for projects</span>
            </div>
          </div>
        </div>
        <div class="flex-shrink-0 flex flex-col items-center gap-4 pt-8 lg:pt-0">
          <div class="w-56 h-72 md:w-64 md:h-80 rounded-2xl overflow-hidden border-4 border-[#D4C5A9]"
            style="background: linear-gradient(160deg, #E8D8C4, #C8A882); transform: rotate(2deg); box-shadow: 0 20px 60px rgba(44,24,16,0.2);">
            <div class="w-full h-full flex flex-col items-center justify-end pb-8 gap-2">
              <div class="w-20 h-20 rounded-full bg-[#C05A2A]/20 border-2 border-[#D4C5A9]"></div>
              <div class="w-32 h-2 rounded bg-[#C05A2A]/20"></div>
              <div class="w-24 h-2 rounded bg-[#C05A2A]/10"></div>
            </div>
          </div>
          <div class="bg-white border border-[#D4C5A9] px-4 py-2 rounded-lg shadow-sm text-xs font-bold text-[#7A5A3A]"
            style="font-family: Georgia, serif; transform: rotate(-1deg);">
            📍 Kyiv, Ukraine
          </div>
        </div>
      </div>
    </section>

  </div>
</template>
