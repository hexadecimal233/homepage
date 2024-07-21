<script setup lang="ts">
defineProps<{
  name: string
  content: string[]
}>()
</script>

<template>
  <Section>
    <div class="flex flex-row items-center justify-between">
      <div class="section-name">{{ name }}</div>

      <!-- TODO: 如果是ul+li做这种效果怎么样？ 加个逐个划入 -->

      <Motion preset="slideVisibleOnceRight" class="icon-items">
        <div class="icon-item" v-for="c in content" v-html="c"></div>
      </Motion>
    </div>
  </Section>
</template>

<style>
.section-name {
  @apply text-4xl;
  flex: 5;
}

.icon-items {
  @apply flex flex-wrap overflow-y-auto overflow-hidden text-3xl;
  flex: 4;

  @media screen and (max-width: 736px) {
    > * {
      width: 100%;
    }
  }
}

.icon-item {
  flex: 1 0 auto;
  position: relative;
  margin: 1rem;
  border-radius: 20px;
  background-color: var(--sub-bg);

  > * {
    text-align: center;
    padding-inline: 1rem;
  }

  > *:nth-child(1) {
    border-radius: 20px;
    background-color: var(--primary-color-d);
  }
  > *:nth-child(2) {
    margin-right: 1rem;
  }
}

img.icon-item-icon {
  width: 28px;

  svg {
    transition: 0.2s;
    width: 100%;
  }
}
</style>
