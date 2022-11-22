import type { App } from "vue";
import { authDrective } from "./auth";

export default function (app: App) {
  app.directive("auth", authDrective);
}
