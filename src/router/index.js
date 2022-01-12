/*
 * @Description:
 * @Author: weiyang
 * @Date: 2022-01-10 14:11:58
 * @LastEditors: weiyang
 * @LastEditTime: 2022-01-12 10:27:23
 */
import { createRouter, createWebHistory } from "vue-router";

export const constantRoutes = [
  // {
  //   path: "/redirect",
  //   name: "Redirect",
  //   component: Layout,
  //   isShow: false,
  //   children: [
  //     {
  //       path: "/redirect/:path(.*)",
  //       component: () => import("@/views/redirect.vue")
  //     }
  //   ]
  // },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login/index.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes
});
export default router;
