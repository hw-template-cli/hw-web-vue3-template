<!--
 * @Description:
 * @Author: weiyang
 * @Date: 2022-01-10 15:36:02
 * @LastEditors: weiyang
 * @LastEditTime: 2022-01-11 17:23:10
-->
<template>
  <div class="edu_layout">
    <header class="edu_layout_header">
      <div class="header_left">
        <img :src="logo" alt="logo" class="header_img" />
        <span class="header_title">{{ title }}</span>
      </div>
      <div class="header_right">
        <span class="header_time"> {{ time }} </span>
        <div class="header_date">
          <span class="date">{{ date }}</span>
          <span class="week">{{ week }}</span>
        </div>
        <slot />
      </div>
    </header>
    <main class="edu-layout-main">
      <aside class="edu-layout-aside">
        <SiderBar :menuList="menuList" :isCollapse="isCollapse" class="siderbar-container" />
      </aside>
      <div class="edu-layout-container">
        <header class="breadcrumb">
          <!-- <el-icon v-if="!isCollapse" @click="switchCollapse"><fold /></el-icon> -->
          <el-link type="info" icon="el-icon-s-fold" v-if="!isCollapse" @click="switchCollapse"></el-link>
          <el-link type="info" icon="el-icon-s-unfold" v-else @click="switchCollapse"></el-link>
          <!-- <el-icon v-else @click="switchCollapse"><expand /></el-icon> -->
          <BreadCrumb :menuList="menuList" />
        </header>
        <div class="layout-container-content">
          <router-view />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "EduLayout"
};
</script>
<script setup>
import { reactive, toRefs, defineProps, onBeforeMount, getCurrentInstance } from "vue";
import SiderBar from "@/components/SiderBar/index.vue";
import BreadCrumb from "@/components/Breadcrumb/index.vue";
const { proxy } = getCurrentInstance(); // 访问全局变量和方法，类似this
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  logo: {
    type: String,
    default: () => {
      return "";
    }
  },
  title: {
    type: String,
    default: () => {
      return "后台管理系统";
    }
  },
  menuList: {
    type: Array,
    required: true,
    default: () => {
      return null;
    }
  },
  width: {
    type: [String, Number],
    default: () => {
      return "250";
    }
  }
});
const status = reactive({
  isCollapse: false,
  time: "",
  date: "",
  week: ""
});
const { isCollapse, time, date, week } = toRefs(status);
onBeforeMount(() => {
  setInterval(() => {
    status.time = proxy.DateFormat.format(new Date(), "hh:mm:ss");
    status.date = proxy.DateFormat.format(new Date(), "yyyy-MM-dd");
    status.week = proxy.DateFormat.format(new Date(), "EE");
  }, 1000);
});
// 切换侧边栏
const switchCollapse = () => {
  status.isCollapse = !status.isCollapse;
};
</script>

<style lang="scss" scoped>
.edu_layout {
  width: 100vw;
  height: 100vh;
  background: #ffffff;
  .edu_layout_header {
    width: 100%;
    height: 60px;
    background: #222d33;
    box-sizing: border-box;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .header_left {
      display: flex;
      .header_img {
        height: 30px;
        display: flex;
        align-items: center;
      }
      .header_title {
        font-size: 24px;
        color: #ffffff;
        margin-left: 20px;
      }
    }
    .header_right {
      display: flex;
      align-items: center;
      .header_time {
        font-size: 24px;
        color: #ffffff;
      }
      .header_date {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 20px;
        .date,
        .week {
          font-size: 14px;
          color: #ffffff;
        }
      }
    }
  }
  .edu-layout-main {
    width: 100%;
    height: calc(100vh - 60px);
    display: flex;

    .edu-layout-aside {
      height: 100%;
    }
    .edu-layout-container {
      width: 0;
      flex: 1;
      box-sizing: border-box;
      background: #edf5fb;
      display: flex;
      flex-direction: column;
      .breadcrumb {
        width: 100%;
        height: 40px;
        background: #ffffff;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        padding: 0 20px;
      }
      .layout-container-content {
        width: 100%;
        height: 0;
        flex: 1;
        box-sizing: border-box;
        padding: 20px;
      }
    }
  }
}
</style>
