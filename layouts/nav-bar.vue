<script setup lang="ts"></script>

<template>
  <div class="navigation">
    <NuxtLink to="/" class="nav-item w-16">PHEQOR</NuxtLink>
    <a href="https://me.onlyra1n.top/" target="_blank" class="nav-item">博客</a>
    <NuxtLink to="/donation" class="nav-item">赞助</NuxtLink>
    <NuxtLink to="/commission" class="nav-item">接单须知</NuxtLink>
  </div>
  <slot />
</template>

<style scoped>
.navigation {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3rem;
  background-color: #b8b8b833;
  box-shadow: 0 0 5px 0 var(--shadow-color);
  backdrop-filter: blur(5px);
  z-index: 999;
}

.nav-item {
  display: flex;
  align-items: center;
  padding: 10px;
  color: var(--text-color);
}
</style>
