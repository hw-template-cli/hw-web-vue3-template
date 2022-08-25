/*
 * @Description:学生管理api
 * @Author: shengliangjun
 * @Date: 2022-05-20 14:29:42
 * @LastEditors: shengliangjun
 * @LastEditTime: 2022-05-23 16:22:56
 */
import request from "@/utils/request";

/**
 * @description: 考生列表查询
 * @param  {*}
 * @return {*}
 * @Autor: shengliangjun
 * @Date: 2022-03-02 16:20:27
 */
export function studentSelectApi(data) {
  return request({
    url: "/etps/student/select",
    method: "POST",
    data
  });
}

/**
 * @description: 考生新增
 * @return {*}
 * @Autor: shengliangjun
 * @Date: 2022-05-23 15:25:25
 * @param undefined
 */
export function studentAddApi(data) {
  return request({
    url: "/etps/student/add",
    method: "POST",
    data
  });
}

/**
 * @description: 考生信息修改
 * @return {*}
 * @Autor: shengliangjun
 * @Date: 2022-05-23 16:01:07
 * @param undefined
 */
export function studentUpdateApi(data) {
  return request({
    url: "/etps/student/update",
    method: "PATCH",
    data
  });
}

/**
 * @description: 考生删除(批量用逗号拼接)
 * @return {*}
 * @Autor: shengliangjun
 * @Date: 2022-05-23 16:09:33
 * @param undefined
 */
export function studentDeleteApi(code) {
  return request({
    url: `/etps/student/${code}`,
    method: "DELETE"
  });
}

/**
 * @description: 考生导入
 * @return {*}
 * @Autor: shengliangjun
 * @Date: 2022-05-23 16:22:33
 * @param undefined
 */
export function studentImportApi(data) {
  return request({
    url: "/etps/student/import",
    method: "POST",
    data
  });
}
