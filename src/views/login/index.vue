<template>
  <div class="login_container">
    <div class="login_box">
      <t-card>
        <h2>Vue3 Admin</h2>
        <t-form
          ref="form"
          :data="loginForm"
          :rules="rules"
          :colon="true"
          :label-width="0"
          :loading="loading"
        >
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
            <t-button @click="login" theme="primary" block>登录</t-button>
          </t-form-item>
        </t-form>
      </t-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "tdesign-vue-next";
import type { FormValidateResult } from "tdesign-vue-next";
import { reactive, onMounted, ref } from "vue";
import { useAppStore } from "@/store";
import { useRouter } from "vue-router";
import type { TokenRequest } from "@/api/type";
// import { Form } from "tdesign-vue-next";
const appStore = useAppStore();
const router = useRouter();

const loginForm = reactive<TokenRequest>({
  username: "",
  password: "",
});

const rules = {
  username: [{ required: true, message: "不能为空", trigger: "blur" }],
  password: [{ required: true, message: "不能为空", trigger: "blur" }],
};

// const form = ref<InstanceType<typeof Form> | null>(null);
const form = ref<any>(null);
const loading = ref<boolean>(false);

const login = () => {
  loading.value = true;
  form.value
    ?.validate()
    .then(async (res: FormValidateResult<FormData>) => {
      if (res == true) {
        await appStore.loginAct(loginForm);
        router.push({ name: "dashboard" });
      }
    })
    .finally(() => {
      loading.value = false;
    });
};

onMounted(() => {
  // console.log("form.value =", form.value);
});
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
