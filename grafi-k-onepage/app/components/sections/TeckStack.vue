<template>
  <section class="py-24 bg-slate-950 relative overflow-hidden">
    <div class="absolute inset-0 opacity-[0.03]" 
         style="background-image: radial-gradient(#fff 1px, transparent 1px); background-size: 40px 40px;">
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
        <div class="max-w-2xl">
          <h2 class="text-indigo-400 font-mono mb-2 tracking-widest uppercase text-sm font-bold">// Deploy & Infrastructure</h2>
          <h3 class="text-4xl md:text-5xl font-bold text-white tracking-tighter">
            Especialista en entornos <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Cloud & Bare Metal</span>
          </h3>
        </div>
        <div class="hidden md:block">
           <div class="px-4 py-2 border border-white/10 rounded-full bg-white/5 text-slate-500 font-mono text-xs">
             Status: <span class="text-emerald-500">All Systems Operational</span>
           </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div class="p-6 rounded-3xl border border-white/5 bg-slate-900/40 backdrop-blur-sm hover:bg-slate-900/80 transition-all group">
          <div class="size-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-6 border border-indigo-500/20 group-hover:bg-indigo-500/20">
            <Icon name="lucide:server-cog" class="text-2xl text-indigo-400" />
          </div>
          <h4 class="text-white font-bold text-lg mb-2">Gestión de VPS</h4>
          <p class="text-slate-500 text-sm leading-relaxed">Configuración experta de servidores privados (Ubuntu/Debian) para máxima velocidad y control total del entorno.</p>
        </div>

        <div class="p-6 rounded-3xl border border-white/5 bg-slate-900/40 backdrop-blur-sm hover:bg-slate-900/80 transition-all group">
          <div class="size-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6 border border-cyan-500/20 group-hover:bg-cyan-500/20">
            <Icon name="logos:docker-icon" class="text-2xl" />
          </div>
          <h4 class="text-white font-bold text-lg mb-2">Dockerización</h4>
          <p class="text-slate-500 text-sm leading-relaxed">Aislamiento de aplicaciones mediante contenedores, asegurando que el software corra idéntico en desarrollo y producción.</p>
        </div>

        <div class="p-6 rounded-3xl border border-white/5 bg-slate-900/40 backdrop-blur-sm hover:bg-slate-900/80 transition-all group">
          <div class="size-12 rounded-2xl bg-amber-500/10 flex items-center justify-center mb-6 border border-amber-500/20 group-hover:bg-amber-500/20">
            <Icon name="lucide:database" class="text-2xl text-amber-400" />
          </div>
          <h4 class="text-white font-bold text-lg mb-2">Instalaciones DB</h4>
          <p class="text-slate-500 text-sm leading-relaxed">Montaje y optimización de MySQL, MariaDB y SQL Server directamente en el servidor para un manejo masivo de datos.</p>
        </div>

        <div class="p-6 rounded-3xl border border-white/5 bg-slate-900/40 backdrop-blur-sm hover:bg-slate-900/80 transition-all group">
          <div class="size-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6 border border-emerald-500/20 group-hover:bg-emerald-500/20">
            <Icon name="lucide:shield-check" class="text-2xl text-emerald-400" />
          </div>
          <h4 class="text-white font-bold text-lg mb-2">Seguridad & Red</h4>
          <p class="text-slate-500 text-sm leading-relaxed">Implementación de túneles Cloudflare y certificados SSL para blindar la conexión entre el servidor y el usuario final.</p>
        </div>

      </div>

      <div class="mt-8 rounded-2xl bg-slate-950 border border-white/10 p-4 font-mono text-[10px] md:text-xs text-slate-500 flex gap-4 overflow-hidden">
        <div class="flex gap-2 shrink-0">
          <div class="size-2 rounded-full bg-red-500/50"></div>
          <div class="size-2 rounded-full bg-amber-500/50"></div>
          <div class="size-2 rounded-full bg-green-500/50"></div>
        </div>
        <div class="animate-pulse">
          <span class="text-indigo-400">root@gfk-server:~$</span> npx nuxt build --standalone-infrastructure
        </div>
        <div class="ml-auto opacity-50">UTF-8 // PHP-FPM // NGINX</div>
      </div>
    </div>
  </section>
</template>