<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div class="flex felx-col bg-slate-400 h-dvh w-dvw items-center justify-center">
    <div class="font-sans text-center">
      <div class="text-4xl text-yellow-100 ">Hello there!</div>
      <div class="text-sm text-white">(Swipe down)</div>
      <div class="fadingbutton">↓</div>
    </div>

  </div>
</template>

<style lang="css">
@keyframes blink {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

.fadingbutton {
  animation: blink 1s 0s infinite;
}
</style>