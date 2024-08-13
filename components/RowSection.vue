<script setup lang="ts">
defineProps<{
  name: string
}>()
</script>

<template>
  <Section>
    <div class="items-center justify-between">
      <div class="text-4xl flex-[2] m-8">{{ name }}</div>
      <div
        v-motion-slide-visible-once-right
        class="flex flex-col flex-1 [&>*]:mb-4"
      >
        <slot />
      </div>
    </div>
  </Section>
</template>

<!-- TODO: standardize margin & better section name (class + inherit) -->
