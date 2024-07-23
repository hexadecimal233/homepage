<script setup lang="ts">
const language = [
  "<span>Chinese (Simplified)</span><span>🏠简体中文</span>",
  "<span>English</span><span>英语</span>",
  "<del>Japanese</del><del>日本語</del>",
]
const gear = [
  "<span>OS</span><span>Windows 11</span>",
  "<span>Android</span><span>MIUI</span>",
  "<span>Laptop</span><span>Alienware M15-R5</span>",
  "<span>Phone</span><span>Redmi K60Pro</span>",
  "<span>Pioneer</span><span>DDJ 400</span>",
]
</script>

<template>
  <div class="page-wrapper">
    <Greeting />

    <RowSection name="Who Am I?">
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
        <a href="https://x.com/Colon_BR">ころんびぁ</a> 的！
      </p>
    </RowSection>

    <BadgeSection name="我用什么语言呢" :content="language"> </BadgeSection>

    <ProjectsSection />

    <BadgeSection name="我的装备" :content="gear"> </BadgeSection>
  </div>
</template>