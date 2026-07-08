<template>
  <!-- Usamos el componente envolvente que tiene el gradiente y los caracteres -->
  <GfkCosmicBackground id="servicios">  
  
    <section class="py-24 px-4 relative">
      <div class="max-w-6xl mx-auto">
        
        <!-- Encabezado de Sección -->
        <div class="text-center mb-16 relative z-10">
          <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tighter">
            Servicios <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Digitales</span>
          </h2>
          <p class="text-slate-300 max-w-2xl mx-auto text-lg">
            Soluciones de ingeniería para empresas que buscan el siguiente nivel, optimizadas para el mercado High Ticket.
          </p>
        </div>

        <!-- Grid de Servicios con Glassmorphism -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          
          <!-- Card 1: Desarrollo Web -->
          <div class="group bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-blue-500/50 transition-all duration-500 animate-fade-up animate-delay-100">
            <div class="w-14 h-14 bg-blue-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              <Icon name="lucide:layout-template" class="text-3xl text-blue-500" />
            </div>
            <h3 class="text-xl font-bold text-white mb-3">Desarrollo Web</h3>
            <p class="text-slate-400 text-sm leading-relaxed">
              One Pages y plataformas corporativas en Nuxt.js, diseñadas para cargar en milisegundos y convertir visitantes en clientes.
            </p>
          </div>

          <!-- Card 2: IA & Automatización -->
          <div class="group bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-blue-400/50 transition-all duration-500 animate-fade-up animate-delay-[300ms]">
            <div class="w-14 h-14 bg-blue-400/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              <Icon name="lucide:bot" class="text-3xl text-blue-400" />
            </div>
            <h3 class="text-xl font-bold text-white mb-3">IA & Automatización</h3>
            <p class="text-slate-400 text-sm leading-relaxed">
              Agentes inteligentes y chatbots personalizados que gestionan tus campañas y atención al cliente 24/7 sin errores.
            </p>
          </div>

          <!-- Card 3: Infraestructura Cloud -->
          <div class="group bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-indigo-500/50 transition-all duration-500 animate-fade-up animate-delay-[500ms]">
            <div class="w-14 h-14 bg-indigo-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              <Icon name="lucide:cloud-cog" class="text-3xl text-indigo-500" />
            </div>
            <h3 class="text-xl font-bold text-white mb-3">Infraestructura Cloud</h3>
            <p class="text-slate-400 text-sm leading-relaxed">
              Configuración de servidores dedicados y nubes privadas seguras para el manejo masivo de datos (GFK-Lab).
            </p>
          </div>

        </div>
      </div>
    </section>
  </GfkCosmicBackground>
</template>
