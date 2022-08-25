/*
 * @Description:
 * @Author: weiyang
 * @Date: 2022-05-27 16:33:57
 * @LastEditors: weiyang
 * @LastEditTime: 2022-05-30 16:58:35
 */
import request from "@/utils/request";

// 档案列表
export function getArchivesList(data) {
  return request({
    url: "/etps/archives/list",
    data,
    method: "post"
  });
}

// 档案详情
export function getPeopleList(data) {
  return request({
    url: "/etps/archives/details",
    data,
    method: "post"
  });
}

// 档案详情
export function getPeopleDetails(data) {
  return request({
    url: "/etps/archives/student",
    data,
    method: "post"
  });
}

// 评价标准详情
export function getStandardDetails(params) {
  return request({
    url: `/etps/archives/evaluation/${params.code}`,
    method: "get"
  });
}
