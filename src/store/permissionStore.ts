import { defineStore } from "pinia";
import type { RouteRecordRaw } from "vue-router";
import { MENU_ROOT_ROUTE } from "@/router";

type PermissionStoreState = {
  routes: RouteRecordRaw[];
};

/**
 * 根据权限过滤路由
 * @param routes 路由集
 * @param permissions 权限集
 * @returns 当前用户权限内的路由集
 */
const filterRoutes = (routes: RouteRecordRaw[], permissions: string[]) => {
  return routes.filter((item) => {
    if (item.children) {
      item.children = filterRoutes(item.children, permissions);
    }

    // 若route有meta属性，且meta属性的permission不在用户权限集内，则过滤掉
    if (item.meta?.permission) {
      if (!permissions.includes(item.meta.permission)) return false;
    }
    return true;
  });
};

export const usePermissionStore = defineStore("permissionStore", {
  state: (): PermissionStoreState => {
    return {
      routes: [],
    };
  },
  persist: true,
  getters: {
    // 根据routes获得菜单（此项目中所有需要渲染的菜单项都放在MENU_ROOT_ROUTE的children中，所以逻辑上有一定简化）
    menuRoutes(): RouteRecordRaw[] {
      return (
        this.routes.find(
          (item: RouteRecordRaw) => item.name === MENU_ROOT_ROUTE
        )?.children || []
      );
    },
  },

  actions: {
    generateRoutes(routes: RouteRecordRaw[], permissions: string[]) {
      const filteredRoutes = filterRoutes(routes, permissions);
      this.routes = filteredRoutes;
    },
  },
});
