<template>
  <a 
    href="/Zekariyas_Mulugeta_Resume.pdf" 
    download="Zekariyas_Mulugeta_Resume.pdf"
    class="inline-flex items-center gap-2 text-primary-600 font-medium"
    :class="border ? 'transition-colors hover:bg-primary-50 border border-primary-600 px-4 py-2 duration-200 rounded-lg' : 'hover:text-primary-800'"
  >
    <Icon name="mdi:download" class="w-5 h-5" />
    <span>{{ label }}</span>
  </a>
</template>

<script setup lang="ts">
defineProps<{
  label?: string,
  border?: boolean
}>()
</script>