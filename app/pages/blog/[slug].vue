<template>
  <div class="pt-20 pb-20 px-6">
    <article class="container mx-auto max-w-4xl">
      <!-- Header -->
      <header class="mb-12 space-y-6">
        <div class="flex items-center gap-4 text-sm text-gray-600">
          <NuxtLink to="/#blog" class="flex items-center gap-2 hover:text-primary-600 transition-colors">
            <Icon name="mdi:arrow-left" class="w-4 h-4" />
            Back to Blog
          </NuxtLink>
          <span>•</span>
          <time>{{ post.date }}</time>
        </div>

        <h1 class="text-4xl md:text-5xl font-bold text-gray-900">
          {{ post.title }}
        </h1>

        <div class="flex items-center gap-4">
          <NuxtImg
            :src="post.author.avatar"
            :alt="post.author.name"
            class="w-12 h-12 rounded-full"
            width="48"
            height="48"
          />
          <div>
            <p class="font-medium text-gray-900">{{ post.author.name }}</p>
            <p class="text-sm text-gray-600">{{ post.readTime }} min read</p>
          </div>
        </div>
      </header>

      <!-- Featured Image -->
      <div class="mb-12">
        <NuxtImg
          :src="post.image"
          :alt="post.title"
          class="w-full h-96 object-cover rounded-lg"
          width="1200"
          height="600"
        />
      </div>

      <!-- Content -->
      <div class="prose prose-lg max-w-none">
        <MDC :value="post.content" />
      </div>

      <!-- Tags -->
      <div class="mt-12 pt-8 border-t border-gray-200">
        <div class="flex flex-wrap gap-2">
          <span 
            v-for="tag in post.tags" 
            :key="tag"
            class="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-md"
          >
            #{{ tag }}
          </span>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
// This is static demo content
// In production, you'll fetch this from a CMS or markdown files
const post = {
  title: 'Building Scalable Web Applications',
  date: 'November 15, 2024',
  readTime: 8,
  author: {
    name: 'Zekariyas Mulugeta',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
  },
  image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=600&fit=crop',
  tags: ['Web Development', 'Architecture', 'Best Practices'],
  content: `
# Introduction

Building scalable web applications requires careful planning and architecture. In this article, we'll explore key principles and best practices.

## Key Principles

### 1. Modularity
Break your application into smaller, independent modules. This makes it easier to maintain and scale.

### 2. Performance Optimization
- Implement lazy loading
- Use code splitting
- Optimize images and assets
- Cache strategically

### 3. Database Design
Choose the right database for your needs and design your schema with scalability in mind.

## Best Practices

Here are some best practices to follow:

1. **Write clean, maintainable code**
2. **Implement comprehensive testing**
3. **Use version control effectively**
4. **Document your architecture**

## Code Example

\`\`\`typescript
// Example of a scalable API route
export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const data = await fetchData(query)
  return data
})
\`\`\`

## Conclusion

Scalability is not just about handling more users—it's about building systems that can grow and evolve with your needs.
  `
}

useSeoMeta({
  title: `${post.title} - Zekariyas Mulugeta`,
  description: 'Learn about building scalable web applications with modern best practices',
  ogTitle: post.title,
  ogDescription: 'Learn about building scalable web applications',
  ogImage: post.image,
})
</script>

<style>
.prose {
  color: #374151;
}

.prose h1 {
  font-size: 1.875rem;
  font-weight: 700;
  color: #111827;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.prose h2 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.prose h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
}

.prose p {
  margin-bottom: 1rem;
  line-height: 1.75;
}

.prose ul, .prose ol {
  margin-bottom: 1rem;
  margin-left: 1.5rem;
}

.prose li {
  margin-bottom: 0.5rem;
}

.prose code {
  background-color: #f3f4f6;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.875rem;
}

.prose pre {
  background-color: #1f2937;
  color: #f3f4f6;
  padding: 1rem;
  border-radius: 0.5rem;
  overflow-x: auto;
  margin-bottom: 1rem;
}

.prose strong {
  font-weight: 600;
  color: #111827;
}
</style>