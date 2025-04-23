<template>
  <Section>
    <div class="flex-col items-center justify-center text-center">
      <img
        src="https://gravatar.loli.net/avatar/daca850545a454e39660992d1163e88e?size=256&cache=1718432418567"
        class="w-40 h-40 m-16 rounded-full shadow-md hover:rotate-[1turn] transition-transform duration-500"
        title="avatar" />
      <div class="text-4xl">Ciallo ～(∠・ω&lt; )⌒★！</div>
      <div class="text-sm">(Swipe down)</div>
      <div class="fadingbutton">↓</div>
      <div>找到我 (/≧▽≦)/</div>
      <div class="flex flex-wrap items-center justify-center *:m-2">
        <SocialIcon
          icon="simple-icons--tencentqq"
          href="http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=bsVstl7UyIWYLk22GiaApKupGQB5haF0&authKey=%2BPOWzI6ZTA42YuQwoUeiIp4yKAyGEQR5Go6LUu6KbBHMwmcGsDf%2F78bH6aFC4TBy&noverify=0&group_code=904616368" />
        <SocialIcon
          icon="simple-icons--youtube"
          href="https://www.youtube.com/channel/UC3EJEVxrGTFeM1MNkqaNSJQ" />
        <SocialIcon
          icon="simple-icons--github"
          href="https://github.com/hexadecimal233" />
        <SocialIcon
          icon="simple-icons--bilibili"
          href="https://space.bilibili.com/174927495" />
        <SocialIcon icon="simple-icons--x" href="https://twitter.com/llkawi_" />
        <SocialIcon
          icon="simple-icons--steam"
          href="https://steamcommunity.com/profiles/76561198843801051" />
        <SocialIcon
          icon="simple-icons--pixiv"
          href="https://www.pixiv.net/users/64711023" />、
        <SocialIcon
          icon="simple-icons--zhihu"
          href="https://www.zhihu.com/people/onlyrain233" />
        <SocialIcon
          icon="simple-icons--niconico"
          href="https://bgm.tv/user/807162" />
      </div>
    </div>
  </Section>
</template>

<style scoped>
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

.qqid:hover::after {
  opacity: 1;
}
</style>
