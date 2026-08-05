<template>
  <section id="inicio" class="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
    <GfkMouseTrail />
    <div class="relative z-10">
    <div class="inline-block px-3 py-1 mb-6 text-sm font-medium text-blue-400 bg-blue-900/30 rounded-full border border-blue-500/30">
      Desarrollo Web de Próxima Generación
    </div>
    
    <!-- Agregamos el cursor al final del gradiente -->
    <h1 class="text-6xl md:text-7xl font-extrabold text-white mb-6 tracking-tighter">
      Grafi-k 
      <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
        Digital Web<span class="terminal-cursor"></span>
      </span>
    </h1>

    <p class="max-w-2xl text-lg md:text-xl text-slate-400 mb-10">
      Elevamos tu presencia digital con arquitectura Nuxt.js. Soluciones rápidas, seguras y escalables para proyectos como <span class="text-white font-semibold">Eps Vial</span>.
    </p>
    
    <div class="flex gap-4 justify-center">
      <NuxtLink 
        to="/cotizar" 
        class="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold transition-all transform hover:scale-105 shadow-lg shadow-blue-900/40">
        Empezar Proyecto
      </NuxtLink>
      <a 
        href="#portafolio" 
        class="border border-slate-700 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-bold transition-all">
        Ver Portafolio
      </a>
    </div>
    </div>
  </section>
</template>

