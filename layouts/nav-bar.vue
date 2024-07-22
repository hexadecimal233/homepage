<template>
  <div class="navigation">
    <NuxtLink to="/" class="nav-item">PHEQOR</NuxtLink>
    <a href="https://me.onlyra1n.top/" target="_blank" class="nav-item">博客</a>
    <NuxtLink to="/donation" class="nav-item">捐赠</NuxtLink>
  </div>
  <div>
    <slot />
  </div>
</template>

<style>
.navigation {
  @apply fixed w-full flex h-12 bg-[#b8b8b833] shadow-[0_0_5px_0_var(--shadow-color)] backdrop-blur-[5px] z-[999] pl-[10vw] left-0 top-0;
}
.nav-item {
  @apply text-center text-[color:var(--text-color)] pr-[53px] p-2.5;
}
</style>

<!-- TODO: Redesign the navbar. -->
