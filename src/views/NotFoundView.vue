<script setup lang="ts">
import { useRouteTransition } from '@/composables/use-route-transition';
import SlideUpAnimation from '@/components/SlideUpAnimation.vue';

const { isRouteTransition, page } = useRouteTransition();
</script>

<template>
  <div ref="page" class="flex grow items-center justify-center">
    <SlideUpAnimation :is-exiting="isRouteTransition" class="text-xl font-bold"
      >This page doesn't exist</SlideUpAnimation
    >
  </div>
</template>
