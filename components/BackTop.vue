<template>
  <div
    v-show="visible"
    class="back-top"
    :style="styleOptions"
    @click="onToTop"
  >
    <div class="back-top-image" />
  </div>
</template>

<script>
export default {
  props: {
    bottom: {
      // 组件距离底部的距离，100px
      type: String,
      default: '2.66rem'
    },
    right: {
      // 组件距离右部的距离，12px
      type: String,
      default: '.32rem'
    },
    height: {
      // 页面滚动高度达到该值时才显示BackTop组件
      type: Number,
      default: 200
    },
    targetEle: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      visible: false,
      location: 0,
      domEle: ''
    }
  },
  computed: {
    // 位置
    styleOptions ({ bottom, right }) {
      return { right, bottom }
    }
  },
  mounted () {
    if (this.targetEle) {
      this.domEle = document.querySelector(this.targetEle)
      this.domEle.addEventListener('scroll', this.handleScroll)
    } else {
      window.addEventListener('scroll', this.handleScroll)
    }
  },
  beforeDestroy () {
    if (this.targetEle) {
      this.domEle.removeEventListener('scroll', this.handleScroll)
    } else {
      window.removeEventListener('scroll', this.handleScroll)
    }
  },
  methods: {
    // 处理滚动
    handleScroll (e) {
      const scrolltop = this.scrollTop(e)
      this.visible = scrolltop > this.height
    },
    // 滚动到顶部
    scrollToTop () {
      if (this.targetEle) {
        this.domEle.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    },
    // 获取 scrollTop
    scrollTop (e) {
      return document.documentElement.scrollTop || document.body.scrollTop || e.target.scrollTop
    },
    // 点击回滚顶部
    onToTop () {
      this.scrollToTop()
      this.$emit('toTop')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/sass/variable";

.back-top {
  position: fixed;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  background: url(~assets/images/top.png) no-repeat;
  background-size: 100%;
  border-radius: 50%;
}
</style>
