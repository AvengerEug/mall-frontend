<template>
  <div>
    <nav-bar title="购物车" />
    
    <van-swipe-cell>
      <van-card
        num="2"
        price="2.00"
        desc="描述信息"
        title="商品标题"
        class="goods-card"
        thumb="https://img.yzcdn.cn/vant/cat.jpeg"
      />
      <template #right>
        <van-button square text="删除" type="danger" class="delete-button" />
      </template>
    </van-swipe-cell>

    <van-swipe-cell>
      <van-card
        num="1"
        price="21.00"
        desc="描述信息"
        title="商品标题"
        class="goods-card"
        thumb="https://img.yzcdn.cn/vant/cat.jpeg"
      />
      <template #right>
        <van-button square text="删除" type="danger" class="delete-button" />
      </template>
    </van-swipe-cell>

    <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
      <van-checkbox v-model="checked">全选</van-checkbox>
      <template #tip>
        你的收货地址不支持同城送, <span @click="onClickEditAddress">修改地址</span>
      </template>
    </van-submit-bar>

  </div>
</template>


<script>
import { Card, Button as VanButton, SubmitBar, Checkbox, SwipeCell, Toast  } from 'vant'
import NavBar from 'components/NavBar'

export default {
  components: {
    NavBar,
    [Card.name]: Card,
    [VanButton.name]: VanButton,
    [SubmitBar.name]: SubmitBar,
    [Checkbox.name]: Checkbox,
    [SwipeCell.name]: SwipeCell
  },
  data() {
    return {
      checked: false
    }
  },
  methods: {
    onSubmit() {
      console.log('arguments :>> ', arguments)
      Toast.fail('正在开发中')
    },
    onClickEditAddress() {
      console.log('arguments :>> ', arguments)
    }
  }
}
</script>

<style lang="scss" scoped>
.goods-card {
  margin: 0;
  background-color: white;
  margin: 10px 0;
}

.delete-button {
  height: 100%;
  }
</style>