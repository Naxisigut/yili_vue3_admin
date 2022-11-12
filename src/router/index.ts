import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import { useAppStore } from "@/store/appStore";

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

/* 无需token即可访问 */
const whiteList = ["/login"];

const router = createRouter({
  routes,
  history: createWebHashHistory(), // hash模式
  strict: true, // 严格检查路径末尾是否有尾部斜线
  scrollBehavior: () => ({ left: 0, top: 0 }), // 路由跳转时自动到页面最顶端
});

router.beforeEach((to, from, next) => {
  const token = useAppStore().token;
  // 若无token且访问路由不在白名单内，重定向至登录页
  /* redirect参数可以记录上一个页面路径，在点击登录获取token后可以返回这个页面 */
  if (!whiteList.includes(to.path) && !token) {
    next(`/login?redirect=${to.path}`);
  }

  // 有token时访问登录页，重定向至首页
  if (token && to.path == "/login") {
    next("/");
  }

  next();
});

export { router };
