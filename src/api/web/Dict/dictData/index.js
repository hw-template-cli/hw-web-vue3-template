/*
 * @Description: 字典详情api
 * @Author: shengliangjun
 * @Date: 2021-11-11 13:37:57
 * @LastEditors: shengliangjun
 * @LastEditTime: 2021-11-11 15:10:09
 */
import request from "@/utils/request";

/**
 * @description: 查询字典值列表
 * @param  {*}
 * @return {*}
 * @Autor: shengliangjun
 * @Date: 2021-11-11 13:55:47
 * @param {*} data
 */
export function getdictTypeListApi(data) {
  return request({
    url: "/base/dict/type/list",
    method: "post",
    data
  });
}
/**
 * @description: 新增字典值
 * @param  {*}
 * @return {*}
 * @Autor: shengliangjun
 * @Date: 2021-11-11 14:24:03
 * @param {*} data
 */
export function addDictTypeApi(data) {
  return request({
    url: "/base/dict/type",
    method: "post",
    data
  });
}
/**
 * @description: 修改字典值
 * @param  {*}
 * @return {*}
 * @Autor: shengliangjun
 * @Date: 2021-11-11 14:43:51
 * @param {*} data
 */
export function editDictTypeApi(data) {
  return request({
    url: "/base/dict/type",
    method: "patch",
    data
  });
}
/**
 * @description: 删除字典值
 * @param  {*}
 * @return {*}
 * @Autor: shengliangjun
 * @Date: 2021-11-11 14:48:53
 * @param {*} data
 */
export function delDictTypeApi(code) {
  return request({
    url: `/base/dict/type/${code}`,
    method: "delete"
  });
}
