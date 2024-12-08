// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@vueuse/motion/nuxt",
    "@nuxt/image",
    "nuxt-icons",
  ],
  css: ["~/assets/css/global.css", "~/assets/css/colors.css"],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      title: "Hexzii⭐ -- 一个简简单单的个人主页",
      htmlAttrs: {
        lang: "zh-CN",
      },
      meta: [
        { charset: "utf-8" },
        { name: "referrer", content: "no-referrer" },
        {
          key: "description",
          name: "description",
          content: "一个简简单单的个人主页",
        },
        {
          key: "keywords",
          name: "keywords",
          content: ["Homepage", "主页", "hexadecimal233", "Hexzii⭐"].join(", "),
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "https://gravatar.loli.net/avatar/daca850545a454e39660992d1163e88e?size=256&cache=1718432418567",
        },
        // We use google fonts here
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Montserrat&display=swap",
        },
      ],
    },
  },
})
