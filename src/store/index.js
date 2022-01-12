/*
 * @Description:
 * @Author: weiyang
 * @Date: 2022-01-10 14:11:58
 * @LastEditors: weiyang
 * @LastEditTime: 2022-01-11 18:19:06
 */
import Vuex from "vuex";
import getters from "./getters";

// https://webpack.js.org/guides/dependency-management/#requirecontext
const modulesFiles = require.context("./modules", true, /\.js$/);

// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, "$1");
  const value = modulesFiles(modulePath);
  modules[moduleName] = value.default;
  return modules;
}, {});

const store = new Vuex.Store({
  modules,
  getters
});

export default store;
