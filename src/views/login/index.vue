<template>
  <div>
    <nav-bar title="登录" />

    <van-form validate-first @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>

import { Toast, Form, Button, Field } from 'vant';
import NavBar from 'components/NavBar'
import ApiPath from '@/constants/apiPath'
import Session from '@/plugins/session'

export default {
  components: {
    NavBar,
    [Form.name]: Form,
    [Button.name]: Button,
    [Field.name]: Field
  },
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    async onSubmit(values) {
      const response = await this.$axios.post(ApiPath.USER.LOGIN, {
        userName: values.username,
        password: values.password
      })

      if (response.statusCode === 500) {
        Toast(response.errorMessage)
      } else {
        Session.save(response.data)
      }

      this.jump()
    },
    jump() {
      var redirectRouterName = 'mine'
      if (this.checkRouteRedirect()) {
        redirectRouterName = this.$route.query.redirect
      }
      this.$router.push({name: redirectRouterName})
    },
    checkRouteRedirect() {
      if (this.$route.query) {
        return this.$route.query.redirect
      }

      return false
    }
  }
}
</script>

