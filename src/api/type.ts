export type TokenRequest = {
  username: string;
  password: string;
};

// 网络错误返回，Http状态码不为200，格式由后端规定好
export type ErrorResponse = {
  code: number;
  message: string;
};
