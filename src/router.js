import Vue from 'vue'
import Router from 'vue-router'
import Session from '@/plugins/session'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: '',
    redirect: '/home',
    component: () => import('views'),
    children: [
      {
        path: 'home',
        name: 'home',
        meta: {
          pullRefresh: {
            // 是否禁用下拉刷新
            disabled: false
          },
          navBar: {
            isShow: false,
          },
          searchBar: {
            isShow: true
          }
        },
        component: () => import('views/home')
      },
      {
        path: 'mine',
        name: 'mine',
        meta: {
          pullRefresh: {
            disabled: true
          },
          navBar: {
            // 控制显示navBar
            isShow: true,
            // navBar的title
            title: '我的工作台',
            // navBar左侧的属性
            left: {
              // 左侧要显示的内容，默认为返回
              text: '首页',
              // 是否自定义后退行为，默认为history.back(-1)
              // 若设置为true，则跳转到target
              action: true,
              // 点击左侧的按钮要跳转的目标路由name
              target: 'home'
            }
          },
          searchBar: {
            isShow: false
          }
        },
        component: () => import('views/mine')
      },
      {
        path: 'cart',
        name: 'cart',
        meta: {
          pullRefresh: {
            disabled: true
          },
          searchBar: {
            isShow: false
          },
          navBar: {
            // 控制显示navBar
            isShow: true,
            // navBar的title
            title: '购物车',
            // navBar左侧的属性
            left: {
              // 左侧要显示的内容，默认为返回
              text: '返回',
              // 是否自定义后退行为，默认为history.back(-1)
              // 若设置为true，则跳转到target
              action: false
            }
          },
        },
        component: () => import('views/cart')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('views/login')
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