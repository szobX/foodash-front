import Home from "./views/Home.vue";
import About from "./views/About.vue";
import NotFound from "./views/NotFound.vue";
import Demo from "./views/Demo.vue";

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: "/", component: Demo, meta: { title: "Home" } },
  {
    path: "/about",
    meta: { title: "About" },
    component: About,
  },
  {
    path: "/demo",
    meta: { title: "Demo" },
    component: Demo,
  },
  { path: "/:path(.*)", component: NotFound },
];
