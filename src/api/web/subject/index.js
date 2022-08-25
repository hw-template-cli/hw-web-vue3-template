/*
 * @Description:
 * @Author: weiyang
 * @Date: 2022-05-25 10:57:51
 * @LastEditors: weiyang
 * @LastEditTime: 2022-05-26 16:41:05
 */
import request from "@/utils/request";

// 题目查询列表
export function querySubjectListApi(data) {
  return request({
    url: "/etps/question/selectList",
    method: "post",
    data
  });
}

// 题目删除
export function deleteSubjectListApi(params) {
  return request({
    url: `/etps/question/deleteQuestion/${params.code}`,
    method: "delete"
  });
}

// 后置绑定
export function rearBindApi(data) {
  return request({
    url: "/etps/question/bindRear",
    method: "patch",
    data
  });
}
// 后置解绑
export function rearUnBindApi(data) {
  return request({
    url: "/etps/question/unbindRear",
    method: "patch",
    data
  });
}

// 后置绑定题目列表查询
export function getRearListApi(data) {
  return request({
    url: "/etps/question/getRearList",
    method: "post",
    data
  });
}

// 客观题详细信息查询
export function queryObjectiveDetailsAPi(params) {
  return request({
    url: `/etps/question/questionsChoiceByCode/${params.code}`,
    method: "get"
  });
}

// 主观题详细信息查询
export function queryOperationDetailsApi(params) {
  return request({
    url: `/etps/question/questionsOperationByCode/${params.code}`,
    method: "get"
  });
}

// 选择题信息修改
export function modifyObjectiveApi(data) {
  return request({
    url: "/etps/question/modifyChoice",
    data,
    method: "patch"
  });
}

// 选择题信息修改
export function modifySubjectiveApi(data) {
  return request({
    url: "/etps/question/modifyOperation",
    data,
    method: "patch"
  });
}

// 客观题导入
export function choiceImportApi(data) {
  return request({
    url: "/etps/question/choiceImport",
    data,
    method: "post"
  });
}

// 主观题-操作题导入
export function operationImportApi(data) {
  return request({
    url: "/etps/question/operationImport",
    data,
    method: "post"
  });
}

// 评分表导入
export function standardImportApi(data) {
  return request({
    url: "/etps/question/standardImport",
    data,
    method: "post"
  });
}

// 评分表删除
export function standardDeleteApi(params) {
  return request({
    url: `/etps/question/deleteEvaluation/${params.code}`,
    method: "delete"
  });
}
