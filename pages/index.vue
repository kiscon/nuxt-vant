<template>
  <div class="container">
    <ul>
      <li><nuxt-link :to="{ name: 'index' }">home</nuxt-link></li>
      <li><nuxt-link :to="{ name: 'download' }">download</nuxt-link></li>
      <li><nuxt-link :to="{ name: 'news', params: { newsId: 3306 } }">NEWS</nuxt-link></li>
      <li><nuxt-link :to="{ name: 'goodsList' }">goods</nuxt-link></li>
      <li><nuxt-link :to="{ name: 'barrage' }">barrage</nuxt-link></li>
    </ul>
    <div>
      <NuxtLogo />
      <h1 class="title">Welcome to the Vant + Nuxt.js template</h1>
      <div class="links">
        <van-button type="primary" url="https://nuxtjs.org/">
          Documentation
        </van-button>
        <van-button url="https://github.com/nuxt/nuxt.js"> GitHub </van-button>
        <van-button url="https://vant-contrib.gitee.io/vant">
          Vant UI
        </van-button>
      </div>
    </div>
  </div>
</template>
<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
