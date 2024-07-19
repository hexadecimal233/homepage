<script setup lang="ts">
defineProps<{
  layerName: string
}>()
</script>

<template>
  <div class="layer">
    <div class="layer-name">{{ layerName }}</div>
    <div v-motion-slide-visible-once-right class="layer-content">
      <slot />
    </div>
  </div>
</template>
