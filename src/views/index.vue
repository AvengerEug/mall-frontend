<template>
  <div class="home-wrapper">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh" :disabled="pullRefresh.disabled">
      <nav-bar
        v-if="routerNavBar.isShow"
        :title="routerNavBar.title"
        :leftText="routerNavBar.left.text"
        :leftAction="routerNavBar.left.action"
        @clickLeft="jump(routerNavBar.left.target)"
        ref="navBar"
        />

      <search-bar v-if="routerSearchBar.isShow"/>

      <router-view />

    </van-pull-refresh>

    <floot-bar/>

  </div>
</template>

<script>
import Vue from 'vue'
import {
  Toast,
  Lazyload,
  PullRefresh,
  } from 'vant'

import NavBar from 'components/NavBar'
import FlootBar from 'components/FlootBar'
import SearchBar from 'components/SearchBar'

Vue.use(Toast)
Vue.use(Lazyload)

export default {
  components: {
    NavBar,
    FlootBar,
    SearchBar,
    [PullRefresh.name]: PullRefresh
  },
  data() {
    return {
      count: 0,
      isLoading: false,
      routerNavBar: this.$route.meta.navBar,
      routerSearchBar: this.$route.meta.searchBar,
      pullRefresh: this.$route.meta.pullRefresh
    }
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        Toast('刷新成功')
        this.isLoading = false
        this.count++
      }, 1000)
    },
    jump(target) {
      if (target) {
        this.$router.push({name: target})
      }
    }
  },
  created() {
    console.log('this.pullRefresh :>> ', this.pullRefresh)
  },
  watch: {
    $route(oleVal, newVal) {
      if (newVal) {
        this.routerNavBar = this.$route.meta.navBar
        this.routerSearchBar = this.$route.meta.searchBar
      }
    }
  }
}
</script>
