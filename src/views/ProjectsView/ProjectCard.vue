<script setup lang="ts">
import SlideUpAnimation from '@/components/SlideUpAnimation.vue';
import type { Project } from '@/types';
import { RouterLink } from 'vue-router';
import ProjectLink from './ProjectLink.vue';

const { project, isRouteTransition } = defineProps<{
  project: Project;
  isLastProject: boolean;
  isRouteTransition: boolean;
}>();
const { slug, title, subtitle } = project;
</script>

<template>
  <article>
    <RouterLink
      :class="[
        'group flex flex-col gap-5 p-5',
        {
          'border-b border-black': !isLastProject,
        },
      ]"
      :to="{ name: 'project-detail', params: { slug: slug } }"
    >
      <div class="aspect-[5/4] w-full bg-black"></div>
      <div class="flex flex-col gap-3">
        <div class="flex flex-col gap-0.5 uppercase">
          <h2 class="text-xl font-bold">
            <SlideUpAnimation
              :initialYPercent="80"
              :is-exiting="isRouteTransition"
              >{{ title }}</SlideUpAnimation
            >
          </h2>
          <p class="text-sm">
            <SlideUpAnimation
              :initialYPercent="80"
              :is-exiting="isRouteTransition"
              >{{ subtitle }}</SlideUpAnimation
            >
          </p>
        </div>
        <ProjectLink :slug="slug" :is-exiting="isRouteTransition" />
      </div>
    </RouterLink>
  </article>
</template>
