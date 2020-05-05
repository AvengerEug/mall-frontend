<template>
  <div class="home-wrapper">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <search-bar/>

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
    </van-pull-refresh>

    <floot-bar/>

  </div>
</template>

<script>
import Vue from 'vue'
import {
  Swipe,
  SwipeItem,
  Lazyload, TabbarItem, Col, Row, Toast, PullRefresh,
  Grid, GridItem, List, Image as VanImage } from 'vant'
import FlootBar from 'components/FlootBar'
import SearchBar from 'components/SearchBar'

Vue.use(Toast)
Vue.use(Lazyload)

export default {
  components: {
    [Col.name]: Col,
    [Row.name]: Row,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [PullRefresh.name]: PullRefresh,
    [Grid.name]: Grid,
    [List.name]: List,
    [GridItem.name]: GridItem,
    [VanImage.name]: VanImage,
    FlootBar,
    SearchBar
  },
  data() {
    return {
      images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg',
      ],
      count: 0,
      isLoading: false,
      list: [],
      loading: false,
      finished: false,
    }
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        Toast('刷新成功');
        this.isLoading = false;
        this.count++;
      }, 1000);
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
  }
}
</script>

<style lang="scss" scoped>
.home-wrapper {
  .test {
    width: 8rem;
  }

  /deep/ .van-image__img {
    margin: 0 0.2rem;
  }
}
</style>