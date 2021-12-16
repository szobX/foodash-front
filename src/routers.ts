import { createRouter, createWebHistory } from 'vue-router'
import About from './views/About.vue'
import NotFound from './views/NotFound.vue'
import Demo from './views/Demo.vue'
import Auth from './views/Auth/Auth.vue'
import Register from './views/Auth/Register.vue'
import Login from './views/Auth/Login.vue'
import ForgotPassword from './views/Auth/ForgotPassword.vue'
import { useAuth } from '@/state/useAuth'
import useToken from './composables/useToken'

/** @type {import('vue-router').RouterOptions['routes']} */
const routes = [
  { path: '/', redirect: { name: 'Auth', params: { action: 'login' } } },
  {
    path: '/dashboard',
    component: Demo,
    meta: { title: 'Home', middleware: true },
    name: 'Dashboard',
  },

  {
    path: '/demo',
    meta: { title: 'Demo', middleware: true },
    component: Demo,
    name: 'Demo',
  },
  {
    path: '/auth/:action',
    meta: { title: 'Login | Foodash', guest: true },
    component: Auth,
    name: 'Auth',
  },
  // TEMP ENDPOINT
  // {
  //   path: '/register',
  //   meta: { title: 'Register | Foodash' },
  //   component: Auth,
  //   name: 'register',
  // },
  // {
  //   path: '/forgot-password',
  //   meta: { title: 'Forgot password | Foodash' },
  //   component: Auth,
  //   name: 'forgot-password',
  // },
  { path: '/:path(.*)', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  // console.log(to, from, next)
  const { token, user, isAuth } = useAuth()
  // const { token } = useToken

  if (to.matched.some((record) => record.meta.middleware)) {
    console.log(token)
    if (token === undefined) {
      next({ name: 'Auth', params: { action: 'login' } })
    } else {
      next()
    }
  } else {
    next()
  }
  // if (to.meta.middleware) {
  //   if (isAuth) next()
  //   else next({ name: 'Auth', params: { action: 'login' } })
  // } else {
  // }
})

export default router
