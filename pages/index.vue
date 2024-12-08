<script setup lang="ts">
const language = [
  "<span>Chinese (Simplified)</span><span>🏠简体中文</span>",
  "<span>English</span><span>英语</span>",
  "<del>Japanese</del><del>日本語（划掉，想学</del>",
]
const gear = [
  "<span>主力 OS</span><span>Windows 11</span>",
  "<span>Laptop</span><span>Alienware M15-R5</span>",
  "<span>Android</span><span>Redmi K60Pro MIUI</span>",
  "<span>Pioneer</span><span>DDJ 400</span>",
  "<span>Arturia</span><span>Minilab 3</span>",
  "<span>Wacom</span><span>CTL-472</span>",
  "<span>Sony</span><span>A-6700</span>",
  "<span>Blue</span><span>Yeti</span>",
]

const todo = [
  "<span>🕊🕊🕊</span><span>修修一些坏掉的样式...</span>",
]

const age = Math.floor(
  (new Date().getTime() - new Date("2007/11/08").getTime()) /
    1000 /
    60 /
    60 /
    24 /
    365
)
</script>

<template>
  <div class="page-wrapper">
    <Greeting />

    <RowSection name="Who Am I?">
      <p>{{ age }} 岁，是学生</p>
      <p>一只平平无奇的高中牲，prob at Shanghai</p>
      <p>平常没什么事会敲代码和编曲，</p>
      <p>喜欢：编曲、设计、开发 (写代码和一些逆向)、游戏</p>
      <p>
        正在学习的：混剪、音频可视化、编曲、平面设计、3D 制作、绘画、音
        MAD、网络安全、全栈开发、Vue、游戏开发...
      </p>
      <p>想整活，但很容易咕咕咕......所以有些项目经常会因此烂尾（悲）</p>
      <p>
        PS: 头像是
        <a href="https://x.com/Colon_BR">ころんびぁ</a>
        的！
      </p>
    </RowSection>

    <ButtonsSection />

    <BadgeSection name="语言技能：" :content="language"></BadgeSection>

    <ProjectsSection />

    <BadgeSection name="我的装备" :content="gear"></BadgeSection>

    <BadgeSection name="TODO-list" :content="todo"></BadgeSection>
  </div>
</template>
