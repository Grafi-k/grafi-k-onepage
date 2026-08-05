<template>
  <main class="bg-slate-950 min-h-screen selection:bg-blue-500/30 selection:text-blue-200">
    <Hero />
    <Services />
    <Skills /> 
    <TeckStack />
    <Projects />
    <TechShowcase />
    <Contact />
    <Footer />
  </main>
</template>

<style>
/* Un pequeño extra: Suavizar el scroll de toda la página */
html {
  scroll-behavior: smooth;
}

/* Personalizar la barra de desplazamiento para que sea dark */
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: #020617; 
}
::-webkit-scrollbar-thumb {
  background: #1e293b;
  border-radius: 10px;
  border: 2px solid #020617;
}
::-webkit-scrollbar-thumb:hover {
  background: #3b82f6;
}

/* Skills logos */
.mask-marquee {
  mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

/* Fila 1: Hacia la izquierda (Normal) */
.animate-marquee-left {
  animation: marquee 50s linear infinite;
}

/* Fila 2: Hacia la derecha (Reverse) */
.animate-marquee-right {
  animation: marquee 50s linear infinite reverse;
}

/* El estilo que hace que el Hero se sienta vivo */
.terminal-cursor {
  display: inline-block;
  width: 12px;
  height: 0.7em;
  background-color: #60a5fa; /* Azul claro para que resalte en el gradiente */
  margin-left: 8px;
  vertical-align: middle;
  animation: blink 1.2s step-end infinite;
  box-shadow: 0 0 15px rgba(96, 165, 250, 0.8);
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

/* Fondo Cósmico Unificado (Oro Thor, Púrpura Galáctico, Azul Espacial) */
.cosmic-glow {
  width: 100%;
  height: 100%;
  background: linear-gradient(
    125deg,
    #020617 0%,
    #1e1b4b 25%,
    #581c87 50%,
    #b45309 75%,
    #020617 100%
  );
  background-size: 400% 400%;
  animation: bifrost-flow 18s ease infinite;
  filter: blur(70px);
  opacity: 0.38;
}

@keyframes bifrost-flow {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
</style>