import { createRouter, createWebHistory } from 'vue-router'
// import About from '@/pages/About.vue'
// import NotFound from '@/pages/NotFound.vue'
// import Dashboard from '@/pages/Dashboard/index.vue'
// import Auth from './pages/Auth/Auth.vue'
// import Register from '@/pages/Auth/Register.vue'
// import Login from '@/pages/Auth/Login.vue'
// import ForgotPassword from '@/pages/Auth/ForgotPassword.vue'
import { useAuth } from '@/state/useAuth'
import useToken from '@/composables/useToken'
// import routes from '~pages'
//@ts-ignore
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'

const routes = setupLayouts(generatedRoutes)

/** @type {import('vue-router').RouterOptions['routes']} */
// const routes = [
//   // { path: '/', redirect: { name: 'Auth', params: { action: 'login' } } },
//   // {
//   //   path: '/dashboard',
//   //   component: Dashboard,
//   //   meta: { title: 'Home', middleware: true },
//   //   name: 'Dashboard',
//   // },
//   // {
//   //   path: '/demo',
//   //   meta: { title: 'Demo', middleware: true },
//   //   component: Dashboard,
//   //   name: 'Demo',
//   // },
//   // {
//   //   path: '/auth/:action',
//   //   meta: { title: 'Login | Foodash', guest: true },
//   //   component: Auth,
//   //   name: 'Auth',
//   // },
//   // // TEMP ENDPOINT
//   // // {
//   // //   path: '/register',
//   // //   meta: { title: 'Register | Foodash' },
//   // //   component: Auth,
//   // //   name: 'register',
//   // // },
//   // // {
//   // //   path: '/forgot-password',
//   // //   meta: { title: 'Forgot password | Foodash' },
//   // //   component: Auth,
//   // //   name: 'forgot-password',
//   // // },
//   // { path: '/:path(.*)', component: NotFound },
// ]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.path === '/') {
    next({ name: 'Dashboard' })
  }
  const { token } = useAuth()
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!token) {
      next({ name: 'auth-action', params: { action: 'login' } })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
