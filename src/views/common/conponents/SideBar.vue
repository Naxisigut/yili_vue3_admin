<template>
  <t-aside :width="isCollapsed ? '64px' : '232px'">
    <t-menu :collapsed="isCollapsed" :defaultValue="$route.name">
      <SideBarItem
        v-for="item in menuRoutes"
        :key="item.name"
        :item="item"
      ></SideBarItem>
    </t-menu>
  </t-aside>
</template>

<script setup lang="ts">
import { useLayoutStore, usePermissionStore } from "@/store";
import { storeToRefs } from "pinia";
import SideBarItem from "./SideBarItem.vue";

const { isCollapsed } = storeToRefs(useLayoutStore());
const { menuRoutes } = storeToRefs(usePermissionStore());
</script>

<style lang="less" scoped></style>
