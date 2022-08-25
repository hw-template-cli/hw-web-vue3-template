/*
 * @Description: 组织管理
 * @Author: shengliangjun
 * @Date: 2022-03-02 16:19:36
 * @LastEditors: shengliangjun
 * @LastEditTime: 2022-03-02 16:53:55
 */

import request from "@/utils/request";

/**
 * @description: 列表查询
 * @param  {*}
 * @return {*}
 * @Autor: shengliangjun
 * @Date: 2022-03-02 16:20:27
 */
export function getDeptListApi(data) {
  return request({
    url: "/base/dept/list",
    method: "POST",
    data
  });
}

/**
 * @description: 组织新增
 * @param  {*}
 * @return {*}
 * @Autor: shengliangjun
 * @Date: 2022-03-02 16:52:22
 * @param {*} data
 */
export function addDeptApi(data) {
  return request({
    url: "/base/dept",
    method: "POST",
    data
  });

  /**
   * @description: 组织修改
   * @param  {*}
   * @return {*}
   * @Autor: shengliangjun
   * @Date: 2022-03-02 16:52:34
   */
}
export function editDeptApi(data) {
  return request({
    url: "/base/dept",
    method: "PATCH",
    data
  });
}

/**
 * @description:组织删除
 * @param  {*}
 * @return {*}
 * @Autor: shengliangjun
 * @Date: 2022-03-02 16:53:14
 * @param {*} code
 */
export function delDeptApi(code) {
  return request({
    url: `/base/dept/${code}`,
    method: "DELETE"
  });
}
