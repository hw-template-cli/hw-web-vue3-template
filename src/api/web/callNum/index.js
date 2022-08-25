/*
 * @Description:叫号管理api
 * @Author: shengliangjun
 * @Date: 2022-05-20 14:29:42
 * @LastEditors: shengliangjun
 * @LastEditTime: 2022-05-27 15:18:17
 */
import request from "@/utils/request";

/**
 * @description: 阶段下拉选
 * @param  {*}
 * @return {*}
 * @Autor: shengliangjun
 * @Date: 2022-03-02 16:20:27
 */
export function selectPhaseApi(planCode) {
  return request({
    url: `/etps/callNumber/selectPhase/${planCode}`,
    method: "GET"
  });
}

/**
 * @description: 查询考组分配情况信息
 * @return {*}
 * @Autor: shengliangjun
 * @Date: 2022-05-27 10:56:36
 * @param {*} data
 */
export function selectStudentTestApi(data) {
  return request({
    url: "/etps/callNumber/selectStudentTest",
    method: "POST",
    data
  });
}

/**
 * @description: 学生等待队列查询
 * @return {*}
 * @Autor: shengliangjun
 * @Date: 2022-05-27 11:11:03
 * @param {*} data
 */
export function selectStudentWaitApi(data) {
  return request({
    url: "/etps/callNumber/selectStudentWait",
    method: "POST",
    data
  });
}

/**
 * @description: 扫码登录(人工登录)
 * @return {*}
 * @Autor: shengliangjun
 * @Date: 2022-05-27 13:45:57
 * @param {*} data
 */
export function signInApi(data) {
  return request({
    url: "/etps/callNumber/signIn",
    method: "POST",
    data
  });
}

/**
 * @description: 学生分配
 * @return {*}
 * @Autor: shengliangjun
 * @Date: 2022-05-27 15:18:09
 * @param {*} data
 */
export function allotStudentApi(data) {
  return request({
    url: "/etps/callNumber/allotStudent",
    method: "POST",
    data
  });
}
