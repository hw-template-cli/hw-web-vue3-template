<!--
 * @Description:
 * @Author: weiyang
 * @Date: 2022-01-11 15:12:35
 * @LastEditors: weiyang
 * @LastEditTime: 2022-01-11 15:30:40
-->
<template>
  <component :is="type" v-bind="linkProps(to)">
    <slot />
  </component>
</template>

<script setup>
import { defineProps, computed } from "vue";
import { isExternalFn } from "@/utils/validate";
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  to: {
    type: String,
    required: true
  }
});
const isExternal = computed(() => {
  return isExternalFn(props.to);
});
const type = computed(() => {
  if (isExternal.value) {
    return "a";
  }
  return "router-link";
});
const linkProps = to => {
  if (isExternal.value) {
    return {
      href: to,
      target: "_blank",
      rel: "noopener"
    };
  }
  return {
    to
  };
};
</script>
