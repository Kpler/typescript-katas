import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import WindowsDesktop from "src/components/WindowsDesktop.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: WindowsDesktop,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
