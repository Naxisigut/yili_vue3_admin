import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

// route的interface RouteRecordRaw从vue-router中引入
const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index.vue"),
  },
  {
    path: "/",
    name: "dashboard",
    component: () => import("@/views/dashboard/index.vue"),
  },
];

export const router = createRouter({
  routes,
  history: createWebHashHistory(), // hash模式
  strict: true, // 严格检查路径末尾是否有尾部斜线
  scrollBehavior: () => ({ left: 0, top: 0 }), // 路由跳转时自动到页面最顶端
});
