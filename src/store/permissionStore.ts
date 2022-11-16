import { defineStore } from "pinia";
import type { RouteRecordRaw } from "vue-router";

type PermissionStoreState = {
  routes: RouteRecordRaw[];
};

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

  actions: {
    generateRoutes(routes: RouteRecordRaw[], permissions: string[]) {
      const filteredRoutes = filterRoutes(routes, permissions);
      this.routes = filteredRoutes;
    },
  },
});
