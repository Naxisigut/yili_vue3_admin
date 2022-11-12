import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import DefineOptionsPlugin from "unplugin-vue-define-options/vite";
import SetupExtendsPlugin from "vite-plugin-vue-setup-extend";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), DefineOptionsPlugin(), SetupExtendsPlugin()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
