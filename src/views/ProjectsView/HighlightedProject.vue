<script setup lang="ts">
import SlideUpAnimation from '@/components/SlideUpAnimation.vue';
import type { Project } from '@/types';
import { ref } from 'vue';
import ProjectLink from './ProjectLink.vue';

const { project, isRouteTransition } = defineProps<{
  project: Project;
  isRouteTransition: boolean;
}>();

const isLinkActive = ref(false);
</script>

<template>
  <article class="grid grow grid-rows-[1fr_auto]">
    <div class="flex items-center justify-center">
      <RouterLink
        :to="{ name: 'project-detail', params: { slug: project.slug } }"
        @mouseenter="isLinkActive = true"
        @mouseleave="isLinkActive = false"
        class="flex w-fit flex-col items-center justify-center gap-5 lg:w-[70vh] lg:max-w-[80%]"
      >
        <div class="aspect-[3/2] w-full bg-black"></div>
        <div class="flex flex-col items-center gap-1 uppercase">
          <h2 class="text-2xl font-bold">
            <SlideUpAnimation :is-exiting="isRouteTransition">{{
              project.title
            }}</SlideUpAnimation>
          </h2>
          <p class="">
            <SlideUpAnimation :is-exiting="isRouteTransition">{{
              project.subtitle
            }}</SlideUpAnimation>
          </p>
        </div>
      </RouterLink>
    </div>
    <ProjectLink
      :slug="project.slug"
      :is-active="isLinkActive"
      :is-route-transition="isRouteTransition"
    />
  </article>
</template>
