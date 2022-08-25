import request from "@/utils/request";

// 查询字典列表
export function getdictListApi(data) {
  return request({
    url: "/base/dict/list",
    method: "post",
    data
  });
}
// 新增字典
export function addDictApi(data) {
  return request({
    url: "/base/dict",
    method: "post",
    data
  });
}
// 修改字典
export function editDictApi(data) {
  return request({
    url: "/base/dict",
    method: "patch",
    data
  });
}
// 删除字典
export function delDictApi(data) {
  return request({
    url: `/base/dict/${data}`,
    method: "delete"
  });
}
// 查询字典下拉列表
export function getDictOptionApi() {
  return request({
    url: `/base/dict/option`,
    method: "get"
  });
}

/**
 * @description: 查询字典值下拉列表
 * @param  {*}
 * @return {*}
 * @Autor: weiyang
 * @Date: 2021-11-15 14:34:08
 * @param {*} params
 */
export function getDictSelectListApi(params) {
  return request({
    url: `/base/dict/type/option/${params.type}`,
    method: "get"
  });
}
