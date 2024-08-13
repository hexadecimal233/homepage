<template>
  <Section>
    <div class="flex-col items-center">
      <div class="text-4xl flex-[2] m-8">与我联系</div>
      <div
        v-motion-slide-visible-once-bottom
        class="flex flex-1 buttons-container">
        <!-- TODO: Better font size & layout -->
        <div>
          <span class="iconify simple-icons--tencentqq"></span>
          QQ号: 2593828650
        </div>
        <div class="flex flex-col justify-center items-center">
          <span class="iconify simple-icons--discord"></span>
          Discord:
          <a
            href="https://discord.com/users/590761803244634113"
            target="_blank">
            hexadecimal_nya
          </a>

          <a href="https://discord.gg/ABykspBYVz" target="_blank">
            <img
              src="https://img.shields.io/discord/1272325246015504414?color=7289DA&label=Discord&logo=discord&logoColor=white&style=flat-square"
              alt="Discord" />
          </a>
        </div>
      </div>
    </div>
  </Section>
</template>

<style scoped>
.buttons-container > * {
  @apply flex flex-col items-center mx-4;
}
</style>
