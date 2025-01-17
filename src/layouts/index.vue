<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="tsx">
defineOptions({
  name: 'CommonLayout', // 给组件指定名称
});
import {
  // ref,
  // reactive,
  // computed,
  onMounted,
  onUpdated,
  onUnmounted,
} from 'vue';

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

<style lang="scss" scoped>
.common-layout {
  width: 100%;
  height: 100%;
}
</style>
