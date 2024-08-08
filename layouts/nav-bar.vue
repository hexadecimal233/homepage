<template>
  <nav
    class="fixed top-0 left-0 w-full h-14 shadow-md p-4 z-[9996] bg-[#b8b8b833] text-xl backdrop-blur-sm"
  >
    <div class="nav-bar flex items-center justify-between mx-4">
      <NuxtLink to="/" class="w-16">PHEQOR</NuxtLink>
      <ul class="hidden md:flex ml-4 space-x-4">
        <li v-for="(url, name) in navItems" :key="name">
          <NuxtLink :target="url.blank ? '_blank' : null" :to="url.url">{{
            name
          }}</NuxtLink>
        </li>
      </ul>
    </div>
  </nav>

  <!-- That's odd: backdrop-blur creates a mask to prevent fixed elements from displaying... So here's the workaround. -->
  <button
    @click="toggleDropdown"
    class="fixed md:hidden top-4 right-4 z-[9999] *:rounded-full"
    :class="{
      open: dropdownOpen,
    }"
  >
    <div class="bar-1"></div>
    <div class="bar-2"></div>
    <div class="bar-3"></div>
  </button>

  <div
    class="fixed top-0 right-0 h-full w-64 bg-white z-[9998] shadow-md transition-transform"
    :class="{
      'translate-x-full': !dropdownOpen,
      'translate-x-0': dropdownOpen,
    }"
  >
    <ul class="pt-12 space-y-4">
      <li v-for="(url, name) in navItems" :key="name" class="p-4">
        <NuxtLink :target="url.blank ? '_blank' : null" :to="url.url">{{
          name
        }}</NuxtLink>
      </li>
    </ul>
  </div>

  <div
    class="fixed inset-0 bg-black z-[9997] transition"
    :class="{
      'opacity-0 pointer-events-none': !dropdownOpen,
      'opacity-50': dropdownOpen,
    }"
    @click="toggleDropdown"
  ></div>

  <slot />
</template>

<script lang="ts" setup>
import { ref } from "vue"

const dropdownOpen = ref(false)
const navItems = {
  博客: { url: "https://me.onlyra1n.top/", blank: true },
  赞助: { url: "/donation", blank: false },
  //关于接单: { url: "/commission", blank: false },
}

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value
}
</script>

<style scoped>
@media (min-width: 768px) {
  .translate-x-0 {
    transform: translateX(0);
  }
  .-translate-x-full {
    transform: translateX(-100%);
  }
}

.nav-bar > * {
  align-items: center;
}

.bar-1,
.bar-2,
.bar-3 {
  width: 25px;
  height: 4px;
  background-color: #333;
  margin: 4px 0;
  transition: 0.4s;
}

.open .bar-1 {
  transform: rotate(-45deg) translate(-5px, 6px);
}

.open .bar-2 {
  opacity: 0;
}

.open .bar-3 {
  transform: rotate(45deg) translate(-5px, -6px);
}
</style>
