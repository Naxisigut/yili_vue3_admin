import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import { useAppStore } from "@/store/appStore";
import layoutView from "@/views/common/layout.vue";
import pageLayoutView from "@/views/common/page-layout.vue";
import { Permisson_Enum } from "@/config/permission.config";

// 重定义route.meta的类型RouteMeta
declare module "vue-router" {
  interface RouteMeta extends Record<string | number | symbol, unknown> {
    permission?: string;
    title?: string;
    icon?: string;
  }
}

export const MENU_ROOT_ROUTE = "root";

// route的interface RouteRecordRaw从vue-router中引入
export const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index.vue"),
  },
  {
    path: "/",
    name: MENU_ROOT_ROUTE, // 所有需要渲染的菜单路由都放置在MENU_ROOT_ROUTE的children中
    redirect: "/dashboard",
    component: layoutView,
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: () => import("@/views/dashboard/index.vue"),
        meta: {
          title: "控制台",
          permission: Permisson_Enum.DASHBOARD,
          icon: "dashboard",
        },
      },
      {
        path: "user",
        name: "user",
        component: pageLayoutView,
        redirect: { name: "user-list" },
        meta: {
          title: "用户",
          icon: "usergroup",
          permission: Permisson_Enum.USER,
        },
        children: [
          {
            path: "user-list",
            name: "user-list",
            component: () => import("@/views/user/index.vue"),
            meta: {
              title: "用户列表",
              permission: Permisson_Enum.USER_LIST,
            },
          },
        ],
      },
    ],
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
