/*
 * @Description:专家
 * @Author: shengliangjun
 * @Date: 2022-06-02 15:04:11
 * @LastEditors: shengliangjun
 * @LastEditTime: 2022-06-02 15:18:44
 */
import request from "@/utils/request";

/**
 * @description: 评分专家列表查询
 * @param  {*}
 * @return {*}
 * @Autor: shengliangjun
 * @Date: 2022-03-02 16:20:27
 */
export function getExpertSelectApi(data) {
  return request({
    url: "/etps/expert/select",
    method: "POST",
    data
  });
}

/**
 * @description: 评分专家新增
 * @return {*}
 * @Autor: shengliangjun
 * @Date: 2022-06-02 15:11:05
 * @param {*} data
 */
export function expertAddApi(data) {
  return request({
    url: "/etps/expert/add",
    method: "POST",
    data
  });
}

/**
 * @description: 评分专家信息修改
 * @return {*}
 * @Autor: shengliangjun
 * @Date: 2022-06-02 15:14:42
 * @param {*} data
 */
export function expertUpdateApi(data) {
  return request({
    url: "/etps/expert/update",
    method: "PATCH",
    data
  });
}

/**
 * @description: 评分专家删除(批量用逗号拼接)
 * @return {*}
 * @Autor: shengliangjun
 * @Date: 2022-06-02 15:17:25
 * @param {*}
 */
export function expertDeleteApi(code) {
  return request({
    url: `/etps/expert/${code}`,
    method: "DELETE"
  });
}

/**
 * @description: 评分专家导入
 * @return {*}
 * @Autor: shengliangjun
 * @Date: 2022-06-02 15:19:33
 * @param {*} data
 */
export function expertImportApi(data) {
  return request({
    url: "/etps/expert/import",
    method: "POST",
    data
  });
}
