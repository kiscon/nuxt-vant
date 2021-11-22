<template>
  <div class="goods-list">
    <NavBar title="商品列表" @click-left="onClickLeft" />
    <van-skeleton title :loading="loading" :row="10">
      <van-list
        v-model="listLoading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-card
          v-for="item in list"
          :key="item"
          num="2"
          price="2.00"
          desc="描述信息"
          title="商品标题"
          thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
        />
      </van-list>
    </van-skeleton>

    <BackTop />
  </div>
</template>
<script>
import NavBar from '@/components/NavBar'
import BackTop from '@/components/BackTop'
import { Skeleton, Card } from 'vant'

export default {
  components: {
    [Skeleton.name]: Skeleton,
    [Card.name]: Card,
    NavBar,
    BackTop
  },
  data() {
    return {
      loading: true,
      list: [],
      finished: false,
      listLoading: false
    }
  },
  created() {
    this.onLoad()
  },
  methods: {
    onLoad() {
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1)
        }
        // 加载状态结束
        this.loading = false
        this.listLoading = false
        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true
        }
      }, 2000)
    },
    onClickLeft() {
      this.$toast('返回')
    }
  }
}
</script>
<style lang="scss" scoped>
.goods-list {
  padding-top: 50px;
}
</style>
