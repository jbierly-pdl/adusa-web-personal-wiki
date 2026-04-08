// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [['@nuxt/eslint', {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }], '@nuxt/ui', '@vueuse/nuxt', '@nuxt/icon', '@nuxt/content'],
  devtools: { enabled: import.meta.dev },
  app: {
    head: {
      title: 'ADUSA Web Personal Wiki',
    }
  },
  css: ['~/assets/css/main.css'],
  content: {
    build: {
      markdown: {
        highlight: {
          theme: 'github-dark',
          langs: ['js', 'ts', 'vue', 'css', 'html', 'bash', 'yaml', 'json'],
        },
        toc: {
          depth: 3,
          searchDepth: 2,
        },
      },
    },
  },
  compatibilityDate: '2025-07-15',
  vite: {
    server: {
      fs: {
        allow: ['.', 'node_modules']
      }
    }
  }
})
