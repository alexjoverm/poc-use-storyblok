// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    ["@storyblok/nuxt", { accessToken: "K8n3IRNgYYdLgWlijf91Cwtt" }],
    "@nuxtjs/i18n",
  ],
  i18n: {
    strategy: "prefix_except_default",
    defaultLocale: "en",
    locales: ["en", "es"],
  },
});
