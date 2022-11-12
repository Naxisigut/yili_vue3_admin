import request from "./request";
import type { UserInfo } from "./type";

const getUserInfo = (): Promise<UserInfo> => {
  return request.get("/user/me");
};

export default {
  getUserInfo,
};
