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
      <Motion preset="slideVisibleOnceRight" class="icon-items">
        <div class="icon-item" v-for="c in content" v-html="c"></div>
      </Motion>
    </div>
  </Section>
</template>

<style scoped>
.icon-section-name {
  @apply text-4xl;
  flex: 4;
  margin: 3rem;
}

.icon-items {
  @apply flex flex-wrap overflow-y-auto text-3xl;
  flex: 6;
}

.icon-item {
  display: flex;
  justify-content: center;
  position: relative;
  margin: 1rem;
  border-radius: 20px;
  background-color: var(--sub-bg);
  line-height: 100%;

  > * {
    display: flex;
    align-items: center;
    text-align: center;
    padding-inline: 1rem;
    padding-block: 0.25rem;
  }

  > *:nth-child(1) {
    border-radius: 20px;
    background-color: var(--primary-color-d);
  }
  > *:nth-child(2) {
    margin-right: 1rem;
  }
}
</style>
