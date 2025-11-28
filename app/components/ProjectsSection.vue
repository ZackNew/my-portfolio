<template>
  <section id="projects" class="py-20 px-6 bg-gray-50">
    <div class="container mx-auto max-w-6xl">
      <div class="space-y-12">
        <div class="text-center space-y-4">
          <h2 class="text-4xl font-bold text-gray-900">Projects</h2>
          <p class="text-gray-600">Some of my recent work</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="project in projects" 
            :key="project.title"
            class="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-200"
          >
            <NuxtImg
              :src="project.image"
              :alt="project.title"
              class="w-full h-48 object-cover"
              width="400"
              height="300"
            />
            
            <div class="p-6 space-y-4">
              <h3 class="text-xl font-semibold text-gray-900">{{ project.title }}</h3>
              <p class="text-gray-600 text-sm">{{ project.description }}</p>
              
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="tech in project.technologies" 
                  :key="tech"
                  class="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                >
                  {{ tech }}
                </span>
              </div>

              <div class="flex gap-4 pt-2">
                <a 
                  v-if="project.github"
                  :href="project.github" 
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <Icon name="mdi:github" class="w-5 h-5" />
                </a>
                <a 
                  v-if="project.demo"
                  :href="project.demo" 
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <Icon name="mdi:open-in-new" class="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const projects = [
  {
    title: 'Colour Graphics',
    description: 'A full-featured e-commerce platform for printable materials with payment integration, admin dashboard, and real-time inventory management.',
    image: 'https://res.cloudinary.com/digswjgpt/image/upload/v1764357915/cg_mqcd7b.avif',
    technologies: ['VueJS', 'Astro', 'NestJS', 'Vendure', 'MySQL', 'Tailwind', 'Graphql'],
    github: '',
    demo: 'https://colourgraphics.com/'
  },
  {
    title: 'AfriworkET',
    description: 'A job matching platform where job seekers can find opportunities and employers can post job listings.',
    image: 'https://res.cloudinary.com/digswjgpt/image/upload/v1764358367/afriwork_jm68cd.avif',
    technologies: ['Vue.js', 'NuxtJS', 'Tailwind', 'Socket.io', 'Urql', 'GraphQL'],
    github: '',
    demo: 'https://afriworket.com/jobs'
  },
  {
    title: 'Colour Graphics',
    description: 'A full-featured e-commerce platform for printable materials with payment integration, admin dashboard, and real-time inventory management.',
    image: 'https://res.cloudinary.com/digswjgpt/image/upload/v1764358790/afromerkato_kr1w3c.avif',
    technologies: ['VueJS', 'NuxtJS', 'NestJS', 'Vendure', 'MySQL', 'Tailwind', 'Graphql'],
    github: '',
    demo: 'https://afromerkato.com/'
  },
]
</script>