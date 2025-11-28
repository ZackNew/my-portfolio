<template>
  <section id="home" class="min-h-screen flex items-center justify-center pt-20 px-6">
    <div class="container mx-auto max-w-6xl">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Left: Text Content -->
        <div class="space-y-6">
          <div class="space-y-2">
            <p class="text-primary-600 font-medium">Hello, I'm</p>
            <h1 class="text-5xl md:text-6xl font-bold text-gray-900">
              Zekariyas Mulugeta
            </h1>
            <h2 class="text-2xl md:text-3xl text-gray-600">
              Full Stack Developer
            </h2>
          </div>

          <p class="text-lg text-gray-600 leading-relaxed">
            I'm a full-stack developer who spends my days building meaningful web applications
            and figuring out why my code works in dev but not in production.
          </p>

          <div class="flex gap-4 pt-4">
            <a href="#contact"
              class="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200">
              Get in touch
            </a>
            <a href="#projects"
              class="px-6 py-3 border border-gray-300 text-gray-900 rounded-lg hover:border-gray-400 transition-colors duration-200">
              View work
            </a>
          </div>

          <div class="flex gap-6 pt-4">
            <a v-for="social in socials" :key="social.name" :href="social.href" target="_blank"
              rel="noopener noreferrer" class="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              :aria-label="social.name">
              <Icon :name="social.icon" class="w-6 h-6" />
            </a>
          </div>
        </div>

        <!-- Right: Image -->
        <div class="order-first md:order-last">
          <div class="relative">
            <div class="absolute inset-0 bg-primary-100 rounded-2xl transform rotate-3"></div>
            <NuxtImg src="https://res.cloudinary.com/digswjgpt/image/upload/v1764355801/me_modpnc.avif"
              alt="Zekariyas Mulugeta" class="relative rounded-2xl w-full h-auto shadow-lg border-1 border-gray-100" width="800" height="800"
              loading="eager" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const socials = [
  { name: 'GitHub', icon: 'mdi:github', href: 'https://github.com/ZackNew' },
  { name: 'LinkedIn', icon: 'mdi:linkedin', href: 'https://linkedin.com/in/zekariyas-mulugeta-bb970b287' },
  // { name: 'Twitter', icon: 'mdi:twitter', href: 'https://twitter.com' },
]
</script>