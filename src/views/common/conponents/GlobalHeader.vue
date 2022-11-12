<template>
  <div>
    <t-header class="globalHeader">
      <div>菜单折叠按钮</div>
      <div class="options">
        <div class="user">
          <t-button theme="default" variant="text"> 用户名</t-button>
        </div>
      </div>
    </t-header>
  </div>
</template>

<script setup lang="ts" name="GlobalHeader">
// import { Icon } from "tdesign-vue-next"; // TDesign
</script>

<style lang="less" scoped>
.globalHeader {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
}
</style>
