// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore"],
      },
    ],
  ],
  css: ["locomotive-scroll/dist/locomotive-scroll.css"],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
  },
});
