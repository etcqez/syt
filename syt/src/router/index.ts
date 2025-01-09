import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
  //路由的模式设置
  history: createWebHistory(),
  routes: [
    {
      path: "/home",
      component: () => import("@/pages/home/index.vue"),
    },
    {
      path: "/hospital",
      component: () => import("@/pages/hospital/index.vue"),
    },
    {
      path: "/",
      redirect: "/home",
    },
  ],
  //控制滚动条的位置
  scrollBehavior() {
    return {
      left: 0,
      top: 0,
    };
  },
});
