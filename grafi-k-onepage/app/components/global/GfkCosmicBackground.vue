<template>
  <div class="relative overflow-hidden bg-slate-950 py-24">
    <!-- Capa 0: El gradiente animado (Fondo profundo) -->
    <div class="absolute inset-0 z-0">
      <div class="cosmic-glow"></div>
    </div>

    <!-- Capa 1: El efecto Matrix (Aquí es donde sucede la magia) -->
    <!-- Se posiciona sobre el color pero bajo el contenido -->
    <GfkQuantumGrid />

    <!-- Capa 2: Contenido de Servicios (Slot) -->
    <div class="relative z-10 max-w-7xl mx-auto px-6">
      <slot />
    </div>
  </div>
</template>

