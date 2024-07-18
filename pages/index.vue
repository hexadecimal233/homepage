<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div class="page-wrapper">
    <LayersGreeting />
    <LayersDescription />
    <LayersLanguages />
    <LayersProjects />
    <!--
    <img class="placeholder" src="//sdfsdf.dev/600x400.jpg"></img>
    -->
  </div>
</template>


<style>
.page-wrapper {
  @apply flex flex-col items-center w-full bg-gray-900 top-0;
}
</style>