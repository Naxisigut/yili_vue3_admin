import { defineStore } from "pinia";
import type { TokenRequest } from "@/api/type";
import tokenAPI from "@/api/token";
import { useUserStore } from "./userStore";
// import { useRouter } from "vue-router";

export const useAppStore = defineStore("app", {
  // state要使用箭头函数
  state: () => {
    return {
      token: "",
    };
  },

  persist: true,

  // actions建议使用普通函数。使用箭头函数会导致this推断异常
  actions: {
    setToken(token: string) {
      this.token = token;
    },
    clearToken() {
      this.token = "";
    },

    // 登录
    async loginAct(loginForm: TokenRequest) {
      const tokenGet = await tokenAPI.createToken(loginForm);
      this.setToken(tokenGet);
    },
    // 登出
    logout() {
      useUserStore().clearCurrentUser();
      this.clearToken();
    },
  },
});
