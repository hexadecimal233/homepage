<template>
  <Section>
    <div class="flex flex-col">
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
  @apply text-4xl;
  padding-bottom: 1rem;
  margin: 0 0 1rem 0;
  border-bottom: solid 2px;
}

.proj-content {
  @apply flex flex-wrap overflow-y-auto overflow-hidden;
  padding: 1rem;

  .card {
    flex: 1 0 auto;
  }
}

.card {
  display: flex;
  flex-direction: column;
  height: 10rem;
  width: 20rem;
  background-color: var(--sub-bg);
  border-radius: 25px;
  box-shadow: 0px 0px 12px 1px var(--shadow-color);
  margin: 0 1rem 1rem 0;

  * {
    @apply p-2 mb-2;
    font-family: Arial, Helvetica, sans-serif;
  }

  .proj-title {
    @apply text-2xl;
  }

  .proj-desc {
    @apply text-base;
  }
}

.card.archive {
  filter: brightness(0.9);
}

.card.archive > .proj-title::before {
  content: "📦";
  margin-right: 4px;
}

/* TODO: 你到底用不用Tailwind啊？？？？？ */
</style>
