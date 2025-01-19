<template>
  <div class="MenuCpm">
    <!-- Content here -->
    <div class="icon-header" :style="{ '--headerHeight': `${headerHeight}px` }">

    </div>
    <div v-for="route in childRoutes" :key="`${route.path}`" class="menu-item">
      {{ route.name }}
    </div>
  </div>
</template>

<script setup lang="tsx">
import { onMounted, onUpdated, onUnmounted } from 'vue';
import { useRouter, useRoute, RouteRecordRaw } from 'vue-router';

const router = useRouter(); //获取所有路由对象
const route = useRoute(); // 获取当前的路由对象
const allRoutes: RouteRecordRaw[] = router.getRoutes();
const currentRoute = allRoutes.find((r: RouteRecordRaw) => r.path === route.path);
const childRoutes: RouteRecordRaw[] = currentRoute?.children || []; // 获取子路由

console.log(childRoutes, 'childRoutes')
const headerHeightDom = document.querySelector('#commonHeader') as HTMLDivElement
const headerHeight = headerHeightDom.clientHeight
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
.MenuCpm {
  width: 100%;
  height: 100%;
  overflow: hidden;

  .menu-item {
    width: 100%;
  }

  .icon-header {
    height: var(--headerHeight);
    background-color: var(--headerBkc);
  }
}
</style>