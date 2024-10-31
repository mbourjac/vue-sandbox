<script setup lang="ts">
import { RouterLink, type RouterLinkProps } from 'vue-router';

defineOptions({
  inheritAttrs: false,
});

const props = defineProps<RouterLinkProps>();
</script>

<template>
  <router-link v-bind="props" custom v-slot="{ isActive, href, navigate }">
    <a
      v-bind="$attrs"
      :href="href"
      @click="navigate"
      :class="['group flex', { activeClass: isActive }]"
    >
      <span class="inline-flex items-center gap-2">
        <span
          class="relative flex size-[10px] items-center justify-center rounded-full bg-black"
        >
          <span
            :class="[
              'size-2 rounded-full bg-white transition-transform duration-300 group-hover:scale-0',
              { 'scale-0': isActive },
            ]"
          ></span>
        </span>
        <span>
          <slot />
        </span>
      </span>
    </a>
  </router-link>
</template>
