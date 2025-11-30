<template>
  <div>
    <HeroSection />
    <AboutSection />
    <ExperienceSection />
    <ProjectsSection />
    <!-- <BlogSection /> -->
    <ContactSection />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Zekariyas - Full Stack Developer',
  description: 'Professional portfolio showcasing projects, experience, and expertise in web development',
  ogTitle: 'Zekariyas Mulugeta - Full Stack Developer',
  ogDescription: 'Professional portfolio showcasing projects, experience, and expertise in web development',
  ogUrl: 'https://zekariyas.com',
  ogImage: '/og-image.png',
  // Twitter
  twitterTitle: 'Zekariyas Mulugeta - Full Stack Developer',
  twitterDescription: 'Professional portfolio showcasing projects, experience, and expertise in web development',
  twitterImage: '/og-image.png',
  twitterCard: 'summary_large_image',
})

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }
  ]
})
</script>