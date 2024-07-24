<script setup lang="ts">
import type { NuxtError } from "#app"

const props = defineProps({
  error: Object as () => NuxtError,
})
</script>

<template>
  <div class="h-dvh page-wrapper">
    <NuxtImg class="h-1/4 w-1/4" src="/assets/img/NotFound.png"></NuxtImg>
    <span class="text-4xl font-bold">{{ error?.statusCode }}!</span>
    <NuxtLink class="text-2xl m-4" href="/">Back to homepage</NuxtLink>
  </div>
</template>
