<script setup lang="ts">
import {
  siBilibili,
  siDiscord,
  siGithub,
  siMaildotru,
  siSteam,
  siTelegram,
  siTencentqq,
  siX,
  siYoutube,
} from "simple-icons"
</script>

<template>
  <!-- FIXME: Right side empty space -->
  <div class="flex flex-col h-dvh w-dvw items-center justify-center text-white">
    <img
      src="https://gravatar.loli.net/avatar/daca850545a454e39660992d1163e88e?size=256&cache=1718432418567"
      class="w-40 h-40 m-16 rounded-full border-4 border-white hover:rotate-[1turn] transition-transform duration-500"
      title="avatar"
    />
    <div class="text-4xl text-yellow-100">Ciallo ～(∠・ω&lt; )⌒★！</div>
    <div class="text-sm">(Swipe down)</div>
    <div class="fadingbutton">↓</div>
    <div>如何找到我 (/≧▽≦)/</div>
    <div class="flex items-center justify-center *:m-2">
      <!-- TODO: Add Icon effects -->
      <a
        target="_blank"
        href="mailto:contact@onlyra1n.top"
        v-html="siMaildotru.svg"
      />
      <a class="qqid" v-html="siTencentqq.svg" />
      <a
        target="_blank"
        href="http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=bsVstl7UyIWYLk22GiaApKupGQB5haF0&authKey=%2BPOWzI6ZTA42YuQwoUeiIp4yKAyGEQR5Go6LUu6KbBHMwmcGsDf%2F78bH6aFC4TBy&noverify=0&group_code=904616368"
        v-html="siTencentqq.svg"
      />
      <a
        target="_blank"
        href="https://www.youtube.com/channel/UC3EJEVxrGTFeM1MNkqaNSJQ"
        v-html="siYoutube.svg"
      />
      <a
        target="_blank"
        href="https://discord.com/users/590761803244634113"
        v-html="siDiscord.svg"
      />
      <a
        target="_blank"
        href="https://github.com/hexadecimal233"
        v-html="siGithub.svg"
      />
      <a
        target="_blank"
        href="https://t.me/hexadecimal233"
        v-html="siTelegram.svg"
      />
      <a
        target="_blank"
        href="https://space.bilibili.com/174927495"
        v-html="siBilibili.svg"
      />
      <a target="_blank" href="https://twitter.com/llkawi_" v-html="siX.svg" />
      <a
        target="_blank"
        href="https://steamcommunity.com/profiles/76561198843801051"
        v-html="siSteam.svg"
      />
    </div>
  </div>
</template>

<style>
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

/* 悬停放大 */

a { 
  transition: 0.2s;
  
  &:hover {
    transform: scale(1.25);
  }
}

a > svg {
  width: 28px;
  height: 28px;
  fill: white;
}

.qqid > svg {
  fill: #47b7e6;
}

.qqid::after {
  position: absolute;
  content: "QQ号：2593828650";
  border: 1px solid;
  border-radius: 5px;
  padding: 5px;
  background: white;
  color: black;
  opacity: 0;
  transform: translateX(-50%) translateY(-40px);
  transition: 0.5s cubic-bezier(0.25, 0.85, 0.46, 0.96);
}

.qqid:hover::after {
  opacity: 1;
  transform: translateX(-50%) translateY(-200%);
}
</style>
