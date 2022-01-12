<!--
 * @Description:
 * @Author: weiyang
 * @Date: 2022-01-11 11:25:55
 * @LastEditors: weiyang
 * @LastEditTime: 2022-01-11 16:21:30
-->
<template>
  <fragment v-if="item.status === `0` && item.isShow === `1`">
    <el-sub-menu v-if="item.children && item.children.length > 0" ref="subMenu" :index="resolvePath(item.component)">
      <template #title>
        <SvgIcon :icon-class="item.icon" />
        <span>{{ item.name }}</span>
      </template>
      <sidebar-item
        v-for="child in item.children"
        :key="child.component"
        :is-nest="true"
        :item="child"
        :base-path="resolvePath(child.component)"
        class="nest-menu"
      />
    </el-sub-menu>
    <el-menu-item v-else-if="item.isThird === `0`" :index="item.thirdLink">
      <SvgIcon :icon-class="item.icon" />
      <span>{{ item.name }}</span>
    </el-menu-item>
    <el-menu-item v-else :index="`${item.component}`">
      <SvgIcon :icon-class="item.icon" />
      <span>{{ item.name }}</span>
    </el-menu-item>
  </fragment>
</template>

<script>
export default {
  name: "SidebarItem"
};
</script>
<script setup>
import { reactive, defineProps } from "vue";
import path from "path";
import { isExternalFn } from "@/utils/validate";
import SvgIcon from "../SvgIcon/index.vue";
const props = defineProps({
  item: {
    type: Object,
    required: true
  },
  isNest: {
    type: Boolean,
    default: false
  },
  basePath: {
    type: String,
    default: ""
  }
});
const data = reactive({
  onlyOneChild: null
});
// eslint-disable-next-line no-unused-vars
const hasOneShowingChild = (children = [], parent) => {
  const showingChildren = children.filter(item => {
    if (item.isShow) {
      return false;
    } else {
      // Temp set(will be used if only has one showing child)
      data.onlyOneChild = item;
      return true;
    }
  });
  // When there is only one child router, the child router is displayed by default
  if (showingChildren.length === 1) {
    return true;
  }
  // Show parent if there are no child router to display
  if (showingChildren.length === 0) {
    data.onlyOneChild = { ...parent, path: "", noShowingChildren: true };
    return true;
  }
  return false;
};
const resolvePath = routePath => {
  if (isExternalFn(routePath)) {
    return routePath;
  }
  if (isExternalFn(props.basePath)) {
    return props.basePath;
  }
  return path.resolve(props.basePath, routePath);
};
</script>
