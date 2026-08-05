<template>
  <section id="stack" class="py-24 bg-slate-950 overflow-hidden">
    <div class="container mx-auto px-4 mb-16 text-center">
      <h2 class="text-4xl font-bold text-white mb-4">Ecosistema Tecnológico</h2>
      <p class="text-slate-400 max-w-2xl mx-auto">
        Stack profesional de ingeniería, desarrollo y diseño para soluciones de alto impacto.
      </p>
    </div>

    <div class="mask-marquee relative flex flex-col gap-6 w-full py-4">
      
      <div class="flex w-max animate-marquee-left hover:[animation-play-state:paused] gap-4 px-2">
        <div v-for="n in 2" :key="'f1-'+n" class="flex gap-4 items-center">
          <div v-for="skill in row1" :key="skill.name" 
            class="flex size-16 md:size-24 items-center justify-center rounded-2xl border border-white/10 bg-white/[3%] p-4 transition-all duration-300 hover:scale-110 hover:border-blue-500/50 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] group relative">
            
            <Icon :name="skill.icon" class="text-3xl md:text-5xl transition-all" />
            
            <span class="absolute -top-10 scale-0 transition-all rounded bg-slate-900/90 backdrop-blur-sm border border-white/10 px-2 py-1 text-xs text-white group-hover:scale-100 shadow-xl pointer-events-none z-10 whitespace-nowrap font-medium">
              {{ skill.name }}
            </span>
          </div>
        </div>
      </div>

      <div class="flex w-max animate-marquee-right hover:[animation-play-state:paused] gap-4 px-2">
        <div v-for="n in 2" :key="'f2-'+n" class="flex gap-4 items-center">
          <div v-for="skill in row2" :key="skill.name" 
            class="flex size-16 md:size-24 items-center justify-center rounded-2xl border border-white/10 bg-white/[3%] p-4 transition-all duration-300 hover:scale-110 hover:border-purple-500/50 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] group relative">
            
            <img v-if="skill.isLocal" 
              :src="skill.icon" 
              :alt="skill.name" 
              class="h-10 w-10 md:h-14 md:w-14 object-contain opacity-80 group-hover:opacity-100 transition-opacity" 
            />
            
            <Icon v-else :name="skill.icon" class="text-3xl md:text-5xl transition-all" />

            <span class="absolute -top-10 scale-0 transition-all rounded bg-slate-900/90 backdrop-blur-sm border border-white/10 px-2 py-1 text-xs text-white group-hover:scale-100 shadow-xl pointer-events-none z-10 whitespace-nowrap font-medium">
              {{ skill.name }}
            </span>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
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

const row2 = [
  { name: 'Gemini', icon: 'logos:google-gemini' },
  { name: 'Claude', icon: 'logos:claude' },
  { name: 'Copilot', icon: 'simple-icons:microsoftcopilot' },
  { name: 'Java Certification TecMilenio', icon: '/img/certificacion-java.png', isLocal: true },
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

.animate-marquee-left {
  animation: marquee 40s linear infinite;
}

.animate-marquee-right {
  animation: marquee 40s linear infinite reverse;
}
</style>