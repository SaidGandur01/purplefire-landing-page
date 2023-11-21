// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,
  css: ['@/assets/css/base.css'],
  modules: ['@nuxtjs/google-fonts'],
  googleFonts: {
    download: true,
    families: {
      'Varta': {
        wght: [100, 200, 300, 400, 500, 600, 700, 800]
      },
      'Merriweather': {
        wght: [100, 200, 300, 400, 500, 600, 700, 800]
      },
      'karla': {
        wght: [100, 200, 300, 400, 500, 600, 700, 800]
      },
    }
  }
})
