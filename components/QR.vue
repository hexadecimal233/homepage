<script setup lang="ts">
defineProps<{
  color: string
  name: string
  imgUrl: string
}>()
</script>

<template>
  <div class="qr-container" :style="{ '--the-qr-color': color }">
    <div class="qr-wrapper">
      <img class="qr-img" :src="imgUrl" />
      <span class="qr-text">{{ name }}</span>
    </div>
  </div>
</template>

<style>
.qr-container {
  width: 15rem;
  height: 12rem;
  background-color: var(--the-qr-color);
  border-radius: 0.5rem;
  position: relative;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.5);
  /* TODO: Add a color variable */
}

.qr-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: -4rem;
}

.qr-img {
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.5);
  width: 75%;
  border-radius: 0.5rem;
}

.qr-text {
  margin-top: 1.25rem;
  color: white;
  font-weight: 600;
  font-size: large;
}
</style>
