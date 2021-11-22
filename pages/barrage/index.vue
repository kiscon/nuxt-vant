<template>
  <div class="barrage">
    <template v-for="(item, i) in activeList">
      <div :key="i" :data-index="i" class="info-box move">
        <img class="avatar" :src="item.avatar">
        <span class="name">{{ item.name }}</span>
        <span>{{ item.desc }}为</span>
        <span class="name">{{ item.vname }}</span>
        <span>加油</span>
      </div>
    </template>
  </div>
</template>
<script>

export default {
  data() {
    return {
      timer: null,
      list: [],
      bList: [],
      activeList: []
    }
  },
  fetch() {
    this.getBarrageList()
  },
  created() {
    this.$nextTick(() => {
      console.log(1111111111111)
      this.parDom = document.querySelector('.barrage')
      window.addEventListener('visibilitychange', this.visibilityChange)
    })
  },
  beforeDestroy() {
    window.removeEventListener('visibilitychange', this.visibilityChange)
    clearTimeout(this.timer)
  },
  methods: {
    visibilityChange() {
      this.activeList = []
      this.list = []
      clearTimeout(this.timer)
      if (!document.hidden) {
        this.getBarrageList()
      }
    },
    async getBarrageList() {
      this.list = Array.from({ length: 5 }).fill({
        avatar: require('@/assets/logo.png'),
        desc: '刚刚',
        name: '张三',
        vname: '李四'
      })
      this.setActive()
    },
    setActive() {
      const time = 1000
      if (!this.list.length) {
        this.getBarrageList()
        return
      }
      this.activeList.push(this.list.shift())

      if (this.activeList.length > 5 && this.activeList.length % 10 === 0) {
        const doms = Array.from(document.querySelectorAll('.info-box'))
        if (doms.length >= 10) {
          doms.slice(0, 10).forEach(v => this.parDom.removeChild(v))
        }
      }
      this.timer && clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.setActive()
      }, time + 500)
    }
  }
}
</script>
<style lang="scss" scoped>
@keyframes moveY {
  from {
    opacity: 0.2;
    transform: translate3d(0, 0, 0) translateZ(0);
  }
  5% {
    opacity: 0.6;
    transform: translate3d(0, -15px, 0) translateZ(0);
  }
  10% {
    opacity: 0.8;
    transform: translate3d(0, -30px, 0) translateZ(0);
  }
  20% {
    opacity: 1;
    transform: translate3d(0, -45px, 0) translateZ(0);
  }
  30% {
    opacity: 1;
    transform: translate3d(0, -60px, 0) translateZ(0);
  }
  40% {
    opacity: 1;
    transform: translate3d(0, -75px, 0) translateZ(0);
  }
  50% {
    opacity: 1;
    transform: translate3d(0, -90px, 0) translateZ(0);
  }
  60% {
    opacity: 1;
    transform: translate3d(0, -105px, 0) translateZ(0);
  }
  70% {
    opacity: 1;
    transform: translate3d(0, -120px, 0) translateZ(0);
  }
  80% {
    opacity: 0.9;
    transform: translate3d(0, -135px, 0) translateZ(0);
  }
  90% {
    opacity: 0.8;
    transform: translate3d(0, -150px, 0) translateZ(0);
  }
  to {
    opacity: 0;
    transform: translate3d(0, -165px, 0) translateZ(0);
  }
}

.info-box {
  box-sizing: border-box;
  position: fixed;
  bottom: 5px;
  left: 12px;
  opacity: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  background-color: rgba(102, 102, 102, 0.7);
  border-radius: 15px;
  padding-right: 12px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  .avatar {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-left: 3px;
    margin-right: 8px;
  }
  .name {
    color: #358af2;
  }
}

.move {
  animation: moveY 5s linear 1;
  transition: transform 2s ease;
}
</style>
