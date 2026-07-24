<template>
  <section id="contacto" class="py-24 bg-slate-950 px-4">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-12 animate-fade-up">
        <h2 class="text-4xl font-bold text-white mb-4">
          ¿Listo para el <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">siguiente nivel</span>?
        </h2>
        <p class="text-slate-400 text-lg">Cuéntame sobre tu proyecto o el de tu empresa. Te responderé en menos de 24 horas.</p>
      </div>

      <div class="bg-slate-900/50 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl animate-fade-up animate-delay-200">
        
        <!-- Pantalla de Éxito -->
        <div v-if="enviado" class="text-center py-8 space-y-4">
          <h3 class="text-2xl font-bold text-white">¡Mensaje recibido, bro! 🚀</h3>
          <p class="text-slate-400">Gracias por escribir. Te responderé al correo en breve.</p>
        </div>

        <!-- Formulario -->
        <form v-else @submit.prevent="handleSubmit" class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-2">
              <label class="text-sm font-medium text-slate-300 ml-2">Nombre Completo</label>
              <!-- 🔑 Agregado v-model -->
              <input v-model="formData.nombre" type="text" placeholder="Ej. Juan Pérez" required
                class="w-full bg-slate-800/50 border border-slate-700 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" />
            </div>
            <div class="space-y-2">
              <label class="text-sm font-medium text-slate-300 ml-2">Correo Electrónico</label>
              <!-- 🔑 Agregado v-model -->
              <input v-model="formData.email" type="email" placeholder="juan@empresa.com" required
                class="w-full bg-slate-800/50 border border-slate-700 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" />
            </div>
          </div>

          <div class="space-y-2">
            <label class="text-sm font-medium text-slate-300 ml-2">Detalles del Proyecto</label>
            <!-- 🔑 Agregado v-model -->
            <textarea v-model="formData.detalles" rows="4" placeholder="Háblame de tu visión..." required
              class="w-full bg-slate-800/50 border border-slate-700 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"></textarea>
          </div>

          <button type="submit" :disabled="enviando"
            class="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 disabled:opacity-50 text-white font-bold py-4 rounded-2xl transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 shadow-lg shadow-blue-900/20">
            <Icon name="lucide:send" class="text-xl" />
            {{ enviando ? 'Enviando...' : 'Enviar Mensaje' }}
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue';

const enviando = ref(false);
const enviado = ref(false);

const formData = reactive({
  nombre: '',
  email: '',
  detalles: '',
  origen: 'contacto'
});

const handleSubmit = async () => {
  if (!formData.nombre || !formData.email || !formData.detalles) {
    alert('Por favor completa todos los campos.');
    return;
  }

  enviando.value = true;
  try {
    await $fetch('/api/cotizar', {
      method: 'POST',
      body: formData
    });
    enviado.value = true;
  } catch (error) {
    console.error('Error enviando contacto:', error);
    alert('Hubo un error al enviar tu mensaje. Intenta de nuevo.');
  } finally {
    enviando.value = false;
  }
};
</script>

