<template>
  <section id="about" class="py-20 px-6 bg-gray-50">
    <div class="container mx-auto max-w-6xl">
      <div class="space-y-12">
        <!-- Section Header -->
        <div class="text-center space-y-4">
          <h2 class="text-4xl font-bold text-gray-900">About Me</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            I build web apps that people actually want to use.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-12">
          <!-- Bio -->
          <div class="space-y-4">
            <h3 class="text-2xl font-semibold text-gray-900">Background</h3>
            <div class="space-y-4 text-gray-600 leading-relaxed">
              <p>
                I've been building web applications for about 3 years now. Started out curious about how websites actually work, and that curiosity turned into a career. These days, I focus on creating apps that solve real problems without overcomplicating things.
              </p>
              <p>
                I care about writing code that other developers (including future me) can actually understand. When I'm not working, I like exploring new tech and occasionally contributing to open-source when I find something interesting.
              </p>
            </div>
            <div class="pt-4">
              <ResumeButton :border="true" label="Download Resume" />
            </div>
          </div>

          <!-- Skills -->
          <div class="space-y-6">
            <h3 class="text-2xl font-semibold text-gray-900">Skills & Expertise</h3>
            <div class="space-y-4">
              <div v-for="skill in skills" :key="skill.category" class="space-y-2">
                <h4 class="font-medium text-gray-900">{{ skill.category }}</h4>
                <div class="flex flex-wrap gap-2">
                  <span 
                    v-for="item in skill.items" 
                    :key="item"
                    class="px-3 py-1 bg-white border border-gray-200 text-gray-700 text-sm rounded-md"
                  >
                    {{ item }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const skills = [
  {
    category: 'Frontend',
    items: ['Vue.js', 'Nuxt.js', 'React', 'Next.js', 'Astro', 'Angular', 'TypeScript']
  },
  {
    category: 'Backend',
    items: ['Node.js', 'NestJS', 'Express', 'Fast API', 'Laravel', 'Spring Boot', 'MySQL', 'PostgreSQL', 'REST APIs', 'GraphQL', 'System Architecture', 'Database Design']
  },
  {
    category: 'Tools & Others',
    items: ['Git', 'Docker', 'AWS', 'CI/CD', 'Agile', 'Testing']
  }
]
</script>