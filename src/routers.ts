import About from './views/About.vue'
import NotFound from './views/NotFound.vue'
import Demo from './views/Demo.vue'
import Auth from './views/Auth/Auth.vue'
import Register from './views/Auth/Register.vue'
import Login from './views/Auth/Login.vue'
import ForgotPassword from './views/Auth/ForgotPassword.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: '/', component: Demo, meta: { title: 'Home' } },
  {
    path: '/about',
    meta: { title: 'About' },
    component: About,
  },
  {
    path: '/demo',
    meta: { title: 'Demo' },
    component: Demo,
  },
  {
    path: '/auth/:action',
    meta: { title: 'Login | Foodash' },
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
