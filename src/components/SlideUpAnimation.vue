<script setup lang="ts">
import gsap from 'gsap';
import { onMounted, useTemplateRef } from 'vue';

const {
  initialYPercent = 100,
  duration = 0.4,
  customClass,
} = defineProps<{
  initialYPercent?: number;
  duration?: number;
  customClass?: string;
}>();

const line = useTemplateRef<HTMLElement>('line');

onMounted(() => {
  gsap.fromTo(
    line.value,
    { yPercent: initialYPercent },
    { yPercent: 0, duration }
  );
});
</script>

<template>
  <span class="block overflow-hidden">
    <span ref="line" :class="['block', customClass]">
      <slot />
    </span>
  </span>
</template>
