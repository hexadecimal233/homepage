<script setup lang="ts">
import type { SimpleIcon } from "simple-icons"

defineProps<{
  icon: SimpleIcon
  href?: string | undefined
}>()
</script>

<template>
  <a class="social-icon" target="_blank" :href="href">
    <span v-html="icon.svg" />
  </a>
</template>

<style>
/* 悬停放大 */

/* 悬停放大 */
.social-icon {
  @apply transition-[0.2s] w-7 hover:scale-[1.15];
}
.social-icon:hover svg {
  @apply fill-[var(--hover-color)];
}
.social-icon svg {
  @apply transition-[0.2s] w-full fill-[var(--primary-color)];
}
</style>
