/*
 * @Description:菜单
 * @Author: weiyang
 * @Date: 2021-11-08 13:52:57
 * @LastEditors: weiyang
 * @LastEditTime: 2021-11-12 15:01:12
 */
import request from "@/utils/request";

/**
 * @description: 获取菜单
 * @param  {*}
 * @return {*}
 * @Autor: weiyang
 * @Date: 2021-11-08 13:54:40
 */
export function getMenuApi() {
  return request({
    url: "/base/menu/user",
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
/**
 * @description: 新增菜单
 * @param  {*}
 * @return {*}
 * @Autor: weiyang
 * @Date: 2021-11-10 19:47:32
 * @param {*} data
 */
export function addNewMenuApi(data) {
  return request({
    url: "/base/menu",
    method: "post",
    data
  });
}

/**
 * @description: 删除菜单
 * @param  {*}
 * @return {*}
 * @Autor: weiyang
 * @Date: 2021-11-10 20:45:46
 * @param {*} params
 */
export function deleteMenuApi(params) {
  return request({
    url: `/base/menu/${params.code}`,
    method: "delete"
  });
}

/**
 * @description: 菜单修改
 * @param  {*}
 * @return {*}
 * @Autor: weiyang
 * @Date: 2021-11-11 09:28:40
 * @param {*} data
 */
export function modifyMenuApi(data) {
  return request({
    url: "/base/menu/modify",
    method: "patch",
    data
  });
}
