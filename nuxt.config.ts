// https://nuxt.com/docs/api/configuration/nuxt-config
import vue from '@vitejs/plugin-vue';

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
{ spaLoadingTemplate: false }