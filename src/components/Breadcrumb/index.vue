<!--
 * @Description:
 * @Author: weiyang
 * @Date: 2022-01-11 15:57:21
 * @LastEditors: weiyang
 * @LastEditTime: 2022-01-11 16:15:45
-->
<template>
  <div class="edu-breadcrumb">
    <el-breadcrumb separator="/">
      <transition-group name="breadcrumb">
        <el-breadcrumb-item v-for="item in breadcrumbData" :key="item.code">{{ item.name }}</el-breadcrumb-item>
      </transition-group>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: "EduBreadCrumb"
};
</script>

<script setup>
// 引入
import { reactive, defineProps, watch, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import { deepClone } from "@/utils/util";
// 组件传值
const props = defineProps({
  menuList: {
    type: Array,
    default: () => {
      return [];
    }
  }
});

// 定义数据
const status = reactive({
  breadcrumbData: [],
  allMenus: []
});

// 生命周期
onBeforeMount(() => {
  getAllMenus(props.menuList);
  getBreadcrumb();
});

// 计算属性

// 定义方法
const getBreadcrumb = () => {
  const route = useRoute();
  const breadcrumbData = [];
  const code =
    status.allMenus.find(item => item.component === route.path) &&
    status.allMenus.find(item => item.component === route.path).code;
  const findHandle = data => {
    const currentItem = status.allMenus.find(item => item.code === data);
    if (currentItem) {
      // const parentId = currentItem.parentId;
      breadcrumbData.unshift(currentItem);
      if (currentItem.parentId !== "0") {
        findHandle(currentItem.parentNo);
      }
    }
  };
  findHandle(code);
  status.breadcrumbData = breadcrumbData;
};

const getAllMenus = menus => {
  const allMenus = [];
  const handle = data => {
    data.forEach(item => {
      allMenus.push(deepClone(item));
      if (item.children && item.children.length > 0) {
        handle(item.children);
      }
    });
  };
  handle(menus);
  status.allMenus = allMenus;
};
// 监听
watch(
  () => useRoute(),
  route => {
    // if you go to the redirect page, do not update the breadcrumbs
    if (route.path.startsWith("/redirect/")) {
      return;
    }
    getBreadcrumb();
  }
);
</script>

<style lang="scss">
.edu-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;
  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
  .el-breadcrumb .el-breadcrumb__item .el-breadcrumb__inner.is-link {
    cursor: pointer;
    font-weight: 700;
    color: #303133;
  }
}
.breadcrumb-enter-active {
  transition: all 0.5s;
}

.breadcrumb-enter {
  opacity: 0;
  transform: translateX(20px);
}
</style>
