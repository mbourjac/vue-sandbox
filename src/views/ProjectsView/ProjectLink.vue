<script setup lang="ts">
const { slug, isActive, isRouteTransition } = defineProps<{
  slug: string;
  isActive?: boolean;
  isRouteTransition: boolean;
}>();
</script>

<template>
  <RouterLink
    :to="{ name: 'project-detail', params: { slug: slug } }"
    :class="[
      'group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-black bg-white px-6 py-1 text-center text-xs uppercase text-black transition-colors duration-300 ease-out hover:text-white group-hover:text-white',
      { 'text-white': isActive },
    ]"
  >
    <span
      :class="[
        'absolute bottom-0 left-0 h-0 w-full bg-black transition-all duration-300 ease-out group-hover:h-full',
        { 'h-full': isActive },
      ]"
    ></span>
    <span class="relative">
      <SlideUpAnimation :is-exiting="isRouteTransition"
        >Read more</SlideUpAnimation
      >
    </span>
  </RouterLink>
</template>
