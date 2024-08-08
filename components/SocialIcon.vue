<script setup lang="ts">
defineProps<{
  icon: string
  href?: string | undefined
}>()
</script>

<template>
  <a class="social-icon" target="_blank" :href="href">
    <span class="iconify" :class="icon" />
  </a>
</template>

<style scoped>
/* 悬停放大 */

.social-icon {
  transition: 0.2s;
  font-size: 24px;

  &:hover {
    transform: scale(1.15);
    svg {
      fill: var(--hover-color);
    }
  }

  svg {
    transition: 0.2s;
    fill: var(--primary-color);
  }
}
</style>
