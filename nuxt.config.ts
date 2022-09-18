import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    // ...
    '@pinia/nuxt',
  ],
  buildModules: [
    [
      "unplugin-icons/nuxt",
      {
        /* options */
      },
    ],
  ],
  ssr: false,
  typescript: {
    tsConfig: {
      compilerOptions: {
        types: ["unplugin-icons/types/vue"],
      },
    },
  },
  // modules: ['@nuxtjs/axios'],

  /*
   ** Axios config
   */
  axios: {
    baseURL: '/',
  },
});
