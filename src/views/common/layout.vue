<template>
  <!-- <div class="layoutContainer"> -->
  <t-layout class="layoutContainer">
    <t-aside>Aside</t-aside>
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
</script>

<style lang="less" scoped>
.layoutContainer {
  height: 100vh;
}
</style>
