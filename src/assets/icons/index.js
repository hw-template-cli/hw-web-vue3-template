/*
 * @Description:
 * @Author: weiyang
 * @Date: 2021-11-06 15:32:17
 * @LastEditors: weiyang
 * @LastEditTime: 2021-11-07 10:07:46
 */

// register globally
// Vue.component("svg-icon", SvgIcon);

const req = require.context("./svg", false, /\.svg$/);
const requireAll = requireContext => requireContext.keys().map(requireContext);
requireAll(req);
