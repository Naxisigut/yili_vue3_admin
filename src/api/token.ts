import request from "./request";
import type { TokenRequest } from "./type";
import type { AxiosResponse } from "axios";

const createToken = (
  tokenRequest: TokenRequest
): Promise<AxiosResponse<string>> => {
  return request.post("/tokens", tokenRequest);
};

export default {
  createToken,
};
