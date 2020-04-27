<template>
  <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item icon="bag-o" dot>分类</van-tabbar-item>
    <van-tabbar-item icon="shopping-cart-o" badge="5">购物车</van-tabbar-item>
    <van-tabbar-item icon="manager-o" badge="20" @click="myWork()">我的</van-tabbar-item>
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
      active: 0,
    }
  },
  methods: {
    myWork() {
      console.log('my work')
    }
  }
}
</script>