<template>
  <div class="not-found">
    <div v-if="error.statusCode==404" class="code-404">
      <img src="~assets/images/not-found.png">
      <p class="notice">
        很抱歉，您访问的页面找不到了~
      </p>
      <p>
        <nuxt-link class="back" to="/">
          返回首页
        </nuxt-link>
      </p>
    </div>
    <div v-else class="serve">
      <h2>亲，服务异常，请稍后~</h2>
      <h2 v-text="error.message" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
<style lang="scss" scoped>
  .not-found {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    .code-404{
      text-align: center;
      .notice{
        padding: 10px 0;
        font-weight: 700;
      }
      .back{
        text-decoration: none;
        color: #f00;
      }
    }
    .serve,.error{
      font-weight: 700;
    }
  }
</style>
