<script setup lang="ts">
import { ref, reactive, computed } from 'vue';

const step = ref(1);
const totalSteps = 4;
const enviando = ref(false);

const formData = reactive({
  tipo: '',
  presupuesto: 'growth',
  brief: '',
  urgencia: '',
  nombre: '',
  email: '',
  whatsapp: ''
});

const paquetes = [
  { id: 'starter', nombre: 'Starter', rango: '$15k – $30k', desc: 'One page o landing premium en Nuxt.js' },
  { id: 'growth', nombre: 'Growth', rango: '$30k – $60k', desc: 'Web completa + integraciones o IA básica', recomendado: true },
  { id: 'enterprise', nombre: 'Enterprise', rango: '$60k – $150k+', desc: 'Apps, automatización y cloud a medida' },
  { id: 'asesoria', nombre: 'No estoy seguro', rango: 'Asesoría', desc: 'Quiero que me orienten según mi proyecto' }
];

// Validación robusta para habilitar el botón
const puedeAvanzar = computed(() => {
  if (step.value === 1) return formData.tipo !== '';
  if (step.value === 2) return formData.presupuesto !== '';
  if (step.value === 3) return formData.brief.trim().length >= 10 && formData.urgencia !== '';
  if (step.value === 4) {
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim());
    const phoneValido = formData.whatsapp.trim().length >= 8;
    return formData.nombre.trim() !== '' && emailValido && phoneValido;
  }
  return true;
});

const siguiente = () => {
  if (step.value < totalSteps) {
    step.value++;
  } else {
    enviarDatos();
  }
};

const enviarDatos = async () => {
  if (!puedeAvanzar.value) return;
  enviando.value = true;
  try {
    // Aquí conectarás tu endpoint /api/cotizar hacia HubSpot
    console.log('Lead calificado para HubSpot:', formData);
    
    // Simulación de envío exitoso
    await new Promise(resolve => setTimeout(resolve, 1000));
    step.value = totalSteps + 1;
  } catch (e) {
    alert('Hubo un problema enviando tu cotización, intenta de nuevo.');
  } finally {
    enviando.value = false;
  }
};
</script>

<template>
  <section class="min-h-screen bg-slate-950 py-12 px-4 flex items-center justify-center">
    <div class="max-w-2xl w-full">
      <div class="text-center mb-10">
        <h2 class="text-3xl font-bold text-white mb-2">Configura tu proyecto</h2>
        <p v-if="step <= totalSteps" class="text-slate-400">Paso {{ step }} de {{ totalSteps }}</p>
      </div>

      <div class="bg-slate-900/50 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl">

        <div v-if="step <= totalSteps" class="mb-8 h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
          <div class="h-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-500"
               :style="{ width: (step / totalSteps) * 100 + '%' }"></div>
        </div>

        <transition name="fade" mode="out-in">
          <div :key="step" class="space-y-6">

            <!-- Paso 1: Servicio -->
            <div v-if="step === 1" class="space-y-4">
              <label class="text-lg font-medium text-white block">¿Qué necesitas construir?</label>
              <select v-model="formData.tipo" class="w-full bg-slate-800/50 border border-slate-700 rounded-2xl px-5 py-4 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none">
                <option value="" disabled>Selecciona una opción</option>
                <option value="web-nuxt">Desarrollo Web Premium (Nuxt.js)</option>
                <option value="ia-automatizacion">IA & Automatización</option>
                <option value="cloud">Infraestructura Cloud</option>
              </select>
            </div>

            <!-- Paso 2: Presupuesto -->
            <div v-else-if="step === 2" class="space-y-4">
              <label class="text-lg font-medium text-white block text-center mb-2">¿Qué alcance proyectas?</label>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  v-for="p in paquetes"
                  :key="p.id"
                  type="button"
                  @click="formData.presupuesto = p.id"
                  class="relative text-left p-5 rounded-2xl border transition-all"
                  :class="formData.presupuesto === p.id
                    ? 'border-blue-500 bg-blue-500/10 ring-1 ring-blue-500'
                    : 'border-slate-700 bg-slate-800/40 hover:border-slate-600'"
                >
                  <span v-if="p.recomendado" class="absolute -top-2 right-4 bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    MÁS ELEGIDO
                  </span>
                  <p class="text-white font-bold">{{ p.nombre }}</p>
                  <p class="text-blue-400 font-semibold text-sm mt-1">{{ p.rango }}</p>
                  <p class="text-slate-400 text-xs mt-2">{{ p.desc }}</p>
                </button>
              </div>
            </div>

            <!-- Paso 3: Brief + Urgencia -->
            <div v-else-if="step === 3" class="space-y-5">
              <div>
                <label class="text-lg font-medium text-white block mb-2">Cuéntame en una línea qué necesitas</label>
                <textarea v-model="formData.brief" rows="3" placeholder="Ej: Necesito un sitio Nuxt con chatbot de IA para calificar leads..."
                  class="w-full bg-slate-800/50 border border-slate-700 rounded-2xl px-5 py-4 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none resize-none"></textarea>
              </div>
              <div>
                <label class="text-lg font-medium text-white block mb-2">¿Para cuándo lo necesitas?</label>
                <select v-model="formData.urgencia" class="w-full bg-slate-800/50 border border-slate-700 rounded-2xl px-5 py-4 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none">
                  <option value="" disabled>Selecciona una opción</option>
                  <option value="urgente">Esta semana</option>
                  <option value="corto">Este mes</option>
                  <option value="explorando">Explorando opciones</option>
                </select>
              </div>
            </div>

            <!-- Paso 4: Contacto (Nombre, Email y WhatsApp) -->
            <div v-else-if="step === 4" class="space-y-4">
              <label class="text-lg font-medium text-white block">¿A dónde te enviamos la estimación?</label>
              <input v-model="formData.nombre" type="text" placeholder="Tu nombre o empresa"
                class="w-full bg-slate-800/50 border border-slate-700 rounded-2xl px-5 py-4 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" />
              <input v-model="formData.email" type="email" placeholder="Tu correo electrónico (para HubSpot)"
                class="w-full bg-slate-800/50 border border-slate-700 rounded-2xl px-5 py-4 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" />
              <input v-model="formData.whatsapp" type="tel" placeholder="Tu WhatsApp con clave de país (ej. +52...)"
                class="w-full bg-slate-800/50 border border-slate-700 rounded-2xl px-5 py-4 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" />
            </div>

            <!-- Pantalla de Éxito -->
            <div v-else class="text-center space-y-3 py-8">
              <h3 class="text-2xl font-bold text-white">¡Proyecto Registrado! 🚀</h3>
              <p class="text-slate-400">Ya tenemos tu perfil en nuestro radar. Te contactaremos por WhatsApp a la brevedad.</p>
            </div>

            <!-- Botones de Navegación -->
            <div v-if="step <= totalSteps" class="flex gap-4 pt-6">
              <button v-if="step > 1" @click="step--" class="flex-1 bg-slate-800 hover:bg-slate-700 text-white font-bold py-4 rounded-2xl transition-all">
                Atrás
              </button>
              <button @click="siguiente" :disabled="!puedeAvanzar || enviando"
                class="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-blue-900/20">
                {{ enviando ? 'Enviando...' : (step === totalSteps ? 'Enviar Proyecto' : 'Siguiente') }}
              </button>
            </div>

          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>