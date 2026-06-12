<template>
  <section class="py-24 bg-slate-950 overflow-hidden">
    <div class="container mx-auto px-4 mb-16 text-center">
      <h2 class="text-4xl font-bold text-white mb-4 animate-fade-up">Ecosistema Tecnológico</h2>
      <p class="text-slate-400 max-w-2xl mx-auto animate-fade-up animate-delay-200">
        Stack profesional de ingeniería, desarrollo y diseño para soluciones de alto impacto.
      </p>
    </div>

    <div class="mask-marquee relative flex flex-col gap-6 w-full py-4">
      
     <div class="flex w-max animate-marquee-left hover:[animation-play-state:paused] gap-4 px-2">
        <div v-for="n in 2" :key="'f1-'+n" class="flex gap-4 items-center">
          <div v-for="skill in row1" :key="skill.name" 
            class="flex size-16 md:size-24 items-center justify-center rounded-2xl border border-white/10 bg-white/[3%] p-4 transition-all duration-300 hover:scale-110 hover:border-blue-500/50 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] group">
            <Icon :name="skill.icon" class="text-3xl md:text-5xl transition-all" />
          </div>
        </div>
      </div>

      <div class="flex w-max animate-marquee-right hover:[animation-play-state:paused] gap-4 px-2">
        <div v-for="n in 2" :key="'f2-'+n" class="flex gap-4 items-center">
          <div v-for="skill in row2" :key="skill.name" 
            class="flex size-16 md:size-24 items-center justify-center rounded-2xl border border-white/10 bg-white/[3%] p-4 transition-all duration-300 hover:scale-110 hover:border-purple-500/50 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] group">
            <Icon :name="skill.icon" class="text-3xl md:text-5xl transition-all" />
          </div>

          <div class="flex h-16 md:h-24 items-center px-6 rounded-2xl border border-white/10 bg-white/[3%] hover:border-green-500/50 transition-all shadow-inner">
             <span class="text-white text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-center leading-tight">
               TecMilenio<br/>Certified
             </span>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
// Fila 1: El "Fierro" (Dev & Infra)
const row1 = [
  { name: 'Nuxt', icon: 'logos:nuxt-icon' },
  { name: 'Laravel', icon: 'logos:laravel' },
  { name: 'Java', icon: 'logos:java' },
  { name: 'Spring', icon: 'logos:spring-icon' },
  { name: 'PHP', icon: 'logos:php' },
  { name: 'Docker', icon: 'logos:docker-icon' },
  { name: 'AWS', icon: 'logos:aws' },
  { name: 'GitHub', icon: 'logos:github-icon' },
  { name: 'JS', icon: 'logos:javascript' },
  { name: 'Hostinger', icon: 'simple-icons:hostinger' }
]

// Fila 2: El "Cerebro" y la "Estética" (IA, Design & Management)
const row2 = [
  { name: 'Gemini', icon: 'logos:google-gemini' },
  { name: 'Claude', icon: 'logos:claude' },
  { name: 'Copilot', icon: 'simple-icons:microsoftcopilot' },
  { name: 'Photoshop', icon: 'logos:adobe-photoshop' },
  { name: 'Illustrator', icon: 'logos:adobe-illustrator' },
  { name: 'Premiere', icon: 'logos:adobe-premiere' },
  { name: 'Trello', icon: 'logos:trello' },
  { name: 'Jira', icon: 'logos:jira' },
  { name: 'Word', icon: 'logos:microsoft-word-icon' },
  { name: 'WordPress', icon: 'logos:wordpress-icon' }
]
</script>

<style scoped>
.mask-marquee {
  mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.animate-marquee-slow {
  animation: marquee 50s linear infinite;
}
</style>