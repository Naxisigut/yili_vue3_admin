// 登录表单数据对象类型
export type TokenRequest = {
  username: string;
  password: string;
};

// 网络错误返回类型，Http状态码不为200，格式由后端规定好
export type ErrorResponse = {
  code: number;
  message: string;
};

// 用户信息对象类型
export type UserInfo = {
  username: string;
  nickname: string;
  roles: [string];
  permissons: [string];
};
