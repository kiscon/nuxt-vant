<template>
  <div>
    <ul>
      <li>用户id：{{ user_info.user_id }}</li>
      <li>姓名：{{ user_info.user_name }}</li>
      <li>电话：{{ user_info.user_mobile }}</li>
      <li>类型：{{ user_info.user_type }}</li>
    </ul>
    <pre>{{ user_info }}</pre>
    <button @click="setUserInfo">添加</button>
  </div>
</template>

<script>
import { get } from '@/utils/request'

export default {
  data() {
    return {
      user_info: {}
    }
  },
  // fetch 方法用于在渲染页面前填充应用的状态树（store）数据，
  // 与 asyncData 方法类似，不同的是它不会设置组件的数据。
  async fetch({ store }) {
    const { data } = await get('http://127.0.0.1:8080/mock/user_info.json')
    store.commit('userInfo/SET_USER', data)
  },
  computed: {
    userInfo() {
      return this.$store.state.userInfo
    }
  },
  created() {
    this.user_info = this.$store.state.userInfo
  },
  methods: {
    setUserInfo() {
      this.$store.commit('userInfo/SET_USER', {
        user_id: '1093',
        user_name: Date.now(),
        user_mobile: '15356782368',
        user_type: '3'
      })
    }
  }
}
</script>

<style>
</style>
