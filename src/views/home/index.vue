<template>
  <div class="home-wrapper">
    <van-row>
        <van-col span="24">
          <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(image, index) in images" :key="index">
              <img v-lazy="image" width="100%" height="200px"/>
            </van-swipe-item>
          </van-swipe>
        </van-col>
      </van-row>

      <van-grid :gutter="10">
        <van-grid-item v-for="value in 8" :key="value" icon="photo-o" text="文字" />
      </van-grid>

      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-image
          v-for="(item, index) in list"
          :key="index"
          :title="item"
          width="100"
          height="100" 
          :src="item" />
      </van-list>
  </div>
</template>

<script>
import {
  Swipe,
  SwipeItem,
  Col,
  Row,
  Grid,
  GridItem,
  List,
  Image as VanImage
  } from 'vant'

export default {
  components: {
    [Col.name]: Col,
    [Row.name]: Row,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Grid.name]: Grid,
    [List.name]: List,
    [GridItem.name]: GridItem,
    [VanImage.name]: VanImage
  },
  data() {
    return {
      routerNavBar: this.$route.meta.navBar,
      images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg',
      ],
      list: [],
      loading: false,
      finished: false,
    }
  },
  methods: {
    jump(target) {
      if (target) {
        this.$router.push({name: target})
      }
    },
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push('https://img.yzcdn.cn/vant/cat.jpeg');
        }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 500);
    },
  },
}
</script>


<style lang="scss" scoped>
.home-wrapper {
  .test {
    width: 8rem;
  }

  /deep/ .van-image__img {
    padding: 0.25rem;
    margin: 0.45rem;
  }
}
</style>