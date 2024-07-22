<template>
  <Section>
    <div class="flex-col">
      <div class="proj-name">
        作为一个开发者,<br />
        正在学习全栈开发...<br />
        我参与开发的项目:
      </div>
      <div v-motion-slide-visible-once-bottom class="proj-content">
        <div class="card">
          <a
            href="https://github.com/hexadecimal233/bili-signature"
            class="proj-title"
            >bili-signature</a
          >
          <div class="proj-desc">自动改签名~</div>
        </div>
        <div class="card">
          <a
            href="https://github.com/hexadecimal233/chongchong-free"
            class="proj-title"
            >chongchong-free
          </a>
          <div class="proj-desc">免费下载虫虫钢琴琴谱</div>
        </div>
        <div class="card archive">
          <a
            href="https://github.com/hexadecimal233/zeitgeist-addon"
            class="proj-title"
            >zeitgeist-addon</a
          >
          <div class="proj-desc">Meteor的一个插件</div>
        </div>
        <div class="card">
          <a
            href="https://github.com/hexadecimal233/Windows-Store-Downloader"
            class="proj-title"
            >Windows-Store-Downloader</a
          >
          <div class="proj-desc">Windows Store appx包下载器</div>
        </div>
        <div class="card archive">
          <a
            href="https://github.com/hexadecimal233/mcsm-reg"
            class="proj-title"
            >mcsm-reg</a
          >
          <div class="proj-desc">MCSM的一个注册WebUI</div>
        </div>
        <div class="card">
          <div class="proj-title">And more...</div>
          <div class="proj-desc">没有了！！！</div>
        </div>
      </div>
    </div>
  </Section>
</template>

<style>
.proj-name {
  @apply mt-0 mb-4 mx-0 pb-4 border-b-[solid];
  @apply text-4xl;
}
.proj-content {
  @apply h-[60vh] p-4;
  @apply flex flex-wrap overflow-y-auto;
}
.proj-content .card {
  @apply flex-[1_0_auto];
}
.card {
  @apply flex flex-col h-40 w-80 bg-[color:var(--sub-bg)] shadow-[0px_0px_12px_1px_var(--shadow-color)] ml-0 mr-4 mt-0 mb-4 rounded-[25px];
}
.card * {
  @apply p-2 mb-2;
  font-family: Arial, Helvetica, sans-serif;
}
.card .proj-title {
  @apply text-2xl;
}
.card .proj-desc {
  @apply text-base;
}
.card.archive {
  @apply brightness-[0.94];
}
.card.archive > .proj-title::before {
  @apply content-["📦"] mr-1;
}
</style>
