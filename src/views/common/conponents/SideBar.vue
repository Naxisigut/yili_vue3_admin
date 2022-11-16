<template>
  <t-aside :width="isCollapsed ? '64px' : '232px'">
    <t-menu :collapsed="isCollapsed">
      <t-menu-item value="0">
        <template #icon>
          <Icon name="app" />
        </template>
        仪表盘
      </t-menu-item>
    </t-menu>
  </t-aside>
</template>

<script setup lang="ts">
import { Icon } from "tdesign-vue-next";
import { useLayoutStore } from "@/store";
import { storeToRefs } from "pinia";
const { isCollapsed } = storeToRefs(useLayoutStore());
</script>

<style lang="less" scoped></style>
