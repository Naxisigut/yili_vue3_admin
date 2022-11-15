<template>
  <!-- <div class="layoutContainer"> -->
  <t-layout class="layoutContainer">
    <SideBar></SideBar>
    <t-layout>
      <GlobalHeader></GlobalHeader>
      <t-content>
        <router-view></router-view>
      </t-content>
      <t-footer>Footer</t-footer>
    </t-layout>
  </t-layout>
  <!-- </div> -->
</template>

<script setup lang="ts" name="layoutView">
import GlobalHeader from "./conponents/GlobalHeader.vue";
import SideBar from "./conponents/SideBar.vue";
</script>

<style lang="less" scoped>
.layoutContainer {
  height: 100vh;
}
</style>
