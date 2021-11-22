<template>
  <div class="x-nav-bar">
    <van-nav-bar
      :title="title"
      :left-text="leftText"
      :left-arrow="leftArrow"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <div slot="right"></div>
    </van-nav-bar>
  </div>
</template>
<script>
import { NavBar } from 'vant'
export default {
  name: 'NavBar',
  components: {
    [NavBar.name]: NavBar
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    leftText: {
      type: String,
      default: ''
    },
    leftArrow: {
      type: Boolean,
      default: true
    }
  }
}
</script>
<style lang="scss" scoped>
.x-nav-bar {
  position: fixed;
  width: 100%;
  height: 46px;
  left: 0;
  top: 0;
  z-index: 2;
}
</style>
