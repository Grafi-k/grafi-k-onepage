export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  
  // 🔑 Variables de entorno del servidor (no expuestas al cliente)
  runtimeConfig: {
    hubspotAccessToken: process.env.HUBSPOT_ACCESS_TOKEN
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon'
  ],
  components: [
    {
      path: '~/components',
      pathPrefix: false, 
    }
  ]
})