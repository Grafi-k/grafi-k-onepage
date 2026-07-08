<script setup lang="ts">
const step = ref(1);
const formData = reactive({
  tipo: '',
  presupuesto: 5000,
  nombre: '',
  whatsapp: ''
});

const enviarDatos = () => {
  console.log("Datos listos para el backend:", formData);
  alert('¡Cotización enviada! Estamos preparando algo grande para ti.');
};
</script>

<template>
  <section class="min-h-screen bg-slate-950 py-12 px-4 flex items-center justify-center">
    <div class="max-w-2xl w-full">
      <div class="text-center mb-10">
        <h2 class="text-3xl font-bold text-white mb-2">Configura tu proyecto</h2>
        <p class="text-slate-400">Paso {{ step }} de 3</p>
      </div>

      <div class="bg-slate-900/50 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl">
        <transition name="fade" mode="out-in">
          <div :key="step" class="space-y-6">
            
            <div v-if="step === 1" class="space-y-4">
              <label class="text-lg font-medium text-white">¿Qué necesitas?</label>
              <select v-model="formData.tipo" class="w-full bg-slate-800/50 border border-slate-700 rounded-2xl px-5 py-4 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none">
                <option value="" disabled>Selecciona una opción</option>
                <option value="web">Desarrollo Web Premium</option>
                <option value="app">App Móvil (Flutter)</option>
                <option value="express">Servicio Express (Hosting/Dominios)</option>
              </select>
            </div>

           <div v-else-if="step === 2" class="space-y-6">
                <div class="text-center">
                  <p class="text-slate-400 text-sm uppercase tracking-widest font-semibold">Tu Inversión Estimada</p>
                  <h3 class="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 mt-2">
                    ${{ formData.presupuesto.toLocaleString() }}
                  </h3>
                </div>
                <input type="range" v-model="formData.presupuesto" min="5000" max="50000" step="1000" 
                  class="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500">
                <div class="flex justify-between text-xs text-slate-500 px-1">
                  <span>$5k</span>
                  <span>$50k+</span>
                </div>
              </div>

              <div class="mb-8 h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                <div class="h-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-500" 
                    :style="{ width: (step / 3) * 100 + '%' }"></div>
              </div>

            <div class="flex gap-4 pt-6">
              <button v-if="step > 1" @click="step--" class="flex-1 bg-slate-800 hover:bg-slate-700 text-white font-bold py-4 rounded-2xl transition-all">
                Atrás
              </button>
              <button @click="step < 3 ? step++ : enviarDatos()" class="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-blue-900/20">
                {{ step === 3 ? 'Enviar Proyecto' : 'Siguiente' }}
              </button>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<style>
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>