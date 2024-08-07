<template>
  <nav
    class="fixed top-0 left-0 w-full h-12 shadow-md p-4 z-[9999] bg-[#b8b8b833]"
  >
    <div class="nav-bar flex items-center justify-between mx-4">
      <NuxtLink to="/" class="w-16">PHEQOR</NuxtLink>
      <ul class="hidden md:flex ml-4 space-x-4">
        <li v-for="item in navItems" :key="item" class="hover:underline">
          <NuxtLink href="#">{{ item }}</NuxtLink>
        </li>
      </ul>

      <button
        @click="toggleDropdown"
        class="md:hidden z-[60]"
        :class="{
          open: dropdownOpen,
        }"
      >
        <div class="relative flex-col *:mb-[5px]">
          <div class="bar-1"></div>
          <div class="bar-2"></div>
          <div class="bar-3"></div>
        </div>
      </button>
    </div>

    <div
      class="fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-md transition-transform"
      :class="{
        'translate-x-full': !dropdownOpen,
        'translate-x-0': dropdownOpen,
      }"
    >
      <ul class="pt-12 space-y-4">
        <li v-for="item in navItems" :key="item" class="hover:underline p-4">
          <a href="#">{{ item }}</a>
        </li>
      </ul>
    </div>
  </nav>

  <div
    v-show="dropdownOpen"
    class="fixed inset-0 bg-black bg-opacity-50 z-40"
    @click="toggleDropdown"
  ></div>

  <slot />
</template>

<script lang="ts" setup>
import { ref } from "vue"

const dropdownOpen = ref(false)
const navItems = ["Home", "About", "Services", "Contact"]

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
  width: 35px;
  height: 5px;
  background-color: #333;
  transition: 0.4s;
}

.open .bar-1 {
  transform: rotate(-45deg) translate(-9px, 6px);
}
.open .bar-2 {
  opacity: 0;
}
.open .bar-3 {
  transform: rotate(45deg) translate(-8px, -8px);
}
</style>
