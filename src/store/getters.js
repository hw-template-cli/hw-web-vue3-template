/*
 * @Description:
 * @Author: weiyang
 * @Date: 2022-01-11 18:19:17
 * @LastEditors: weiyang
 * @LastEditTime: 2022-01-11 18:19:18
 */
const getters = {
  sidebar: state => state.app.sidebar,
  permission_routes: state => state.permission.routes,
  sidebarRouters: state => state.permission.sidebarRouters
};
export default getters;
