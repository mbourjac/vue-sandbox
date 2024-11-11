<script setup lang="ts">
import SlideUpAnimation from '@/components/SlideUpAnimation.vue';

const { href } = defineProps<{
  href: string;
  isExiting: boolean;
}>();
</script>

<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    class="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-black bg-white px-6 py-1 text-center text-xs uppercase text-black transition-colors duration-300 ease-out hover:text-white group-hover:text-white"
  >
    <span
      class="absolute bottom-0 left-0 h-0 w-full bg-black transition-all duration-300 ease-out group-hover:h-full"
    ></span>
    <span class="relative">
      <SlideUpAnimation :is-exiting="isExiting">
        <slot />
      </SlideUpAnimation>
    </span>
  </a>
</template>
