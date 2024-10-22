<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import HeaderLogo from './components/HeaderLogo.vue';
</script>

<template>
  <div class="flex h-dvh flex-col overflow-hidden">
    <header class="px-5">
      <div
        class="flex items-center justify-between border-b border-black py-3.5"
      >
        <HeaderLogo />
        <nav class="flex items-center gap-4 text-2xl leading-none">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/projects">Projects</RouterLink>
          <RouterLink to="/contact">Contact</RouterLink>
        </nav>
      </div>
    </header>
    <main class="grow px-5 py-3.5">
      <RouterView />
    </main>
  </div>
</template>
