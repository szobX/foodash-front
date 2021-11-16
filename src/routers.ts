import About from './views/About.vue'
import NotFound from './views/NotFound.vue'
import Demo from './views/Demo.vue'
import Auth from './views/Auth/Auth.vue'

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
    path: '/login',
    meta: { title: 'Login in to Foodash' },
    component: Auth,
  },
  { path: '/:path(.*)', component: NotFound },
]
