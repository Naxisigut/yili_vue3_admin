import axios from "axios";
import type { AxiosInstance, AxiosError, AxiosRequestConfig } from "axios"; // axios实例的type
import type { ErrorResponse } from "@/api/type";
import { MessagePlugin } from "tdesign-vue-next";
import { useAppStore } from "@/store";

const BaseURL: string = import.meta.env.VITE_BASE_URL; // 从环境变量中提取BaseURL

const request: AxiosInstance = axios.create({
  baseURL: BaseURL,
  timeout: 6000,
});

/* 请求拦截 */
request.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = useAppStore().token;
  if (token && config.headers)
    config.headers["Authorization"] = `Bearer ${token}`;

  return config;
});

/* 响应拦截 */
request.interceptors.response.use(
  /* 拦截业务错误（http状态码为200，但在业务逻辑上被后端判断为错误） */
  (res) => {
    return res.data;
  },

  /* 拦截网络错误 */
  (err: AxiosError<ErrorResponse>) => {
    // ErrorResponse为后端规定的错误数据格式类型
    // 由于AxiosError的response为可选属性，所以这里要做判断
    err.response && MessagePlugin.error(err.response?.data.message);

    /* 401错误处理，还差一个跳转至login页面 */
    if (err.response?.status == 401) {
      useAppStore().logout();
    }

    return Promise.reject(err);
  }
);

export default request;
