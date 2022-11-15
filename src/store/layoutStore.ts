import { defineStore } from "pinia";

type layoutStore = {
  isCollapsed: boolean;
};

export const useLayoutStore = defineStore("layoutStore", {
  state: (): layoutStore => {
    return {
      isCollapsed: false,
    };
  },
  persist: true,
});
