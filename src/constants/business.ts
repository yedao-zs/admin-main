import { transformObjectToOption } from './_shared';

export const loginModuleLabels: Record<UnionKey.LoginModule, string> = {
  'pwd-login': '用户登录',
  'code-login': '手机验证码登录',
  register: '注册',
  'reset-pwd': '重置密码',
  'bind-wechat': '微信绑定'
};

export const userRoleLabels: Record<Auth.RoleType, string> = {
  super: '超级管理员',
  admin: '管理员',
  user: '普通用户'
};
export const userRoleOptions = transformObjectToOption(userRoleLabels);

/** 用户权限 */
export const genderLabels: Record<UserManagement.GenderKey, string> = {
  0: '女',
  1: '男'
};
export const genderOptions = transformObjectToOption(genderLabels);

/** 用户状态 */
export const userStatusLabels: Record<UserManagement.UserStatusKey, string> = {
  1: '已下线',
  2: '禁用',
  3: '冻结',
  4: '在线'
};
export const userStatusOptions = transformObjectToOption(userStatusLabels);
