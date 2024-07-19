<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div class="page-wrapper">
    <SectionsGreeting />

    <BaseSection layer-name="Who Am I?">
      <p>16 岁(♂) 平平无奇高中生~ | 去追寻自己喜爱的 | INFP-A</p>
      <p>喜欢：编曲、设计、开发 (写代码和一些逆向)、游戏</p>
      <p>
        正在学习的：混剪、音频可视化、编曲、平面设计、3D 制作、绘画、音
        MAD、网络安全、全栈开发、Vue、游戏开发...
      </p>
      <p>想整个大活 | 选择困难症 | 咕咕咕......</p>
      <p>叫我 Pheqor / Hexadecimal 就行</p>
      <p>（其实是想不出什么好的 ID 了.....）</p>
      <p>
        头像是
        <NuxtLink href="https://x.com/Colon_BR">ころんびぁ</NuxtLink> 的！
      </p>
    </BaseSection>

    <BaseSection layer-name="XX会什么语言呢">
      <img
        src="https://img.shields.io/badge/Chinese_(Simplified)-4abf8a?style=flat-square&label=🏠简体中文"
      />
      <img
        src="https://img.shields.io/badge/English_(US)-4abf8a?logo=&style=flat-square&label=English"
      />
      <img
        src="https://img.shields.io/badge/Japanese-4abf8a?logo=&style=flat-square&label=日本語（划掉）"
      />
      <!-- TODO: Better Badges View-->
    </BaseSection>

    <SectionsProjects />

    <BaseSection layer-name="装备Showcase">
      <img
        src="https://img.shields.io/badge/OS-Windows_11-white?style=flat-square&logo=windows&color=0078d4"
      />
      <img
        src="https://img.shields.io/badge/Android-MIUI-ff9600?style=flat-square&logo=xiaomi&logoColor=ffffff"
      />
      <img
        src="https://img.shields.io/badge/Alienware-M15_R5-ff9600?style=flat-square&logo=alienware"
      />
      <img
        src="https://img.shields.io/badge/Redmi-K60Pro-ff9600?style=flat-square&logo=xiaomi&logoColor=ffffff"
      />
      <img
        src="https://img.shields.io/badge/Pioneer-DDJ_400-ee2222?style=flat-square"
      />
    </BaseSection>
  </div>
</template>

<style>
.page-wrapper {
  @apply flex flex-col items-center justify-center bg-gray-800 top-0;
}
</style>
