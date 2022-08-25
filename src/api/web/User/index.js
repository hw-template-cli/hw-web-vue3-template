/*
 * @Description: 用户管理api
 * @Author: shengliangjun
 * @Date: 2021-11-11 15:36:35
 * @LastEditors: shengliangjun
 * @LastEditTime: 2022-03-04 11:19:50
 */
import request from "@/utils/request";

export function getUserInfo() {
  return request({
    url: "/base/user",
    method: "get"
  });
}

/**
 * @description: 查询用户管理
 * @param  {*}
 * @return {*}
 * @Autor: shengliangjun
 * @Date: 2021-11-11 15:37:24
 */
export function getUserListApi(data) {
  return request({
    url: "/base/user/list",
    method: "post",
    data
  });
}
/**
 * @description: 用户新增
 * @param  {*}
 * @return {*}
 * @Autor: shengliangjun
 * @Date: 2021-11-11 17:21:09
 * @param {*} data
 */
export function addUserApi(data) {
  return request({
    url: "/base/user",
    method: "post",
    data
  });
}
/**
 * @description: 用户修改
 * @param  {*}
 * @return {*}
 * @Autor: shengliangjun
 * @Date: 2021-11-11 17:22:28
 * @param {*} data
 */
export function editUserApi(data) {
  return request({
    url: "/base/user",
    method: "patch",
    data
  });
}
/**
 * @description: 删除用户
 * @param  {*}
 * @return {*}
 * @Autor: shengliangjun
 * @Date: 2021-11-11 17:23:30
 * @param {*} data
 */
export function delUserApi(loginName) {
  return request({
    url: `/base/user/${loginName}`,
    method: "delete"
  });
}

/**
 * @description: 用户批量删除
 * @param  {*}
 * @return {*}
 * @Autor: shengliangjun
 * @Date: 2022-02-23 17:48:41
 * @param {*} loginName
 */
export function delManyUserApi(loginName) {
  return request({
    url: `/base/user/batchDelete/${loginName}`,
    method: "delete"
  });
}
/**
 * @description: 角色下拉列表
 * @param  {*}
 * @return {*}
 * @Autor: shengliangjun
 * @Date: 2022-01-10 11:20:50
 */
export function roleOptionApi() {
  return request({
    url: "/base/role/option",
    method: "GET"
  });
}

/**
 * @description:查看权限
 * @param  {*}
 * @return {*}
 * @Autor: shengliangjun
 * @Date: 2022-02-23 16:40:58
 */
export function selectUserAirlineApi(data) {
  return request({
    url: "/jc/userAirline/selectUserAirline",
    method: "POST",
    data
  });
}
/**
 * @description:签字权限查看
 * @param  {*}
 * @return {*}
 * @Autor: shengliangjun
 * @Date: 2022-02-23 17:04:23
 * @param {*} data
 */
export function selectIsSignApi(data) {
  return request({
    url: "/jc/userAirline/selectIsSign",
    method: "POST",
    data
  });
}

/**
 * @description: 航司权限设置
 * @param  {*}
 * @return {*}
 * @Autor: shengliangjun
 * @Date: 2022-02-23 17:09:22
 * @param {*} data
 */
export function editUserAirlineApi(data) {
  return request({
    url: "/jc/userAirline/edit",
    method: "POST",
    data
  });
}

/**
 * @description:签字权限设置
 * @param  {*}
 * @return {*}
 * @Autor: shengliangjun
 * @Date: 2022-02-23 17:18:25
 * @param {*} data
 */
export function isSignApi(data) {
  return request({
    url: "/jc/userAirline/isSign",
    method: "POST",
    data
  });
}

/**
 * @description: 下载条形码zip
 * @param  {*}
 * @return {*}
 * @Autor: shengliangjun
 * @Date: 2022-03-03 17:36:52
 * @param {*} data
 */
export function downloadUserBarCodeApi(data) {
  return request({
    url: "/base/user/downloadUserBarCode",
    method: "POST",
    data
  });
}
/**
 * @description: 用户导入
 * @param  {*}
 * @return {*}
 * @Autor: shengliangjun
 * @Date: 2022-03-04 11:18:46
 * @param {*} data
 */
export function userUploadApi(data) {
  return request({
    url: "/base/user/excel",
    method: "POST",
    data
  });
}
