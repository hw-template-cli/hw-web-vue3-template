/*
 * @Description:
 * @Author: weiyang
 * @Date: 2021-11-11 13:55:31
 * @LastEditors: shengliangjun
 * @LastEditTime: 2022-02-22 16:38:48
 */
import request from "@/utils/request";

/**
 * @description: 获取角色列表
 * @param  {*}
 * @return {*}
 * @Autor: weiyang
 * @Date: 2021-11-11 13:56:57
 * @param {*} data
 */
export function getRoleListApi(data) {
  return request({
    url: "/base/role/list",
    method: "post",
    data
  });
}

/**
 * @description: 新增角色
 * @param  {*}
 * @return {*}
 * @Autor: weiyang
 * @Date: 2021-11-11 13:57:44
 * @param {*} data
 */
export function addRoleApi(data) {
  return request({
    url: "/base/role",
    method: "post",
    data
  });
}

/**
 * @description: 修改角色
 * @param  {*}
 * @return {*}
 * @Autor: weiyang
 * @Date: 2021-11-11 13:58:18
 * @param {*} data
 */
export function modifyRoleApi(data) {
  return request({
    url: "/base/role/modify",
    method: "patch",
    data
  });
}

/**
 * @description: 删除角色
 * @param  {*}
 * @return {*}
 * @Autor: weiyang
 * @Date: 2021-11-11 14:00:20
 * @param {*} params
 */
export function deleteRoleApi(params) {
  return request({
    url: `/base/role/${params.code}`,
    method: "delete"
  });
}

/**
 * @description: 角色详情
 * @param  {*}
 * @return {*}
 * @Autor: weiyang
 * @Date: 2021-11-11 17:21:17
 * @param {*} parmas
 */
export function getRoleDetailApi(parmas) {
  return request({
    url: `/base/role/${parmas.code}`,
    method: "get"
  });
}
/**
 * @description: 根据条件获取菜单
 * @param  {*}
 * @return {*}
 * @Autor: weiyang
 * @Date: 2021-11-08 14:17:35
 * @param {*} data
 */
export function getMenuConditionApi(data) {
  return request({
    url: "/base/menu/list",
    method: "post",
    data
  });
}
