<script setup lang="ts">
const { isAriaHidden } = defineProps<{
  isAriaHidden?: boolean;
}>();
</script>

<template>
  <svg
    viewBox="0 0 64 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="h-2 w-auto"
    :aria-hidden="isAriaHidden"
  >
    <path
      d="M0 5.99999L10 11.7735L10 0.226493L0 5.99999ZM64 5L9 5L9 7L64 7L64 5Z"
      fill="black"
    />
  </svg>
</template>
