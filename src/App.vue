<script setup lang="ts">
import { computed, ref } from 'vue';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
import en from 'element-plus/dist/locale/en.mjs';

const language = ref('zh-cn');
const locale = computed(() => (language.value === 'zh-cn' ? zhCn : en));

// const toggle = () => {
//   language.value = language.value === 'zh-cn' ? 'en' : 'zh-cn';
// };
</script>

<template>
  <div id="app">
    <el-config-provider :locale="locale">
      <router-view></router-view>
      <!-- 渲染匹配的路由组件 -->
    </el-config-provider>
  </div>
</template>

<style scoped></style>
