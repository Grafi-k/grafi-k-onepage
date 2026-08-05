<template>
  <section id="soluciones" class="py-24 bg-slate-950 overflow-hidden">
    <div class="max-w-5xl mx-auto px-6">
      
      <div class="text-center mb-12">
        <h2 class="text-indigo-400 font-mono text-xs tracking-[0.3em] uppercase mb-2">// Stack Comparison</h2>
        <h3 class="text-3xl md:text-4xl font-bold text-white tracking-tighter">Diferentes retos, <span class="text-blue-400">soluciones a medida</span></h3>
      </div>

      <div class="flex justify-center mb-12">
        <div class="inline-flex p-1 bg-slate-900 border border-white/10 rounded-2xl backdrop-blur-xl">
          <button 
            @click="activeTab = 'wp'" 
            :class="activeTab === 'wp' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'"
            class="px-6 py-2 rounded-xl text-sm font-bold transition-all duration-300"
          >
            WordPress
          </button>
          <button 
            @click="activeTab = 'html'" 
            :class="activeTab === 'html' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'"
            class="px-6 py-2 rounded-xl text-sm font-bold transition-all duration-300"
          >
            Pure PHP/HTML
          </button>
          <button 
            @click="activeTab = 'nuxt'" 
            :class="activeTab === 'nuxt' ? 'bg-emerald-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'"
            class="px-6 py-2 rounded-xl text-sm font-bold transition-all duration-300"
          >
            Nuxt.js
          </button>
        </div>
      </div>

      <div class="relative min-h-[450px]">
        <transition-group name="fade-slide">
          
          <div v-if="activeTab === 'wp'" key="wp" class="grid md:grid-cols-2 gap-12 items-center">
            <div class="space-y-6">
              <div class="size-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                <Icon name="logos:wordpress-icon" class="text-2xl" />
              </div>
              <h4 class="text-4xl font-black text-white italic tracking-tighter">BRUGOSA</h4>
              <p class="text-slate-400 leading-relaxed">
                Desarrollo basado en CMS para una gestión de contenido dinámica y SEO amigable. Ideal para sitios corporativos que requieren actualizaciones constantes.
              </p>
              <ul class="space-y-3 font-mono text-xs text-indigo-300">
                <li class="flex items-center gap-2"><Icon name="lucide:check-circle" class="size-4" /> SEO Optimization Ready</li>
                <li class="flex items-center gap-2"><Icon name="lucide:check-circle" class="size-4" /> Custom Theme Architecture</li>
              </ul>
              <a href="#" class="inline-block px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-indigo-400 transition-colors uppercase text-xs tracking-widest">Visitar Sitio</a>
            </div>
            <div class="relative group">
              <div class="absolute inset-0 bg-indigo-500/20 blur-3xl rounded-full opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <img src="https://via.placeholder.com/600x400/1e1b4b/ffffff?text=Brugosa+Preview" alt="Brugosa" class="relative rounded-2xl border border-white/10 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]" />
            </div>
          </div>

          <div v-if="activeTab === 'html'" key="html" class="grid md:grid-cols-2 gap-12 items-center">
            <div class="space-y-6">
              <div class="size-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                <Icon name="logos:php" class="text-3xl" />
              </div>
              <h4 class="text-4xl font-black text-white italic tracking-tighter uppercase">EnkueStar</h4>
              <p class="text-slate-400 leading-relaxed">
                Código puro para un rendimiento extremo. Estructura ligera en PHP y HTML que garantiza velocidad de carga instantánea y control total de la lógica.
              </p>
              <ul class="space-y-3 font-mono text-xs text-blue-300">
                <li class="flex items-center gap-2"><Icon name="lucide:zap" class="size-4" /> Zero Bloatware Performance</li>
                <li class="flex items-center gap-2"><Icon name="lucide:zap" class="size-4" /> Custom Data Handling</li>
              </ul>
              <a href="#" class="inline-block px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-blue-400 transition-colors uppercase text-xs tracking-widest">Abrir App</a>
            </div>
            <div class="relative group">
              <div class="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <img src="https://via.placeholder.com/600x400/0f172a/ffffff?text=Enkuestar+System" alt="Enkuestar" class="relative rounded-2xl border border-white/10 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]" />
            </div>
          </div>

          <div v-if="activeTab === 'nuxt'" key="nuxt" class="grid md:grid-cols-2 gap-12 items-center">
            <div class="space-y-6">
              <div class="size-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                <Icon name="logos:nuxt-icon" class="text-2xl" />
              </div>
              <h4 class="text-4xl font-black text-white italic tracking-tighter uppercase">EPS VIAL</h4>
              <p class="text-slate-400 leading-relaxed">
                La vanguardia del desarrollo web. Aplicación universal con Nuxt.js que ofrece una experiencia de usuario fluida, SSR y la potencia de Vue 3.
              </p>
              <ul class="space-y-3 font-mono text-xs text-emerald-300">
                <li class="flex items-center gap-2"><Icon name="lucide:layers" class="size-4" /> Server Side Rendering</li>
                <li class="flex items-center gap-2"><Icon name="lucide:layers" class="size-4" /> Reactive User Interface</li>
              </ul>
              <button disabled class="inline-block px-8 py-3 bg-slate-800 text-slate-500 font-bold rounded-full uppercase text-xs tracking-widest cursor-not-allowed">Próximamente</button>
            </div>
            <div class="relative group">
              <div class="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-full opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div class="relative aspect-video rounded-2xl border border-white/5 bg-slate-900 flex items-center justify-center overflow-hidden">
                <Icon name="lucide:code-2" class="text-6xl text-slate-800 animate-pulse" />
                <span class="absolute bottom-4 text-[10px] text-slate-600 font-mono italic">Under Development_</span>
              </div>
            </div>
          </div>

        </transition-group>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const activeTab = ref('html') // Por defecto EnkueStar para presumir
</script>

<style scoped>
.fade-slide-enter-active, .fade-slide-leave-active {
  transition: all 0.5s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(30px);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(-30px);
  position: absolute;
}
</style>