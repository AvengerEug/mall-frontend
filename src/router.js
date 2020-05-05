import Vue from 'vue'
import Router from 'vue-router'
import Session from '@/plugins/session'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: '',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('views/index')
  },
  {
    path: '/mine',
    name: 'mine',
    component: () => import('views/mine')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('views/login')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('views/cart')
  }
]
const router = new Router({
  mode: 'history',
  routes
})

const needAuthedRouteName = [
  'mine', 'cart'
]

router.beforeEach((to, from, next) => {
  const toRouterName = to.name

  if (needAuthedRouteName.indexOf(toRouterName) > -1) {
    if (Session.logined()) {
      next()
    } else {
      next('/login?redirect=' + toRouterName)
    } 
  }

  next()

})

export default router