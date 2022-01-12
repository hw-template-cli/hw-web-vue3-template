/*
 * @Description:
 * @Author: weiyang
 * @Date: 2022-01-11 18:12:36
 * @LastEditors: weiyang
 * @LastEditTime: 2022-01-11 18:12:36
 */
const TokenKey = "t";
/**
 * @description: 获取token
 * @param  {*}
 * @return {*}
 * @Autor: weiyang
 * @Date: 2021-10-27 17:46:11
 */
export function getToken() {
  return sessionStorage.getItem(TokenKey);
}
/**
 * @description: 设置token
 * @param  {*}
 * @return {*}
 * @Autor: weiyang
 * @Date: 2021-10-27 17:47:36
 * @param {*} token
 */
export function setToken(token) {
  sessionStorage.setItem(TokenKey, token);
}

/**
 * @description: 删除token
 * @param  {*}
 * @return {*}
 * @Autor: weiyang
 * @Date: 2021-10-27 17:48:19
 */
export function removeToken() {
  sessionStorage.removeItem(TokenKey);
  sessionStorage.clear();
  location.reload();
}
