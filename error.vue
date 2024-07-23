<script setup lang="ts">
import type { NuxtError } from "#app"

const props = defineProps({
  error: Object as () => NuxtError,
})

const handleError = () => clearError({ redirect: "/" })
</script>

<template>
  <div class="page-wrapper h-dvh">
    <NuxtImg class="h-1/4 w-1/4" src="/assets/img/NotFound.png"></NuxtImg>
    <span class="text-4xl font-bold">{{ error?.statusCode }}!</span>
    <button class="text-2xl m-4 border-t-black border-2" @click="handleError">
      Back to homepage
    </button>
  </div>
</template>
