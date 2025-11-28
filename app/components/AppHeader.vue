<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
    <nav class="container mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <NuxtLink to="/#home" class="text-2xl font-bold text-gray-900">
          Zekariyas
        </NuxtLink>
        
        <!-- Desktop Navigation -->
        <ul class="hidden md:flex items-center space-x-8">
          <li v-for="item in navItems" :key="item.name">
            <NuxtLink 
              :to="item.href" 
              class="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              {{ item.name }}
            </NuxtLink>
          </li>
          <li>
            <ResumeButton label="Resume" />
          </li>
        </ul>

        <!-- Mobile Menu Button -->
        <button 
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden text-gray-600 hover:text-gray-900"
          aria-label="Toggle menu"
        >
          <Icon :name="mobileMenuOpen ? 'mdi:close' : 'mdi:menu'" class="w-6 h-6" />
        </button>
      </div>

      <!-- Mobile Navigation -->
      <Transition name="slide-fade">
        <ul 
          v-if="mobileMenuOpen" 
          class="md:hidden mt-4 space-y-4 pb-4"
        >
          <li v-for="item in navItems" :key="item.name">
            <NuxtLink 
              :to="item.href" 
              @click="mobileMenuOpen = false"
              class="block text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              {{ item.name }}
            </NuxtLink>
          </li>
        </ul>
      </Transition>
    </nav>
  </header>
</template>

<script setup lang="ts">
const mobileMenuOpen = ref(false)

const navItems = [
  { name: 'About', href: '/#about' },
  { name: 'Experience', href: '/#experience' },
  { name: 'Projects', href: '/#projects' },
  // { name: 'Blog', href: '/#blog' },
  { name: 'Contact', href: '/#contact' },
]
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>