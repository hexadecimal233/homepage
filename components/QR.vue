<script setup lang="ts">
defineProps<{
  color: string
  name: string
  imgUrl: string
}>()
</script>

<template>
  <div class="qr-container" :style="{ '--the-qr-color': color }">
    <div class="qr-bg"></div>
    <div class="qr-wrapper">
      <img class="qr-img" :src="imgUrl" />
      <span class="qr-text">{{ name }}</span>
    </div>
  </div>
</template>

<style>
.qr-container {
  position: relative;
  width: 15rem;
  height: 16rem;
  margin: 1rem;
  /* TODO: Add a color variable */
}

.qr-bg {
  position: absolute;
  top: 4rem;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--the-qr-color);
  border-radius: 0.5rem;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.5);
}

.qr-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-inline: 1.5rem;

  * {
    z-index: 2;
  }
}

.qr-img {
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.5);
  border-radius: 0.5rem;
}

.qr-text {
  margin-top: 1rem;
  color: white;
  font-weight: 600;
  font-size: large;
}
</style>
