<template>
  <Section>
    <div class="flex-col items-center justify-center text-center">
      <img
        src="https://gravatar.loli.net/avatar/daca850545a454e39660992d1163e88e?size=256&cache=1718432418567"
        class="w-40 h-40 m-16 rounded-full shadow-md hover:rotate-[1turn] transition-transform duration-500"
        title="avatar"
      />
      <div class="text-4xl">Ciallo ～(∠・ω&lt; )⌒★！</div>
      <div class="text-sm">(Swipe down)</div>
      <div class="fadingbutton">↓</div>
      <div>如何找到我 (/≧▽≦)/</div>
      <div class="flex flex-wrap items-center justify-center *:m-2">
        <SocialIcon icon="mdi--email" href="mailto:contact@onlyra1n.top" />
        <SocialIcon class="qqid" icon="simple-icons--tencentqq" />
        <SocialIcon
          class="qqqun"
          icon="simple-icons--tencentqq"
          href="http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=bsVstl7UyIWYLk22GiaApKupGQB5haF0&authKey=%2BPOWzI6ZTA42YuQwoUeiIp4yKAyGEQR5Go6LUu6KbBHMwmcGsDf%2F78bH6aFC4TBy&noverify=0&group_code=904616368"
        />
        <SocialIcon
          icon="simple-icons--youtube"
          href="https://www.youtube.com/channel/UC3EJEVxrGTFeM1MNkqaNSJQ"
        />
        <SocialIcon
          icon="simple-icons--discord"
          href="https://discord.com/users/590761803244634113"
        />
        <SocialIcon
          icon="simple-icons--github"
          href="https://github.com/hexadecimal233"
        />
        <SocialIcon
          icon="simple-icons--telegram"
          href="https://t.me/hexadecimal233"
        />
        <SocialIcon
          icon="simple-icons--bilibili"
          href="https://space.bilibili.com/174927495"
        />
        <SocialIcon icon="simple-icons--x" href="https://twitter.com/llkawi_" />
        <SocialIcon
          icon="simple-icons--steam"
          href="https://steamcommunity.com/profiles/76561198843801051"
        />
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

.qqqun::before {
  position: absolute;
  content: "群";
  font-size: 14px;
  color: tan;
  z-index: 1;
}

.qqid::before {
  position: absolute;
  content: "号";
  font-size: 14px;
  color: tan;
  z-index: 1;
}

/* TODO: Fix text align */

.qqid::after {
  position: absolute;
  content: "QQ号：2593828650";
  text-align: center;
  width: 12rem;
  border: 1px solid;
  border-radius: 5px;
  padding: 5px;
  background: white;
  color: black;
  opacity: 0;
  transform: translateX(-50%) translateY(-185%);
  transition: 0.25s cubic-bezier(0.25, 0.85, 0.46, 0.96);
}

.qqid:hover::after {
  opacity: 1;
}
</style>
