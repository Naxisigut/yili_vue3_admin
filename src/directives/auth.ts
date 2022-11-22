import type { Directive } from "vue";
import { useUserStore } from "@/store";

export const authDrective: Directive = {
  mounted(el: Element, { value }) {
    const permissions = useUserStore().currentUser?.permissions;
    // 若该用户不包含此按钮权限，则不渲染此按钮
    if (permissions && !permissions.includes(value)) {
      el.parentNode?.removeChild(el);
    }
  },
};
