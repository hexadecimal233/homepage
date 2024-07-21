<template>
  <div class="navigation">
    <NuxtLink to="/" class="nav-item">PHEQOR</NuxtLink>
    <a href="https://me.onlyra1n.top/" target="_blank" class="nav-item">博客</a>
    <NuxtLink to="/donation" class="nav-item">捐助</NuxtLink>
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
  padding-left: 10vw;
  height: 3rem;
  background-color: #b8b8b833;
  box-shadow: 0 0 5px 0 var(--shadow-color);
  backdrop-filter: blur(5px);
  z-index: 999;
}

.nav-item {
  text-align: center;
  padding: 10px;
  color: var(--text-color);
  padding-right: 53px;
}
</style>

<!-- TODO: Redesign the navbar. -->
