<template>
  <van-nav-bar
    :title="title"
    :left-text="leftText"
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
  />
</template>

<script>
import { NavBar } from 'vant';

export default {
  components: {
    [NavBar.name]: NavBar
  },
  props: {
    title: {
      type: String
    },
    leftText: {
      type: String,
      default: () => { return '返回' }
    },
    customizeClickLeft: {
      type: Boolean,
      default: () => { return false }
    }
  },

  methods: {
    onClickLeft() {
      if (this.customizeClickLeft) {
        this.$emit('clickLeft')
      } else {
        history.back(-1)
      }
      
    },
    onClickRight() {
      Toast('按钮')
    },
  }
}
</script>