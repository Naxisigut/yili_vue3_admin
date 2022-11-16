import { defineStore } from "pinia";
import type { UserInfo } from "@/api/type";
import userAPI from "@/api/user";
import { usePermissionStore } from "./permissionStore";
import { routes } from "@/router";

type userStoreState = {
  currentUser: UserInfo | null;
};

export const useUserStore = defineStore("userStore", {
  state: (): userStoreState => {
    return {
      currentUser: null,
    };
  },
  persist: true,
  actions: {
    setCurrentUser(currentUserInfo: UserInfo) {
      this.currentUser = currentUserInfo;
    },
    clearCurrentUser() {
      this.currentUser = null;
    },
    async getUserInfo() {
      const currentUserInfo = await userAPI.getUserInfo();
      const permissionStore = usePermissionStore();
      permissionStore.generateRoutes(routes, currentUserInfo.permissions);
      this.setCurrentUser(currentUserInfo);
    },
  },
});
