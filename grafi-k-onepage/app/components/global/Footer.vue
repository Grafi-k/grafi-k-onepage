<template>
  <footer class="py-12 bg-slate-950 border-t border-slate-900 px-4">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      
      <div class="flex flex-col items-center md:items-start gap-2">
        <div class="flex items-center gap-2">
          <div class="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
            <Icon name="lucide:terminal" class="text-white text-xs" />
          </div>
          <span class="text-lg font-bold text-white tracking-tighter">
            Grafi-k<span class="text-blue-500">Digital</span>
          </span>
        </div>
        <p class="text-slate-500 text-sm">© 2026 — Ingeniería de Software Premium</p>
      </div>

      <div class="flex gap-6">
        <a href="#" class="text-slate-400 hover:text-blue-500 transition-colors">
          <Icon name="lucide:github" class="text-2xl" />
        </a>
        <a href="#" class="text-slate-400 hover:text-blue-500 transition-colors">
          <Icon name="lucide:linkedin" class="text-2xl" />
        </a>
        <a href="#" class="text-slate-400 hover:text-blue-400 transition-colors">
          <Icon name="lucide:instagram" class="text-2xl" />
        </a>
      </div>

      <div class="text-slate-500 text-sm font-medium">
        Built with <span class="text-red-500">❤️</span> by <span class="text-white">Rool Palacios</span>
      </div>

    </div>
  </footer>
</template>