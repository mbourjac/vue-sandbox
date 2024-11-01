<script setup lang="ts">
import { useRouteTransition } from '@/composables/use-route-transition';
import { computed, ref } from 'vue';
import { PROJECTS } from '@/constants';
import HighlightedProject from './HighlightedProject.vue';
import ProjectCard from './ProjectCard.vue';

const projects = ref(PROJECTS);

const highlightedProject = computed(() => projects.value[0]);
const restProjects = computed(() => projects.value.slice(1));

const { isRouteTransition, page } = useRouteTransition();
</script>

<template>
  <div ref="page" class="relative flex grow">
    <main class="grid grow grid-cols-[3fr_1fr]">
      <section
        class="flex h-[calc(100vh-3.375rem)] overflow-auto border-r border-black p-5 pb-[5rem]"
      >
        <HighlightedProject
          :is-route-transition="isRouteTransition"
          :project="highlightedProject"
        />
      </section>
      <section class="flex h-[calc(100vh-3.375rem)] flex-col overflow-auto">
        <ul>
          <li v-for="(project, index) in restProjects" :key="project.slug">
            <ProjectCard
              :project="project"
              :is-last-project="index === restProjects.length - 1"
              :is-route-transition="isRouteTransition"
            />
          </li>
        </ul>
      </section>
    </main>
    <footer
      class="absolute bottom-0 col-start-1 mx-5 h-14 w-[calc(75vw-2.5rem)] border-t border-black bg-white pb-2 pt-3"
    >
      <div class="size-8 rounded-full bg-black"></div>
    </footer>
  </div>
</template>
