/*
 * @Description:计划管理api
 * @Author: shengliangjun
 * @Date: 2022-05-20 14:29:42
 * @LastEditors: shengliangjun
 * @LastEditTime: 2022-06-16 17:56:36
 */
import request from "@/utils/request";

/**
 * @description: 计划列表查询
 * @param  {*}
 * @return {*}
 * @Autor: shengliangjun
 * @Date: 2022-03-02 16:20:27
 */
export function getPlanSelectApi(data) {
  return request({
    url: "/etps/plan/select",
    method: "POST",
    data
  });
}

/**
 * @description: 计划新增
 * @return {*}
 * @Autor: shengliangjun
 * @Date: 2022-05-23 11:28:46
 * @param undefined
 */
export function planAddApi(data) {
  return request({
    url: "/etps/plan/add",
    method: "POST",
    data
  });
}

/**
 * @description: 计划信息修改
 * @return {*}
 * @Autor: shengliangjun
 * @Date: 2022-05-23 14:06:22
 * @param undefined
 */
export function planUpdateApi(data) {
  return request({
    url: "/etps/plan/update",
    method: "PATCH",
    data
  });
}

/**
 * @description: 计划删除
 * @return {*}
 * @Autor: shengliangjun
 * @Date: 2022-05-23 14:14:00
 * @param undefined
 */
export function planDeleteApi(code) {
  return request({
    url: `/etps/plan/${code}`,
    method: "DELETE"
  });
}

/**
 * @description: 计划已绑定学生查询
 * @return {*}
 * @Autor: shengliangjun
 * @Date: 2022-05-25 16:48:49
 * @param undefined
 */
export function selectPlanStudentBindApi(data) {
  return request({
    url: "/etps/plan/selectPlanStudentBind",
    method: "POST",
    data
  });
}

/**
 * @description: 计划未绑定学生查询
 * @return {*}
 * @Autor: shengliangjun
 * @Date: 2022-05-25 16:58:26
 * @param undefined
 */
export function selectPlanStudentUnBindApi(data) {
  return request({
    url: "/etps/plan/selectPlanStudentUnBind",
    method: "POST",
    data
  });
}

/**
 * @description: 绑定学生
 * @return {*}
 * @Autor: shengliangjun
 * @Date: 2022-05-25 17:23:08
 * @param undefined
 */
export function bindstudentApi(data) {
  return request({
    url: "/etps/plan/bindstudent",
    method: "PATCH",
    data
  });
}

/**
 * @description: 解绑学生
 * @return {*}
 * @Autor: shengliangjun
 * @Date: 2022-05-25 17:31:41
 * @param undefined
 */
export function unBindStudentApi(data) {
  return request({
    url: "/etps/plan/unBindStudent",
    method: "PATCH",
    data
  });
}

/**
 * @description: 评分专家里列表查询
 * @return {*}
 * @Autor: shengliangjun
 * @Date: 2022-05-26 10:23:42
 * @param {*} data
 */
export function selectExpertListApi(data) {
  return request({
    url: "/etps/plan/selectExpertList",
    method: "POST",
    data
  });
}

/**
 * @description: 阅卷分配--考官
 * @return {*}
 * @Autor: shengliangjun
 * @Date: 2022-05-26 11:02:31
 * @param {*} data
 */
export function markAllocationApi(data) {
  return request({
    url: "/etps/marking/allocation",
    method: "POST",
    data
  });
}

/**
 * @description: 绑定评分专家
 * @return {*}
 * @Autor: shengliangjun
 * @Date: 2022-05-26 14:44:37
 * @param {*} data
 */
export function bindExpertsApi(data) {
  return request({
    url: "/etps/plan/bindExperts",
    method: "POST",
    data
  });
}

/**
 * @description: 解绑评分专家
 * @return {*}
 * @Autor: shengliangjun
 * @Date: 2022-05-26 14:55:09
 * @param {*} data
 */
export function unbindExpertsApi(data) {
  return request({
    url: "/etps/plan/unbindExperts",
    method: "POST",
    data
  });
}

/**
 * @description: 阅卷状态查询
 * @return {*}
 * @Autor: shengliangjun
 * @Date: 2022-05-26 11:21:55
 * @param {*} planCode
 */
export function markselectStatusApi(planCode) {
  return request({
    url: `/etps/marking/selectStatus/${planCode}`,
    method: "GET"
  });
}

/**
 * @description: 阅卷状态查询
 * @return {*}
 * @Autor: shengliangjun
 * @Date: 2022-05-26 15:28:09
 * @param {*} data
 */
export function selectMarkingStatusApi(data) {
  return request({
    url: "/etps/plan/selectMarkingStatus",
    method: "POST",
    data
  });
}

/**
 * @description: 学生预约
 * @return {*}
 * @Autor: shengliangjun
 * @Date: 2022-05-26 17:31:47
 * @param {*} data
 */
export function studentReserveApi(data) {
  return request({
    url: "/etps/plan/studentReserve",
    method: "PATCH",
    data
  });
}

/**
 * @description: 计划完成进度查询
 * @return {*}
 * @Autor: shengliangjun
 * @Date: 2022-06-16 17:55:54
 * @param {*} planCode
 */
export function selectScheduleApi(planCode) {
  return request({
    url: `/etps/plan/selectSchedule/${planCode}`,
    method: "GET"
  });
}
