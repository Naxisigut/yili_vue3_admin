import request from "./request";
import type { UserInfo } from "./type";

const getUserInfo = (): Promise<UserInfo> => {
  return request.get("/users/me");
};

export default {
  getUserInfo,
};
