<template>
  <Section>
    <div class="flex-col items-center justify-center text-center">
      <span class="donation-name" style="width: 100%">赞助我</span>
      <div class="flex items-center">
        <a href="https://afdian.com/a/pheqor"
          ><img
            src="https://pic1.afdiancdn.com/static/img/welcome/button-sponsorme.png"
        /></a>
        <!--
        <a href="https://ko-fi.com/pheqor"
          ><img
            src="https://cdn.prod.website-files.com/5c14e387dab576fe667689cf/64f1a9ddd0246590df69ea0b_kofi_long_button_red%25402x-p-500.png"
        /></a>
        -->
      </div>

      <span class="donation-name" style="width: 100%">或者...</span>
      <div class="flex items-center">
        <QR name="支付宝" img-url="/assets/img/alipay.png" color="#1678ff"></QR>
        <QR name="微信" img-url="/assets/img/wechat.png" color="#07c160"></QR>
      </div>
      建议备注一下~
    </div>
  </Section>
</template>

<style scoped>
img {
  margin: 1rem;
  width: 15rem;
  max-width: 400px;
}
.donation-name {
  @apply text-4xl;
  padding-bottom: 1rem;
  margin: 0 0 1rem 0;
  border-bottom: solid 2px;
}
</style>
