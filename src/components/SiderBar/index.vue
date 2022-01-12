<!--
 * @Description:
 * @Author: weiyang
 * @Date: 2022-01-11 11:20:03
 * @LastEditors: weiyang
 * @LastEditTime: 2022-01-11 15:55:44
-->
<template>
  <div>
    <el-menu
      :default-active="activeMenu"
      :collapse="isCollapse"
      :background-color="variables.menuBg"
      :text-color="variables.menuText"
      :unique-opened="false"
      :active-text-color="variables.menuActiveText"
      :collapse-transition="true"
      mode="vertical"
      @select="selectHandle"
      class="edu-menu"
    >
      <SiderBarItem v-for="route in menuList" :key="route.component" :item="route" :base-path="route.component" />
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "EduSiderBar"
};
</script>
<script setup>
import { defineProps, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import SiderBarItem from "./SiderBarItem.vue";
import variables from "@/assets/style/variables.scss";
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  menuList: {
    type: Array,
    required: true,
    default: () => {
      return null;
    }
  },
  isCollapse: {
    type: Boolean,
    default: () => {
      return false;
    }
  }
});
const activeMenu = computed(() => {
  const route = useRoute();
  const { meta, path } = route;
  // if set path, the sidebar will highlight the path you set
  if (meta.activeMenu) {
    return meta.activeMenu;
  }
  return path;
});
const selectHandle = index => {
  const router = useRouter();
  if (index.indexOf(`/`) === 0) {
    router.push(index);
  } else {
    window.open(index);
  }
};
</script>

<style></style>
