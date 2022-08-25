/*
 * @Description:考组管理api
 * @Author: shengliangjun
 * @Date: 2022-05-20 14:29:42
 * @LastEditors: shengliangjun
 * @LastEditTime: 2022-05-20 16:23:48
 */
import request from "@/utils/request";

/**
 * @description: 基地下拉列表
 * @param  {*}
 * @return {*}
 * @Autor: shengliangjun
 * @Date: 2022-03-02 16:20:27
 */
export function getBaseOptionsApi() {
  return request({
    url: "/etps/question/selectBase",
    method: "GET"
  });
}

/**
 * @description: 考组列表查询
 * @return {*}
 * @Autor: shengliangjun
 * @Date: 2022-05-20 14:39:02
 * @param undefined
 */
export function getComputerSelectApi(data) {
  return request({
    url: "/etps/computer/select",
    method: "POST",
    data
  });
}

/**
 * @description: 考组新增
 * @return {*}
 * @Autor: shengliangjun
 * @Date: 2022-05-20 15:06:02
 * @param undefined
 */
export function computerAddApi(data) {
  return request({
    url: "/etps/computer/add",
    method: "POST",
    data
  });
}

/**
 * @description: 考组信息修改
 * @return {*}
 * @Autor: shengliangjun
 * @Date: 2022-05-20 15:16:55
 * @param undefined
 */
export function computerUpdateApi(data) {
  return request({
    url: "/etps/computer/update",
    method: "PATCH",
    data
  });
}

/**
 * @description: 考组删除
 * @return {*}
 * @Autor: shengliangjun
 * @Date: 2022-05-20 15:23:39
 * @param undefined
 */
export function computerDeleteApi(code) {
  return request({
    url: `/etps/computer/${code}`,
    method: "DELETE"
  });
}
