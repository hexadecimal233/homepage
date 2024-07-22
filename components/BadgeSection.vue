<script setup lang="ts">
defineProps<{
  name: string
  content: string[]
}>()
</script>

<template>
  <Section>
    <div class="items-center justify-between">
      <div class="icon-section-name">{{ name }}</div>

      <!-- TODO: 如果是ul+li做这种效果怎么样？ 加个逐个划入 -->

      <Motion preset="slideVisibleOnceRight" class="icon-items">
        <div class="icon-item" v-for="c in content" v-html="c"></div>
      </Motion>
    </div>
  </Section>
</template>

<style>
.icon-section-name {
  @apply flex-[4] m-12;
  @apply text-4xl;
}
.icon-items {
  @apply flex-[6];
  @apply flex flex-wrap overflow-y-auto text-3xl;
}
.icon-item {
  @apply flex justify-center relative bg-[color:var(--sub-bg)] leading-[100%] m-4 rounded-[20px];
}
.icon-item > * {
  @apply flex items-center text-center;
  padding-inline: 1rem;
  padding-block: 0.25rem;
}
.icon-item > *:nth-child(1) {
  @apply bg-[color:var(--primary-color-d)] rounded-[20px];
}
.icon-item > *:nth-child(2) {
  @apply mr-4;
}
</style>
