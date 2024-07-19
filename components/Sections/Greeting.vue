<script setup lang="ts">
import { BilibiliIcon, DiscordIcon, GitHubIcon, MailDotRuIcon, SteamIcon, TelegramIcon, TencentQqIcon, XIcon, YouTubeIcon } from 'vue3-simple-icons'
</script>

<template>
  <div class="flex flex-col h-dvh w-dvw items-center justify-center text-white">
    <div class="text-center">
      <div class="text-4xl text-yellow-100 ">Ciallo ～(∠・ω< )⌒★！</div>
          <div class="text-sm">(Swipe down)</div>
          <div class="fadingbutton">↓</div>
          <div>如何找到我 (/≧▽≦)/</div>
          <div class="flex items-center justify-center *:m-2">
            <a target="_blank" href="mailto:contact@onlyra1n.top">
              <MailDotRuIcon style="fill: white" />
            </a>
            <a target="_blank" href="xxxx">
              <TencentQqIcon style="fill: white" />
            </a>
            <a target="_blank"
              href="http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=bsVstl7UyIWYLk22GiaApKupGQB5haF0&authKey=%2BPOWzI6ZTA42YuQwoUeiIp4yKAyGEQR5Go6LUu6KbBHMwmcGsDf%2F78bH6aFC4TBy&noverify=0&group_code=904616368">
              <TencentQqIcon style="fill: white" />
            </a>
            <!-- TODO: Add QQ Qun and Icon effects -->
            <a target="_blank" href="https://www.youtube.com/channel/UC3EJEVxrGTFeM1MNkqaNSJQ">
              <YouTubeIcon style="fill: white" />
            </a>
            <a target="_blank" href="https://discord.com/users/590761803244634113">
              <DiscordIcon style="fill: white" />
            </a>
            <a target="_blank" href="https://github.com/hexadecimal233">
              <GitHubIcon style="fill: white" />
            </a>
            <a target="_blank" href="https://t.me/hexadecimal233">
              <TelegramIcon style="fill: white" />
            </a>
            <a target="_blank" href="https://space.bilibili.com/174927495">
              <BilibiliIcon style="fill: white" />
            </a>
            <a target="_blank" href="https://twitter.com/llkawi_">
              <XIcon style="fill: white" />
            </a>
            <a target="_blank" href="https://steamcommunity.com/profiles/76561198843801051/">
              <SteamIcon style="fill: white" />
            </a>
          </div>
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
</style>


<!-- TODO: Add avatar (w/ rotating fx) using tailwindcss-->