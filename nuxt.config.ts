// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/ui',
  ],
  ssr: true,
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Caleb Anthony',
    },
  },

  css: ['~/assets/css/main.css'],
  compatibilityDate: '2025-05-15',

  eslint: {
    config: {
      stylistic: true,
    },
  },
})
