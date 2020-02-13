import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '*',
    redirect: '/login'
  },
  {
    name: 'user',
    component: () => import('../view/user'),
    meta: {
      title: '个人中心'
    }
  },
  {
    name: 'index',
    component: () => import('../view/index'),
    meta: {
      title: '个人中心'
    }
  },
  {
    name: 'login',
    component: () => import('../view/login/login'),
    meta: {
      title: '登录'
    }
  }
]

// add route path
routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '')
})

const router = new Router({ routes })

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title
  if (title) {
    document.title = title
  }
  next()
})

export {
  router
}
