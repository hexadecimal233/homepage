<template>
  <div class="proj">
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
        <a href="https://github.com/hexadecimal233/mcsm-reg" class="proj-title"
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
</template>
