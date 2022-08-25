/*
 * @Description: 日志api
 * @Author: shengliangjun
 * @Date: 2021-11-10 18:42:06
 * @LastEditors: shengliangjun
 * @LastEditTime: 2021-11-10 20:11:25
 */
import request from "@/utils/request";
/**
 * @description: 查询操作日志
 * @param  {*}
 * @return {*}
 * @Autor: shengliangjun
 * @Date: 2021-11-10 19:53:26
 * @param {*} data
 */
export function getOperateLogApi(data) {
  return request({
    url: "/base/operateLog/v1.0.0/getOperateLog",
    method: "post",
    data
  });
}

/**
 * @description: 导出日志
 * @param  {*}
 * @return {*}
 * @Autor: shengliangjun
 * @Date: 2021-11-10 20:10:56
 */
export function exportLogByPageApi(data) {
  return request({
    url: "/base/operateLog/v1.0.0/exportLogByPage",
    method: "post",
    data
  });
}
