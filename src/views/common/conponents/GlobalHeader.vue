<template>
  <div>
    <t-header class="globalHeader">
      <CollapseBtn v-model:is-collapsed="layoutStore.isCollapsed"></CollapseBtn>
      <div class="options">
        <div class="user">
          <t-dropdown :options="options" @click="clickHandler">
            <t-space>
              <t-button variant="text">
                <t-space :size="0">
                  {{ userStore.currentUser?.nickname }}
                  <t-icon name="chevron-down" size="16" />
                </t-space>
              </t-button>
            </t-space>
          </t-dropdown>
        </div>
      </div>
    </t-header>
  </div>
</template>

<script setup lang="ts" name="GlobalHeader">
import type { DropdownOption } from "tdesign-vue-next"; // TDesign
import { useAppStore, useUserStore, useLayoutStore } from "@/store";
import { useRouter, useRoute } from "vue-router";
import CollapseBtn from "@/components/CollapseBtn.vue";

const userStore = useUserStore();
const router = useRouter();
const route = useRoute();
const appStore = useAppStore();
const layoutStore = useLayoutStore();

const options = [{ content: "退出登录", value: "logout" }];

const clickHandler = ({ value }: DropdownOption) => {
  switch (value) {
    case "logout":
      appStore.logout();
      router.push(`/login?redirect=${route.path}`);
      break;
    default:
      throw new Error("指令错误");
  }
};
</script>

<style lang="less" scoped>
.globalHeader {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
}
</style>
