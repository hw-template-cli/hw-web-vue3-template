/*
 * @Description:基地管理api
 * @Author: shengliangjun
 * @Date: 2022-05-19 17:10:34
 * @LastEditors: shengliangjun
 * @LastEditTime: 2022-05-20 14:10:46
 */
import request from "@/utils/request";

/**
 * @description: 基地列表查询
 * @param  {*}
 * @return {*}
 * @Autor: shengliangjun
 * @Date: 2022-03-02 16:20:27
 */
export function getBaseListApi(data) {
  return request({
    url: "/etps/base/select",
    method: "POST",
    data
  });
}

/**
 * @description: 基地新增
 * @return {*}
 * @Autor: shengliangjun
 * @Date: 2022-05-19 17:24:27
 * @param undefined
 */
export function baseAddApi(data) {
  return request({
    url: "/etps/base/add",
    method: "POST",
    data
  });
}

/**
 * @description: 基地信息修改
 * @return {*}
 * @Autor: shengliangjun
 * @Date: 2022-05-19 17:35:03
 * @param undefined
 */
export function baseUpdateApi(data) {
  return request({
    url: "/etps/base/update",
    method: "PATCH",
    data
  });
}

/**
 * @description:基地删除
 * @return {*}
 * @Autor: shengliangjun
 * @Date: 2022-05-19 17:39:23
 * @param undefined
 */
export function baseDeleteApi(code) {
  return request({
    url: `/etps/base/${code}`,
    method: "DELETE"
  });
}

/**
 * @description: 基地绑定管理员列表
 * @return {*}
 * @Autor: shengliangjun
 * @Date: 2022-05-20 14:03:30
 * @param undefined
 */
export function baseUserApi(data) {
  return request({
    url: "/etps/base/user",
    method: "POST",
    data
  });
}

/**
 * @description: 绑定-解绑基地管理员
 * @return {*}
 * @Autor: shengliangjun
 * @Date: 2022-05-20 14:10:37
 * @param undefined
 */
export function baseBindApi(data) {
  return request({
    url: "/etps/base/bind",
    method: "PATCH",
    data
  });
}
