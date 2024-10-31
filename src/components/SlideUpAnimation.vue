<script setup lang="ts">
import gsap from 'gsap';
import { onMounted, useTemplateRef, watch } from 'vue';

const {
  initialYPercent = 100,
  duration = 0.4,
  customClass,
  isExiting,
} = defineProps<{
  initialYPercent?: number;
  duration?: number;
  customClass?: string;
  isExiting: boolean;
}>();

const line = useTemplateRef<HTMLElement>('line');

watch(
  () => isExiting,
  () => {
    gsap.to(line.value, { yPercent: initialYPercent, duration });
  }
);

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
