<template>
  <footer class="bg-gray-50 border-t border-gray-200">
    <div class="container mx-auto px-6 py-12">
      <div class="flex flex-col md:flex-row justify-between items-center gap-6">
        <div class="text-center md:text-left">
          <h3 class="text-lg font-semibold text-gray-900 mb-2">Zekariyas Mulugeta</h3>
          <p class="text-gray-600 text-sm">Full Stack Developer</p>
        </div>

        <div class="flex gap-6">
          <a 
            v-for="social in socials" 
            :key="social.name"
            :href="social.href" 
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            :aria-label="social.name"
          >
            <Icon :name="social.icon" class="w-5 h-5" />
          </a>
        </div>
      </div>

      <div class="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
        <p>&copy; {{ currentYear }} Zekariyas Mulugeta. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()

const socials = [
  { name: 'GitHub', icon: 'mdi:github', href: 'https://github.com/ZackNew' },
  { name: 'LinkedIn', icon: 'mdi:linkedin', href: 'https://linkedin.com/in/zekariyas-mulugeta-bb970b287' },
  // { name: 'Twitter', icon: 'mdi:twitter', href: 'https://twitter.com' },
  { name: 'Email', icon: 'mdi:email', href: 'mailto:zekariyasmulugeta91@gmail.com' },
]
</script>