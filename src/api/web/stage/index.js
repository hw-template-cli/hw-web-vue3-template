/*
 * @Description:计划管理-试题（阶段）管理api
 * @Author: shengliangjun
 * @Date: 2022-05-20 14:29:42
 * @LastEditors: shengliangjun
 * @LastEditTime: 2022-05-25 15:06:11
 */
import request from "@/utils/request";

/**
 * @description: 阶段列表查询
 * @param  {*}
 * @return {*}
 * @Autor: shengliangjun
 * @Date: 2022-03-02 16:20:27
 */
export function getPhaseSelectApi(data) {
  return request({
    url: "/etps/phase/select",
    method: "POST",
    data
  });
}

/**
 * @description: 阶段新增
 * @return {*}
 * @Autor: shengliangjun
 * @Date: 2022-05-24 10:29:19
 * @param undefined
 */
export function phaseAddApi(data) {
  return request({
    url: "/etps/phase/add",
    method: "POST",
    data
  });
}

/**
 * @description: 阶段信息修改
 * @return {*}
 * @Autor: shengliangjun
 * @Date: 2022-05-24 10:59:47
 * @param undefined
 */
export function phaseUpdateApi(data) {
  return request({
    url: "/etps/phase/update",
    method: "PATCH",
    data
  });
}

/**
 * @description: 阶段删除
 * @return {*}
 * @Autor: shengliangjun
 * @Date: 2022-05-24 11:02:58
 * @param undefined
 */
export function phaseDeleteApi(code) {
  return request({
    url: `/etps/phase/${code}`,
    method: "DELETE"
  });
}

/**
 * @description: 阶段已绑定试题列表查询
 * @return {*}
 * @Autor: shengliangjun
 * @Date: 2022-05-24 13:53:20
 * @param undefined
 */
export function selectPhaseQuestionBindApi(data) {
  return request({
    url: "/etps/phase/selectPhaseQuestionBind",
    method: "POST",
    data
  });
}

/**
 * @description: 阶段未绑定试题列表查询
 * @return {*}
 * @Autor: shengliangjun
 * @Date: 2022-05-24 16:40:12
 * @param undefined
 */
export function selectPhaseQuestionUnBindApi(data) {
  return request({
    url: "/etps/phase/selectPhaseQuestionUnBind",
    method: "POST",
    data
  });
}

/**
 * @description: 阶段已绑定考组列表查询
 * @return {*}
 * @Autor: shengliangjun
 * @Date: 2022-05-25 11:13:57
 * @param undefined
 */
export function selectPhaseComputerBindApi(data) {
  return request({
    url: "/etps/phase/selectPhaseComputerBind",
    method: "POST",
    data
  });
}

/**
 * @description: 阶段未绑定考组列表查询
 * @return {*}
 * @Autor: shengliangjun
 * @Date: 2022-05-25 11:14:24
 * @param undefined
 */
export function selectPhaseComputerUnBindApi(data) {
  return request({
    url: "/etps/phase/selectPhaseComputerUnBind",
    method: "POST",
    data
  });
}

/**
 * @description: 阶段绑定试题
 * @return {*}
 * @Autor: shengliangjun
 * @Date: 2022-05-25 14:04:13
 * @param undefined
 */
export function bindQuestiondApi(data) {
  return request({
    url: "/etps/phase/bindQuestion",
    method: "POST",
    data
  });
}

/**
 * @description: 阶段解绑试题
 * @return {*}
 * @Autor: shengliangjun
 * @Date: 2022-05-25 14:32:07
 * @param undefined
 */
export function unBindQuestionApi(data) {
  return request({
    url: "/etps/phase/unBindQuestion",
    method: "POST",
    data
  });
}

/**
 * @description: 阶段绑定考组
 * @return {*}
 * @Autor: shengliangjun
 * @Date: 2022-05-25 14:36:45
 * @param undefined
 */
export function bindComputerApi(data) {
  return request({
    url: "/etps/phase/bindComputer",
    method: "POST",
    data
  });
}

/**
 * @description: 阶段解绑考组
 * @return {*}
 * @Autor: shengliangjun
 * @Date: 2022-05-25 15:05:58
 * @param undefined
 */
export function unBindComputer(data) {
  return request({
    url: "/etps/phase/unBindComputer",
    method: "POST",
    data
  });
}
