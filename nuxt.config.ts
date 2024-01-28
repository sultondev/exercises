// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  runtimeConfig: {
    public: {
      baseURL: process.env.API_HOST || 'https://wrong.com/'
    }
  },
  imports: {
    dirs: [
      
      "~/src/components/**"
    ]
  },
  srcDir: "src/",
  components: {
    dirs: [
      {
        "path": "~/components/**",
        "global": true
      },
      "~/src/components"
    ],
  },
  alias: {
    '@': 'src/'
  },
  vue: {  
    compilerOptions: {
      isCustomElement: (tag) => ['lite-youtube'].includes(tag),
    },
  }
})          