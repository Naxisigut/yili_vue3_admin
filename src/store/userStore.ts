import { defineStore } from "pinia";
import type { UserInfo } from "@/api/type";
import userAPI from "@/api/user";

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
      this.setCurrentUser(currentUserInfo);
    },
  },
});
