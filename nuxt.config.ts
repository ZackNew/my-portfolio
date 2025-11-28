import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: ["@nuxt/icon", "@nuxt/image", "@nuxtjs/sitemap", "@nuxtjs/mdc"],

  app: {
    head: {
      title: "Zekariyas - Portfolio",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Professional portfolio of Zekariyas Mulugeta - Full Stack Developer specializing in modern web applications, Vue.js, React, and Node.js, Nest, Laravel, Spring boot and more",
        },
        {
          name: "keywords",
          content:
            "Full Stack Developer, Web Developer, React, Vue.js, Next.js, Nuxt.js, Nest.js, Laravel, Spring Boot, TypeScript, Portfolio",
        },
        { name: "author", content: "Zekariyas Mulugeta" },
        { name: "robots", content: "index, follow" },

        { property: "og:type", content: "website" },
        {
          property: "og:title",
          content: "Zekariyas Mulugeta - Full Stack Developer Portfolio",
        },
        {
          property: "og:description",
          content:
            "Professional portfolio showcasing projects, experience, and expertise in web development",
        },
        { property: "og:image", content: "/og-image.png" },
        { property: "og:url", content: "https://zekariyas.com" },

        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'John Doe - Full Stack Developer Portfolio' },
        { name: 'twitter:description', content: 'Professional portfolio showcasing projects, experience, and expertise in web development' },
        { name: 'twitter:image', content: '/og-image.png' },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "canonical", href: "https://zekariyas.com" },
      ],
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  css: ["~/assets/css/main.css"],

  image: {
    format: ['webp', 'avif'],
    quality: 80,
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
  },

  site: {
    url: 'https://zekariyas.com',
    name: 'Zekariyas Mulugeta Portfolio'
  }
});
