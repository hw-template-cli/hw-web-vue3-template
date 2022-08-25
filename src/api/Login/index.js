/*
 * @Description: 登录
 * @Author: shengliangjun
 * @Date: 2022-02-22 09:57:40
 * @LastEditors: shengliangjun
 * @LastEditTime: 2022-06-08 15:37:51
 */

import request from "@/utils/request";
/**
 * @description: 登录
 * @param  {*}
 * @return {*}
 * @Autor: weiyang
 * @Date: 2021-11-07 15:33:26
 * @param {*} data
 */
export function userLoginApi(data) {
  return request({
    url: "/base/login",
    method: "post",
    data
  });
}

/**
 * @description: 获取登录用户信息
 * @param  {*}
 * @return {*}
 * @Autor: shengliangjun
 * @Date: 2022-02-23 15:39:03
 */
export function getUserInfoApi() {
  return request({
    url: "/base/user",
    method: "GET"
  });
}

/**
 * @description: 修改密码
 * @return {*}
 * @Autor: shengliangjun
 * @Date: 2022-06-08 15:37:19
 */
export function modifyPasswordApi(data) {
  return request({
    url: "/base/user/password",
    method: "PATCH",
    data
  });
}
