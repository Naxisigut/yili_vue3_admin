import type { App } from "vue";

/* TDesign */
import TDesign from "tdesign-vue-next"; // TDesign
// 引入组件库全局样式资源
import "tdesign-vue-next/dist/reset.css";
import "tdesign-vue-next/es/style/index.css";

/* pinia */
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
const pinia = createPinia().use(piniaPluginPersistedstate);

/* 路由 */
import { router } from "@/router"; // 路由

/* 自定义指令 */
import regDirectives from "@/directives";

const init = (app: App) => {
  app.use(TDesign).use(pinia).use(router);
  regDirectives(app);
  return app;
};

export default init;
