<template>
  <div class="navigation">
    <NuxtLink to="/" class="text-pink-300 nav-item flex-1">PHEQOR</NuxtLink>
    <NuxtLink to="https://me.onlyra1n.top/" target="_blank" class="text-pink-300 nav-item flex-1">博客</NuxtLink>
    <NuxtLink to="/donation" class="text-pink-300 nav-item flex-1">捐助</NuxtLink>
  </div>
  <div>
    <slot />
  </div>

</template>

<style>
.navigation {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 3rem;
  background-color: #fff7;
  backdrop-filter: blur(5px);
  z-index: 999;
}

.nav-item {
  padding: 10px;
  width: max-content;
}
</style>

<!-- TODO: Redesign the navbar. -->