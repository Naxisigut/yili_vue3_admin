import request from "./request";
import type { TokenRequest } from "./type";

// 此处的返回类型原本应为Promise<AxiosResponse<any>>
// 但由于响应拦截器的存在，去掉了AxiosResponse这一层，为Promise<any>
// 又由于确定返回的data为string型，故为Promise<string>
const createToken = (tokenRequest: TokenRequest): Promise<string> => {
  return request.post("/tokens", tokenRequest);
};

export default {
  createToken,
};
