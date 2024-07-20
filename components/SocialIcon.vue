<script setup lang="ts">
import type { SimpleIcon } from "simple-icons"

defineProps<{
  icon: SimpleIcon
  href?: string | undefined
}>()
</script>

<template>
  <a class="social-icon" target="_blank" :href="href" v-html="icon.svg" />
</template>

<style>
/* 悬停放大 */

.social-icon {
  transition: 0.2s;

  &:hover {
    transform: scale(1.15);
    background: radial-gradient(#ffffff4f, #3984ff00 80%);
    > svg {
      fill: green;
    }
  }

  > svg {
    transition: 0.2s;
    width: 28px;
    height: 28px;
    fill: white;
  }
}
</style>

<!-- TODO: 换掉巨丑的配色 -->