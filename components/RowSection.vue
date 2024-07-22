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
  @apply text-4xl;
  flex: 2;
  margin: 3rem;
}

.section-content {
  @apply flex flex-col;
  flex: 1;

  > * {
    margin-bottom: 1rem;
  }
}

.section-content > .visible {
  opacity: 1;
  transform: none;
}
</style>

<!-- TODO: standardize margin & better section name (class + inherit) -->
