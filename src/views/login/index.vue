<template>
  <div class="login_container">
    <div class="login_box">
      <t-card>
        <h2>Vue3 Admin</h2>
        <t-form ref="form" :rules="rules" :colon="true" :label-width="0">
          <t-form-item name="username">
            <t-input
              v-model="loginForm.username"
              clearable
              placeholder="请输入用户名"
            >
              <template #prefix-icon>
                <icon name="desktop" />
              </template>
            </t-input>
          </t-form-item>
          <t-form-item name="password">
            <t-input
              v-model="loginForm.password"
              type="password"
              clearable
              placeholder="请输入密码"
            >
              <template #prefix-icon>
                <icon name="lock-on" />
              </template>
            </t-input>
          </t-form-item>

          <t-form-item>
            <t-button theme="primary" type="submit" block>登录</t-button>
          </t-form-item>
        </t-form>
      </t-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "tdesign-vue-next";
import { reactive } from "vue";

type LoginForm = {
  username: string;
  password: string;
};

const loginForm = reactive<LoginForm>({
  username: "",
  password: "",
});

const rules = {
  username: [{ required: true, message: "不能为空", trigger: "blur" }],
  password: [{ required: true, message: "不能为空", trigger: "blur" }],
};
</script>

<style lang="less" scoped>
.login_container {
  width: 100vw;
  height: 100vh;
  display: flex;
  .login_box {
    width: 400px;
    margin: auto;
    h2 {
      text-align: center;
      margin-bottom: 20px;
      font-size: 30px;
    }
  }
}
</style>
