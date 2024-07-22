<script setup lang="ts">
defineProps<{
  name: string
}>()
</script>

<template>
  <Section>
    <div class="items-center justify-between">
      <div class="section-name">{{ name }}</div>
      <div v-motion-slide-visible-once-right class="section-content">
        <slot />
      </div>
    </div>
  </Section>
</template>

<style>
.section-name {
  @apply flex-[2] m-12;
  @apply text-4xl;
}
.section-content {
  @apply flex-1;
  @apply flex flex-col;
}
.section-content > * {
  @apply mb-4;
}
.section-content > .visible {
  @apply opacity-100;
  transform: none;
}
</style>

<!-- TODO: standardize margin & better section name (class + inherit) -->
