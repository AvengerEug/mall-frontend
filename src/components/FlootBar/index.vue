<template>
  <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item icon="bag-o" dot>分类</van-tabbar-item>
    <van-tabbar-item icon="shopping-cart-o" badge="5" @click="toCar()">购物车</van-tabbar-item>
    <van-tabbar-item icon="manager-o" badge="20" @click="toMine()">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant'

export default {
  components: {
    [TabbarItem.name]: TabbarItem,
    [Tabbar.name]: Tabbar
  },
  data() {
    return {
      active: 0
    }
  },
  methods: {
    toMine() {
      this.$router.push({name: 'mine'})
    },
    toCar() {
      this.$router.push({name: 'cart'})
    }
  }
}
</script>