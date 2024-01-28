// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  dir: {
      assets: './src/assets',
      layouts: './src/layouts',
      middleware: './src/middleware',
      modules: './src/modules',
      pages: './src/pages',
      plugins: './src/plugins',
    }
})          