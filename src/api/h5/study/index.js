/*
 * @Description: 学生学习
 * @Author: weiyang
 * @Date: 2022-04-11 16:24:06
 * @LastEditors: shengliangjun
 * @LastEditTime: 2022-04-19 10:05:00
 */
import request from "@/utils/request";

/**
 * @description:学生提交题目
 * @param  {*}
 * @return {*}
 * @Autor: shengliangjun
 * @Date: 2022-04-15 14:23:45
 * @param {*} data
 */
export function updateAnswerApi(data) {
  return request({
    url: "/mtcs/answer/updateAnswer",
    method: "post",
    data
  });
}

/**
 * @description: 学生题目查询
 * @param  {*}
 * @return {*}
 * @Autor: shengliangjun
 * @Date: 2022-04-18 17:24:08
 * @param {*}
 */
export function getStuSubjectApi() {
  return request({
    url: `/mtcs/answer/stuChoice`,
    method: "GET"
  });
}
