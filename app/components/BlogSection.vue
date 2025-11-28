<template>
  <section id="blog" class="py-20 px-6">
    <div class="container mx-auto max-w-6xl">
      <div class="space-y-12">
        <div class="text-center space-y-4">
          <h2 class="text-4xl font-bold text-gray-900">Blog</h2>
          <p class="text-gray-600">Thoughts on tech and development</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article 
            v-for="post in posts" 
            :key="post.title"
            class="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-200"
          >
            <NuxtImg
              :src="post.image"
              :alt="post.title"
              class="w-full h-48 object-cover"
              width="400"
              height="300"
            />
            
            <div class="p-6 space-y-4">
              <div class="flex items-center gap-2 text-sm text-gray-500">
                <Icon name="mdi:calendar" class="w-4 h-4" />
                <time>{{ post.date }}</time>
              </div>

              <h3 class="text-xl font-semibold text-gray-900">{{ post.title }}</h3>
              <p class="text-gray-600 text-sm">{{ post.excerpt }}</p>
              
              <NuxtLink 
                :to="`/blog/${post.slug}`"
                class="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
              >
                Read more
                <Icon name="mdi:arrow-right" class="w-4 h-4" />
              </NuxtLink>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const posts = [
  {
    title: 'Building Scalable Web Applications',
    excerpt: 'Best practices and patterns for building applications that scale with your business needs.',
    date: 'Nov 15, 2024',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop',
    slug: 'building-scalable-web-applications'
  },
  {
    title: 'Introduction to TypeScript',
    excerpt: 'Why TypeScript is becoming the standard for modern JavaScript development.',
    date: 'Nov 8, 2024',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=300&fit=crop',
    slug: 'introduction-to-typescript'
  },
  {
    title: 'Microservices Architecture',
    excerpt: 'Understanding microservices and when to use them in your projects.',
    date: 'Oct 28, 2024',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',
    slug: 'microservices-architecture'
  }
]
</script>