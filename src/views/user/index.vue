<template>
  <t-card>
    <div class="action_area">
      <t-button v-auth="PermsEnum.USER_LIST_CREATE">创建用户</t-button>
    </div>

    <div class="search_area">
      <t-space>
        <t-input class="search_area_ipt"></t-input>
        <t-button class="search_area_btn">
          <template #icon><Icon name="search"></Icon></template>
          查询
        </t-button>
      </t-space>
    </div>

    <div class="table_area">
      <t-table row-key="index" :columns="cols" bordered></t-table>
    </div>
  </t-card>
</template>

<script setup lang="ts">
import { PermsEnum } from "@/config/permission.config";
import { Icon } from "tdesign-vue-next";

const cols = [
  { colKey: "id", title: "ID" },
  { colKey: "username", title: "用户名" },
  { colKey: "nickname", title: "昵称" },
  { colKey: "roles", title: "角色" },
  { colKey: "operation", title: "操作" },
];
</script>

<style lang="less" scoped>
.search_area {
  margin: 20px 0;
  // display: flex;
  // &_ipt {
  //   width: 200px;
  // }
  // &_btn {
  //   margin-left: 20px;
  // }
}
</style>
