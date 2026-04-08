// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [['@nuxt/eslint', {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }], '@nuxt/ui', '@vueuse/nuxt', '@nuxt/icon'],
  devtools: { enabled: import.meta.dev },
  app: {
    head: {
      title: 'ADUSA Web Personal Wiki',
    }
  },
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2025-07-15',
  vite: {
    server: {
      fs: {
        allow: ['.', 'node_modules']
      }
    }
  }
})
