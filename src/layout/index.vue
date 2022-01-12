<!--
 * @Description:
 * @Author: weiyang
 * @Date: 2022-01-11 17:24:56
 * @LastEditors: weiyang
 * @LastEditTime: 2022-01-11 18:10:31
-->
<template>
  <div>
    <Edu-layout :menuList="sidebarRouters" :logo="logo" title="中医规范化培训考核训练云平台">
      <el-dropdown placement="bottom" trigger="hover">
        <div class="user-info">
          <el-avatar> {{ userInfo.loginName || "" }} </el-avatar>
          <span class="name">{{ userInfo.loginName || "" }}</span>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="handleLogout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </Edu-layout>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { removeToken } from "@/utils/auth";
import EduLayout from "@/components/layout/index.vue";
// import logo from "@/assets/img/logo.png";
const store = useStore();
const sidebarRouters = computed(() => {
  return store.state.sidebarRouters;
});
const userInfo = computed(() => {
  return JSON.parse(sessionStorage.getItem("userInfo")) || "";
});
const handleLogout = () => {
  removeToken();
};
</script>

<style scoped lang="scss">
.user-info {
  display: flex;
  align-items: center;
  cursor: pointer;
  .name {
    margin-left: 10px;
    color: #ffffff;
  }
  li {
    cursor: pointer;
    &:hover {
      background: #eeeeee;
    }
  }
}
</style>
