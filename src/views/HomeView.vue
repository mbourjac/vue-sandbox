<script setup lang="ts">
import SlideUpAnimation from '@/components/SlideUpAnimation.vue';
import { ref } from 'vue';
import { useRouteTransition } from '@/composables/use-route-transition';

const headingText = ref([
  'Lorem ipsum dolor, sit amet',
  'consectetur adipisicing elit.',
  'Provident, veritatis. Nihil illo vel',
  'ipsum rem in repellat saepe rerum.',
]);

const { isRouteTransition, page } = useRouteTransition();
</script>

<template>
  <div ref="page" class="relative flex grow">
    <main class="grid grow grid-cols-[7fr_3fr]">
      <section
        class="relative flex h-[calc(100vh-3.375rem)] flex-col justify-between overflow-auto border-r border-black p-5 pb-[3.375rem]"
      >
        <h1 class="text-[3.95vw] font-bold leading-[1.15]">
          <template v-for="(line, index) in headingText" :key="index">
            <SlideUpAnimation
              :customClass="index === 0 ? 'indent-[8vw]' : undefined"
              :isExiting="isRouteTransition"
            >
              {{ line }}
            </SlideUpAnimation>
          </template>
        </h1>
        <div
          class="bottom-0 left-0 right-0 mb-[13vw] mt-[10vw] pb-4 md:absolute md:mx-5 md:mb-[17.5vw] md:pb-0 lg:mb-[16vw] xl:mb-[14.5vw] 2xl:mb-[13.75vw]"
        >
          <div class="h-[1px] w-full skew-y-[-15deg] bg-black"></div>
        </div>
      </section>
      <section class="flex p-5">
        <div class="h-[65vh] w-full self-end bg-black"></div>
      </section>
    </main>
    <footer
      class="absolute bottom-0 col-start-1 mx-5 h-14 w-[calc(70vw-2.5rem)] border-t border-black bg-white pb-2 pt-3"
    >
      <div class="size-8 rounded-full bg-black"></div>
    </footer>
  </div>
</template>
