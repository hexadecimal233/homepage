<template>
  <li
    v-for="(url, name) in navItems"
    :key="name"
    :class="{
      'p-4': mobile,
    }">
    <NuxtLink :target="url.blank ? '_blank' : null" :to="url.url">
      <span v-show="url.icon" class="iconify" :class="url.icon"></span>
      {{ name }}
    </NuxtLink>
  </li>
</template>

<script lang="ts" setup>
defineProps<{
  mobile: boolean
}>()
const navItems = {
  博客: { url: "https://me.onlyra1n.top/", blank: true, icon: "mdi--account" },
  赞助: { url: "/donation", blank: false, icon: "mdi--coffee" },
  //关于接单: { url: "/commission", blank: false },
}
</script>

<!-- TODO: Fix Alignment of fonts -->
