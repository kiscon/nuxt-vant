<template>
  <div>
    <p>new content</p>
    <p>我是接收的参数id：{{ id }}</p>
  </div>
</template>

<script>

export default {
  validate({ params }) {
    return /^\d+$/.test(params.id)
  },
  data() {
    return {
      id: '',
      title: ''
    }
  },
  head() { // 独立设置head信息
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'news', content: 'This is news page' }
      ]
    }
  },
  created() {
    this.id = this.$route.params.id
    this.title = this.$route.params.title
    console.log(this.$route.params)
  }
}
</script>
