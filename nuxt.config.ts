// https://nuxt.com/docs/api/configuration/nuxt-config
import vue from '@vitejs/plugin-vue';

export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [ "nuxt-server-utils", "@sidebase/nuxt-auth"],

  nuxtServerUtils: {
    mongodbUri: process.env.MONGODB_URI,
  },

  auth: {
    provider: {
        type: 'authjs'
    }
},


  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

}
)
