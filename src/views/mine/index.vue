<template>
  <div>
    <van-cell title="头像" center>
      <van-image
        round
        width="1rem"
        height="1rem"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
      />
    </van-cell>
    <van-cell title="我的订单" icon="coupon" is-link/>
    <van-cell title="收货地址" icon="location-o" is-link/>
    <van-cell title="联系客服" icon="service" is-link/>


    <van-button round block type="danger" @click="logout" class="logout-button">
      注销
    </van-button>
  </div>
</template>

<script>
import {
  Toast,
  Button as VanButton,
  Cell,
  Image as VanImage
  } from 'vant'

import Session from '@/plugins/session'

export default {
  components: {
    [VanButton.name]: VanButton,
    [Cell.name]: Cell,
    [VanImage.name]: VanImage,
  },
  data() {
    return {
    }
  },
  methods: {
    logout() {
      Session.remove()
      this.$router.push({name: 'login'})
    }
  }
}
</script>

<style scoped lang="scss">

</style>
