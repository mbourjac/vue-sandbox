<script setup lang="ts">
import SlideUpAnimation from '@/components/SlideUpAnimation.vue';
import { useRouteTransition } from '@/composables/use-route-transition';
import ContactLink from './ContactLink.vue';

const { isRouteTransition, page } = useRouteTransition();
</script>

<template>
  <div ref="page" class="relative flex grow">
    <main class="grid grow grid-cols-[3fr_7fr]">
      <section
        class="flex h-[calc(100vh-3.375rem)] border-r border-black p-5 pb-[4.625rem]"
      >
        <div class="h-[65vh] w-full self-end bg-black"></div>
      </section>
      <section
        class="relative grid h-[calc(100vh-3.375rem)] grid-rows-[1fr_auto] overflow-auto px-5 py-3 pb-[4.625rem]"
      >
        <div class="flex flex-col gap-8 self-center py-12">
          <div class="flex flex-col gap-2">
            <h1 class="text-[3.95vw] font-bold leading-none">
              <SlideUpAnimation :is-exiting="isRouteTransition"
                >Get in touch.</SlideUpAnimation
              >
            </h1>
            <p class="max-w-[60%] text-2xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
              iste architecto id rerum officiis eveniet iure fuga.
            </p>
          </div>
          <div class="flex max-w-[30%] flex-col gap-2">
            <ContactLink href="" :is-exiting="isRouteTransition"
              >Email</ContactLink
            >
            <ContactLink href="" :is-exiting="isRouteTransition"
              >LinkedIn</ContactLink
            >
            <ContactLink href="" :is-exiting="isRouteTransition"
              >Instagram</ContactLink
            >
          </div>
        </div>
        <div class="max-w-[50%]">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima,
            nam quasi. Pariatur laudantium, repellat atque nobis tempora
            laboriosam impedit earum magni doloribus blanditiis aperiam sapiente
            veniam aliquam, eligendi, consectetur quia!
          </p>
        </div>
      </section>
    </main>
    <footer
      class="absolute bottom-0 col-start-1 mx-5 h-14 w-[calc(100vw-2.5rem)] border-t border-black bg-white pb-2 pt-3"
    >
      <div class="size-8 rounded-full bg-black"></div>
    </footer>
  </div>
</template>
