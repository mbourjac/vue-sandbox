<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router';
import { useRouteTransition } from '@/composables/use-route-transition';
import SlideUpAnimation from '@/components/SlideUpAnimation.vue';
import { computed } from 'vue';
import { PROJECTS } from '@/constants';
import LeftArrowIcon from '@/components/LeftArrowIcon.vue';

const route = useRoute();
const { isRouteTransition, page } = useRouteTransition();

const project = computed(() => {
  return PROJECTS.find((project) => project.slug === route.params.slug)!;
});

const overviewWords = computed(() => {
  const words = project.value.overview.split(' ') || [];

  return words.map((word, index) =>
    index < words.length - 1 ? `${word}\u00A0` : word
  );
});
</script>

<template>
  <div ref="page" class="grid grow grid-cols-[7fr_3fr]">
    <div
      class="flex h-[calc(100vh-3.375rem)] flex-col gap-32 overflow-auto border-r border-black"
    >
      <main class="flex flex-col gap-32 p-5">
        <RouterLink :to="{ name: 'projects' }">
          <span class="sr-only">Back to projects</span>
          <LeftArrowIcon :is-aria-hidden="true" />
        </RouterLink>
        <div>
          <h1
            class="border-b border-black py-3.5 text-[3vw] font-bold uppercase leading-none"
          >
            <SlideUpAnimation :is-exiting="isRouteTransition">{{
              project.title
            }}</SlideUpAnimation>
          </h1>
          <div class="flex flex-col gap-5 py-5">
            <div
              v-for="(image, index) in project.images"
              :key="index"
              class="aspect-[3/2] w-full bg-black"
            ></div>
          </div>
        </div>
      </main>
      <footer class="ml-5 bg-white">
        <div class="h-14 border-t border-black pb-2 pt-3">
          <div class="size-8 rounded-full bg-black"></div>
        </div>
      </footer>
    </div>
    <aside
      class="flex h-[calc(100vh-3.375rem)] flex-col justify-between overflow-auto text-sm"
    >
      <div class="flex flex-col gap-12 p-5">
        <div class="flex flex-col gap-4">
          <h2 class="font-semibold">
            <SlideUpAnimation :is-exiting="isRouteTransition"
              >Overview</SlideUpAnimation
            >
          </h2>
          <p class="flex flex-wrap">
            <span class="sr-only">{{ project.overview }}</span>
            <span
              v-for="(word, index) in overviewWords"
              :key="index"
              aria-hidden="true"
            >
              <SlideUpAnimation :is-exiting="isRouteTransition">
                {{ word }}
              </SlideUpAnimation>
            </span>
          </p>
        </div>
        <div class="flex flex-col gap-4">
          <h2 class="font-semibold">
            <SlideUpAnimation :is-exiting="isRouteTransition"
              >Lorem ipsum</SlideUpAnimation
            >
          </h2>
          <ul>
            <li v-for="service in project.services" :key="service">
              <SlideUpAnimation :is-exiting="isRouteTransition">{{
                service
              }}</SlideUpAnimation>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  </div>
</template>
