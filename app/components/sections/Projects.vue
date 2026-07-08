<template>
  <section class="py-24 bg-slate-950">
    <div class="max-w-5xl mx-auto px-6">
      
      <div class="mb-16 text-center">
        <h2 class="text-indigo-400 font-mono mb-2 tracking-widest uppercase text-sm font-bold">// Portafolio de Soluciones</h2>
        <h3 class="text-4xl font-bold text-white tracking-tighter">
          Proyectos de <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Alto Impacto</span>
        </h3>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-5 md:grid-rows-3 gap-2 h-auto md:h-[750px]">
        
        <div class="md:col-span-2 md:row-span-3 group relative overflow-hidden rounded-[3rem] border border-white/20 bg-slate-900 transition-all hover:border-blue-500/50 shadow-2xl flex flex-col">
          <div class="absolute inset-0 bg-gradient-to-b from-blue-600/10 via-transparent to-slate-950/90 opacity-50"></div>
          
          <div class="relative p-8 md:p-10 h-full flex flex-col items-center text-center">
            <div class="w-24 h-5 bg-slate-950 rounded-b-2xl mb-8 border-x border-b border-white/10 hidden md:block"></div>

            <div class="mb-6">
               <span class="iconify i-logos:laravel text-5xl mb-4"></span>
               <div class="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-2 w-fit mx-auto">En Producción</div>
               <h4 class="text-4xl font-black text-white tracking-tighter uppercase">EnkueStar</h4>
            </div>

            <p class="text-slate-400 text-sm leading-relaxed max-w-xs mb-8">
              Plataforma digital de encuestas diseñada para reemplazar el papel. Control total de datos en tiempo real con arquitectura Laravel + Flutter.
            </p>

            <div class="mt-auto w-full grid grid-cols-2 gap-3 pb-4">
              <div class="bg-white/5 p-4 rounded-2xl border border-white/5">
                <span class="block text-2xl font-bold text-white">97%</span>
                <span class="text-[10px] text-slate-500 uppercase tracking-tight">Eficiencia</span>
              </div>
              <div class="bg-white/5 p-4 rounded-2xl border border-white/5 flex flex-col justify-center">
                <span class="block text-lg font-bold text-white leading-tight">Instancia</span>
                <span class="text-[10px] text-slate-500 uppercase tracking-tight">Por Cliente</span>
              </div>
            </div>
          </div>
        </div>

        <div class="md:col-span-3 md:row-span-1 group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 p-6 flex flex-col md:flex-row items-center gap-6 hover:border-emerald-500/50 transition-all">
          <div class="flex-1 text-center md:text-left">
            <h4 class="text-xl font-bold text-white mb-1">Gfk-Campaign Bot</h4>
            <p class="text-slate-400 text-sm">
              Robot inteligente que responde campañas automáticamente integrando Gemini AI y flujos de trabajo personalizados.
            </p>
          </div>
          <div class="shrink-0 size-20 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
            <span class="iconify i-lucide:bot text-4xl text-emerald-400 animate-bounce"></span>
          </div>
        </div>

        <div class="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 p-8 flex flex-col hover:border-orange-500/50 transition-all">
          <span class="iconify i-logos:flutter text-3xl mb-4"></span>
          <h4 class="text-lg font-bold text-white">Retro Games</h4>
          <p class="text-slate-500 text-sm mt-2 mb-4">
            APK nativa desarrollada en Flutter para amantes del gaming clásico.
          </p>
          <div class="mt-auto text-[10px] font-mono text-orange-400 uppercase tracking-widest bg-orange-500/5 w-fit px-2 py-1 rounded">
            v1.0.2 - Stable
          </div>
        </div>

        <div class="md:col-span-1 md:row-span-2 group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 p-6 flex flex-col hover:border-purple-500/50 transition-all">
          <span class="iconify i-lucide:cloud text-3xl text-purple-400 mb-4"></span>
          <h4 class="text-lg font-bold text-white leading-tight">Private Cloud</h4>
          <p class="text-slate-500 text-xs mt-2 mb-4">
            Infraestructura propia para almacenamiento y despliegue de microservicios.
          </p>
          <div class="mt-auto flex items-center gap-2">
            <div class="size-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]"></div>
            <span class="text-[10px] text-slate-400 font-mono italic uppercase">Online</span>
          </div>
        </div>

      </div> </div>
  </section>
</template>