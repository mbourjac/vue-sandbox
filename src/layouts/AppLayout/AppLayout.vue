<script setup lang="ts">
import HeaderLogo from './HeaderLogo.vue';
import NavLink from './NavLink.vue';
</script>

<template>
  <div class="flex h-dvh flex-col overflow-hidden">
    <header class="px-5">
      <div
        class="flex items-center justify-between border-b border-black py-3.5"
      >
        <HeaderLogo />
        <nav class="flex items-center gap-4 text-2xl leading-none">
          <NavLink :to="{ name: 'home' }">Home</NavLink>
          <NavLink :to="{ name: 'projects' }">Projects</NavLink>
          <NavLink :to="{ name: 'contact' }">Contact</NavLink>
        </nav>
      </div>
    </header>
    <slot />
  </div>
</template>
