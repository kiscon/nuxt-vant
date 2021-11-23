<template>
  <div class="download">
    <div class="banner-box"></div>
    <div class="form-container">
      <div class="form-box">
        <van-field
          v-model="mobile"
          clearable
          type="tel"
          maxlength="11"
          label-width="0.75rem"
          placeholder="请输入手机号"
          :border="false"
        >
          <template #label>
            <i class="icon icon-mobile"></i>
          </template>
        </van-field>
        <van-field
          v-model="smsCode"
          center
          clearable
          type="digit"
          maxlength="6"
          label-width="0.75rem"
          placeholder="请输入验证码"
          :border="false"
          class="sms-code"
        >
          <template #label>
            <i class="icon icon-code"></i>
          </template>
          <template #button>
            <button :class="['code-btn', {'active': mobile}]" type="text" :disabled="!!count || !mobile" @click="getCode">{{ smsTxt }}</button>
          </template>
        </van-field>
        <div class="btn">
          <button @click="submit">确定</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { get } from '@/utils/request'

export default {
  data() {
    return {
      mobile: '',
      smsCode: '',
      imgSmsCode: '',
      imgLink: '',
      timer: null,
      count: 0,
      detail: {}
    }
  },
  computed: {
    smsTxt() {
      return this.count ? `${this.count}s` : '获取验证码'
    },
    isTrueMobile() {
      const mobile = this.mobile
      return !mobile || mobile.length !== 11 || !/^[1][3-9]\d{9}$/.test(mobile)
    },
    isActive() {
      return this.mobile && this.smsCode
    }
  },
  created() {
    this.getPullData()
  },
  methods: {
    async getPullData() {
      const res = await get('/mock/encrypt.json')
      if (!res || res.result_code !== 1) return
      this.detail = res.data
    },
    async submit() {
      const { mobile, smsCode } = this
      if (this.isTrueMobile) {
        return this.$toast('请输入正确手机号')
      }
      if (!smsCode || smsCode.length !== 6 || !/^\d{6}$/.test(smsCode)) {
        return this.$toast('请输入正确验证码')
      }
      console.log({
        mobile,
        sms_code: smsCode
      })
    },
    // 获取验证码
    async getCode() {
      if (this.isTrueMobile) {
        return this.$toast('请输入正确手机号')
      }
      this.setCountdown()
      const data = {
        mobile: this.mobile,
        refresh: 1
      }
      console.log(data)
    },
    // 倒计时
    setCountdown() {
      this.count = 60
      if (this.timer) clearInterval(this.timer)
      this.timer = setInterval(() => {
        this.count -= 1
        if (this.count === 0) {
          clearInterval(this.timer)
        }
      }, 1000)
    }
  }
}

</script>

<style lang="scss" scoped>
@import "~assets/sass/variable";
.download {
  position: relative;
  width: 100%;
  min-height: 100%;
  background: linear-gradient(#EA3B3E, #FFAE17);
  .icon {
    display: inline-block;
    width: px2rem(26px);
    height: px2rem(26px);

    &-mobile {
      background: url(~assets/images/icon-mobile.png) no-repeat;
      background-size: 100%;
    }

    &-code {
      background: url(~assets/images/icon-code.png) no-repeat;
      background-size: 100%;
    }
  }

  /deep/ .van-field__control {
    font-size: $fs18;
    color: $text-black1;
  }

  /deep/ .van-field__label {
    display: flex;
    align-items: center;
  }

  .btn {
    padding: px2rem(25px 0px 22px);
    button {
      width: px2rem(295px);
      height: 48px;
      border-radius: $fs24;
      font-size: $fs18;
      color: $text-white;
      background: #f8923e;
      border: none;
      box-shadow: none;
    }
  }
}

.banner-box {
  width: 100%;
  height: px2rem(310px);
  background: rgb(78, 135, 221);
}

.form-container {
  padding: px2rem(0px 15px);
  margin-top: -80px;
  .form-box {
    padding: px2rem(25px 25px 0px);
    box-shadow: 0px 2px 10px 0px rgba(69, 0, 0, 0.2);
    border-radius: 8px;
    background: $bg-white;
  }
  .van-field {
    padding: 12px 16px;
    border-radius: px2rem(25px);
    border: 1px solid #D9D9D9;
  }
  .sms-code {
    margin-top: px2rem(20px);
    /deep/ .van-field__button {
      padding-left: 15px;
    }
    .code-btn {
      position: relative;
      font-size: $fs14;
      color: $text-black4;
      background: $bg-white;
      border: none;
      &::after {
        position: absolute;
        left: -11px;
        top: 50%;
        transform: translateY(-50%);
        width: 1px;
        height: px2rem(20px);
        background: #ccc;
        content: "";
      }
      &.active {
        color: $text-black2;
      }
    }
  }
}

</style>

