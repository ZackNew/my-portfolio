<template>
  <section id="contact" class="py-20 px-6 bg-gray-50">
    <div class="container mx-auto max-w-4xl">
      <div class="space-y-12">
        <div class="text-center space-y-4">
          <h2 class="text-4xl font-bold text-gray-900">Get In Touch</h2>
          <p class="text-gray-600">Have a project in mind? Let's work together</p>
        </div>

        <div class="grid md:grid-cols-2 gap-12">
          <!-- Contact Info -->
          <div class="space-y-6">
            <div class="space-y-4">
              <h3 class="text-xl font-semibold text-gray-900">Contact Information</h3>
              <p class="text-gray-600">Feel free to reach out through any of these channels</p>
            </div>

            <div class="space-y-4">
              <div class="flex items-start gap-4">
                <Icon name="mdi:email" class="w-6 h-6 text-primary-600 mt-1" />
                <div>
                  <p class="font-medium text-gray-900">Email</p>
                  <a href="mailto:zekariyasmulugeta91@gmail.com" class="text-gray-600 hover:text-primary-600">
                    zekariyasmulugeta91@gmail.com
                  </a>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <Icon name="mdi:phone" class="w-6 h-6 text-primary-600 mt-1" />
                <div>
                  <p class="font-medium text-gray-900">Phone</p>
                  <a href="tel:+1234567890" class="text-gray-600 hover:text-primary-600">
                    +251 923049901
                  </a>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <Icon name="mdi:map-marker" class="w-6 h-6 text-primary-600 mt-1" />
                <div>
                  <p class="font-medium text-gray-900">Location</p>
                  <p class="text-gray-600">Addis Ababa, Ethiopia</p>
                </div>
              </div>
            </div>

            <div class="flex gap-4 pt-4">
              <a 
                v-for="social in socials" 
                :key="social.name"
                :href="social.href" 
                target="_blank"
                rel="noopener noreferrer"
                class="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:text-primary-600 hover:border-primary-600 transition-colors"
              >
                <Icon :name="social.icon" class="w-5 h-5" />
              </a>
            </div>
          </div>

          <!-- Contact Form -->
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-900 mb-2">Name</label>
              <input 
                id="name"
                v-model="form.name"
                type="text" 
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                placeholder="Your name"
              />
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-gray-900 mb-2">Email</label>
              <input 
                id="email"
                v-model="form.email"
                type="email" 
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label for="message" class="block text-sm font-medium text-gray-900 mb-2">Message</label>
              <textarea 
                id="message"
                v-model="form.message"
                required
                rows="5"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none resize-none"
                placeholder="Your message..."
              ></textarea>
            </div>

            <button 
              type="submit"
              :disabled="isSubmitting"
              class="w-full px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {{ isSubmitting ? 'Sending...' : 'Send Message' }}
            </button>

            <!-- Success Message -->
            <div v-if="submitStatus === 'success'" class="p-4 bg-green-50 border border-green-200 rounded-lg">
              <p class="text-green-800 text-sm">✓ Message sent successfully! I'll get back to you soon.</p>
            </div>

            <!-- Error Message -->
            <div v-if="submitStatus === 'error'" class="p-4 bg-red-50 border border-red-200 rounded-lg">
              <p class="text-red-800 text-sm">{{ errorMessage }}</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const form = ref({
  name: '',
  email: '',
  message: ''
})

const isSubmitting = ref(false)
const submitStatus = ref<'idle' | 'success' | 'error'>('idle')
const errorMessage = ref('')

const socials = [
  { name: 'GitHub', icon: 'mdi:github', href: 'https://github.com/ZackNew' },
  { name: 'LinkedIn', icon: 'mdi:linkedin', href: 'https://linkedin.com/in/zekariyas-mulugeta-bb970b287' },
  // { name: 'Twitter', icon: 'mdi:twitter', href: 'https://twitter.com' },
]

const handleSubmit = async () => {
  isSubmitting.value = true
  submitStatus.value = 'idle'
  errorMessage.value = ''

  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: {
        name: form.value.name,
        email: form.value.email,
        message: form.value.message
      }
    })

    submitStatus.value = 'success'
    
    form.value = {
      name: '',
      email: '',
      message: ''
    }

    setTimeout(() => {
      submitStatus.value = 'idle'
    }, 5000)
  } catch (error: any) {
    submitStatus.value = 'error'
    errorMessage.value = 'Failed to send message. Please try again.'
  } finally {
    isSubmitting.value = false
  }
}
</script>