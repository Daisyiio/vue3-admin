<template>
  <div class="common-layout">
    <el-container class="container-box">
      <el-aside width="200px" class="aside">
        <MenuCpm />
      </el-aside>
      <el-container>
        <el-header class="header" id="commonHeader">Header</el-header>
        <el-main class="container-main">
          <router-view v-slot="{ Component }">
            <component :is="Component"></component>
          </router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="tsx">
import MenuCpm from './MenuCpm.vue'
import {
  // ref,
  // reactive,
  // computed,
  onMounted,
  onUpdated,
  onUnmounted,
} from 'vue';

defineOptions({
  name: 'CommonLayout', // 给组件指定名称
});

onMounted(() => {
  console.log('Component mounted');
});

onUpdated(() => {
  console.log('Component updated');
});

onUnmounted(() => {
  console.log('Component unmounted');
});
</script>

<style lang="scss">
:root {
  --asideBkc: #1a1a1a;
  --headerBkc: #2c3e50;
  --containerMainBkc: #ffffff;
}

.common-layout {
  height: 100%;

  .container-box {
    height: 100%;

    .aside {
      height: 100%;
      background-color: var(--asideBkc)
    }

    .header {
      background-color: var(--headerBkc);
      color: #ffffff;
      padding: 20px;
    }

    .container-main {
      display: flex;
      flex-direction: column;
      row-gap: 20px;
      background-color: var(--containerMainBkc);
      color: #2c3e50;
      padding: 20px;
      flex-grow: 1;
    }
  }
}
</style>
