<template>
  <!-- <div class="layoutContainer"> -->
  <t-layout class="layoutContainer">
    <t-aside>Aside</t-aside>
    <t-layout>
      <t-header>Header</t-header>
      <t-content>
        <router-view></router-view>
      </t-content>
      <t-footer>Footer</t-footer>
    </t-layout>
  </t-layout>
  <!-- </div> -->
</template>

<script setup lang="ts" name="layoutView">
//
</script>

<style lang="less" scoped>
.layoutContainer {
  height: 100vh;
}
</style>
