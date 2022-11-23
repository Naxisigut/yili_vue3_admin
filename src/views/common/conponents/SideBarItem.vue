<template>
  <!-- 有children时递归渲染 -->
  <t-submenu
    v-if="item.children && item.children.length > 0"
    :title="item.meta.title"
  >
    <template #icon>
      <Icon :name="item.meta.icon"></Icon>
    </template>
    <t-menu-item
      v-for="subItem in item.children"
      :key="subItem.name"
      :value="subItem.name"
      :to="{ name: subItem.name }"
    >
      <template #icon>
        <Icon :name="subItem.meta.icon"></Icon>
      </template>
      {{ subItem.meta.title }}
    </t-menu-item>
  </t-submenu>

  <!-- 无children时直接渲染即可 -->
  <t-menu-item v-else :value="item.name" :to="{ name: item.name }">
    <template #icon>
      <Icon :name="item.meta.icon"></Icon>
    </template>
    {{ item.meta.title }}
  </t-menu-item>
</template>

<script setup lang="ts">
import { Icon } from "tdesign-vue-next";
defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="less" scoped></style>
