<template>
  <section id="experience" class="py-20 px-6">
    <div class="container mx-auto max-w-4xl">
      <div class="space-y-12">
        <!-- Section Header -->
        <div class="text-center space-y-4">
          <h2 class="text-4xl font-bold text-gray-900">Experience</h2>
          <p class="text-gray-600">My professional journey</p>
        </div>

        <!-- Timeline -->
        <div class="space-y-8">
          <div 
            v-for="(exp, index) in experiences" 
            :key="index"
            class="relative pl-8 pb-8 border-l-2 border-gray-200 last:border-l-0 last:pb-0"
          >
            <!-- Timeline Dot -->
            <div class="absolute -left-[9px] top-0 w-4 h-4 bg-primary-600 rounded-full border-4 border-white"></div>
            
            <div class="space-y-2">
              <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <h3 class="text-xl font-semibold text-gray-900">{{ exp.title }}</h3>
                <span class="text-sm text-gray-500">{{ exp.period }}</span>
              </div>
              
              <p class="text-primary-600 font-medium">{{ exp.company }}</p>
              <p class="text-gray-600 leading-relaxed">{{ exp.description }}</p>
              
              <div class="flex flex-wrap gap-2 pt-2">
                <span 
                  v-for="tech in exp.technologies" 
                  :key="tech"
                  class="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const experiences = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Excellerent Ethiopia',
    period: '2025 - Present',
    description: 'Developing a full-stack self-service portal that enables mobile subscribers to manage SIM cards, purchase packages, and other telecom services services independently.',
    technologies: ['React', 'Next.js', 'Tailwind', 'Laravel', 'PostgreSQL']
  },
  {
    title: 'Frontend Developer',
    company: 'Afriwork',
    period: '2024 - 2025',
    description: 'Built responsive user interfaces for a job matching platform, creating engaging pages that connect job seekers with opportunities.',
    technologies: ['Vue.js', 'NuxtJS', 'Tailwind', 'Urql', 'GraphQL']
  },
  {
    title: 'Full Stack Developer',
    company: 'Pine Labs',
    period: '2023 - 2025',
    description: 'Developed custom e-commerce plugins for a Vendure-based printable materials shop, extending backend functionality and building frontend pages for browsing, checkout, and order management.',
    technologies: ['Typescript', 'NextJS', 'Vendure', 'VueJS', 'Astro', 'Graphql', 'MySQL']
  },
  {
    title: 'Full Stack Developer',
    company: 'EtechSC',
    period: '2022 - 2024',
    description: 'Built multiple e-commerce sites with payment gateway integrations and developed a centralized payment integration system that connects multiple software products to several payment gateway providers',
    technologies: ['Typescript', 'VueJS', 'Nuxt', 'Vendure', 'Angular', 'Graphql', 'MySQL']
  }
]
</script>