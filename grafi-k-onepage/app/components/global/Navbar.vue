<template>
  <div class="fixed top-6 left-0 w-full z-50 px-4">
    <nav class="max-w-5xl mx-auto bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden">
      <div class="px-6 h-16 flex items-center justify-between">
        
        <div class="flex items-center gap-2">
          <!-- Logo: ahora usa to="/#inicio" -->
          <NuxtLink to="/#inicio" class="flex items-center gap-2 cursor-pointer">
            <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20">
              <Icon name="lucide:terminal" class="text-white text-xl" />
            </div>
            <span class="text-lg font-bold text-white tracking-tighter">
              Grafi-k <span class="text-blue-500">Digital Web</span>
            </span>
          </NuxtLink>
        </div>

        <div class="hidden md:flex items-center gap-6 text-sm font-medium">
          <!-- Links: todos llevan el prefijo /# -->
          <NuxtLink to="/#servicios" class="text-slate-300 hover:text-white transition-colors">Servicios</NuxtLink>
          <NuxtLink to="/#stack" class="text-slate-300 hover:text-white transition-colors">Stack</NuxtLink>
          <NuxtLink to="/#portafolio" class="text-slate-300 hover:text-white transition-colors">Portafolio</NuxtLink>
          <NuxtLink to="/#soluciones" class="text-slate-300 hover:text-white transition-colors">Soluciones</NuxtLink>
          
          <NuxtLink to="/#contacto" 
            class="bg-blue-600/90 hover:bg-blue-500 text-white px-5 py-2 rounded-2xl font-bold transition-all flex items-center gap-2 shadow-lg shadow-blue-900/40 cursor-pointer">
            <Icon name="lucide:whatsapp" class="text-lg" />
            <span>Contacto</span>
          </NuxtLink>
        </div>

      </div>
    </nav>
  </div>
</template>