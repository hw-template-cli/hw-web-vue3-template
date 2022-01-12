/*
 * @Description:
 * @Author: weiyang
 * @Date: 2022-01-11 18:20:14
 * @LastEditors: weiyang
 * @LastEditTime: 2022-01-12 10:04:26
 */
/* eslint-disable no-use-before-define */
import { constantRoutes } from "@/router";
// import { getMenuApi } from "@/api/Menu";
import Layout from "@/layout/index.vue";
import { filterRouters } from "@/utils/util";
function sortData(a, b, field = "orderNo") {
  return a[field] - b[field];
}
const permission = {
  state: {
    routes: [],
    addRoutes: [],
    sidebarRouters: []
  },
  mutations: {
    SET_ROUTES: (state, routes) => {
      state.addRoutes = routes;
      state.routes = constantRoutes.concat(routes);
    },
    SET_SIDEBAR_ROUTERS: (state, routers) => {
      state.sidebarRouters = routers;
    }
  },
  actions: {
    // 生成路由
    GenerateRoutes({ commit }) {
      return new Promise(resolve => {
        // 向后端请求路由数据
        // getMenuApi().then(res => {
        //   console.log(res);
        //   const sdata = JSON.parse(JSON.stringify(res.data));
        //   const rdata = JSON.parse(JSON.stringify(res.data));
        //   const sidebarRoutes = filterRouters(sdata).sort(sortData);
        //   const rewriteRoutes = filterAsyncRouter(rdata, true);
        //   rewriteRoutes.push({ path: "/:catchAll(.*)", redirect: "/404", hidden: true });
        //   commit("SET_ROUTES", rewriteRoutes);
        //   commit("SET_SIDEBAR_ROUTERS", sidebarRoutes);
        //   resolve(rewriteRoutes);
        // });
      });
    }
  }
};

// 遍历后台传来的路由字符串，转换为组件对象
function filterAsyncRouter(asyncRouterMap, isRewrite = false) {
  return asyncRouterMap.filter(route => {
    if (isRewrite && route.children) {
      route.children = filterChildren(route.children);
    }
    if (route.component) {
      // Layout ParentView 组件特殊处理
      if (route.component === "Layout") {
        route.component = Layout;
      } else if (route.component === "ParentView") {
        route.component = ParentView;
      } else {
        route.path = route.component;
        // const tempUrl = "@/views" + route.component + "/index.vue";
        // const tempComponent = () =>
        //   Promise.resolve({
        //     tempUrl
        //   });
        // route.component = loadView(route.component);
      }
    }
    if (route.children != null && route.children && route.children.length) {
      route.children = filterAsyncRouter(route.children, route, isRewrite);
    }
    return true;
  });
}

function filterChildren(childrenMap) {
  let children = [];
  // eslint-disable-next-line no-unused-vars
  childrenMap.forEach((el, index) => {
    if (el.children && el.children.length) {
      if (el.component === "ParentView") {
        el.children.forEach(c => {
          c.path = el.path + "/" + c.path;
          if (c.children && c.children.length) {
            children = children.concat(filterChildren(c.children, c));
            return;
          }
          children.push(c);
        });
        return;
      }
    }
    children = children.concat(el);
  });
  return children;
}

export const loadView = view => {
  // 路由懒加载
  // return () => import("@/views" + view + "/index.vue");
  return () => import("@/views" + view + "/index.vue");
};

export default permission;
