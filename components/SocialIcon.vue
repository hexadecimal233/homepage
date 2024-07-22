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

.social-icon {
  transition: 0.2s;
  width: 28px;

  &:hover {
    transform: scale(1.15);
    svg {
      fill: var(--hover-color);
    }
  }

  svg {
    transition: 0.2s;
    width: 100%;
    fill: var(--primary-color);
  }
}
</style>
