<template>
  <div class="AsideView">
    <a-layout-sider :collapsed="prop.collapsed" :trigger="null" collapsible>
      <div class="icon-header" :style="{ '--headerHeight': `${headerHeight}px` }">
        Daisy
      </div>
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-menu-item v-for="route in childRoutes" :key="route.path" @click="handleClickMenuItem(route)">
          <user-outlined />
          <span>{{ route.name }}</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
  </div>
</template>

<script setup lang="tsx">
import { ref, onMounted, onUpdated, onUnmounted } from 'vue';
const prop = defineProps({
  collapsed: {
    type: Boolean
  }
})
const headerHeight = ref<number>(0)
import { useRouter, RouteRecordRaw } from 'vue-router';

const router = useRouter(); //获取所有路由对象
const allRoutes: RouteRecordRaw[] = router.getRoutes();
const currentRoute = allRoutes.find((r: RouteRecordRaw) => r.name === 'AdminLayout');
const childRoutes: RouteRecordRaw[] = currentRoute?.children || [] // 获取子路由
const selectedKeys = ref<string[]>([childRoutes[0]?.path]);
const handleClickMenuItem = (route: RouteRecordRaw): void => {
  router.push({ name: route.name });
}
onMounted(() => {
  const headerHeightDom = document.querySelector('#AlayoutHeaderId')!
  headerHeight.value = headerHeightDom.clientHeight
});

onUpdated(() => {
  console.log('Component updated');
});

onUnmounted(() => {
  console.log('Component unmounted');
});
</script>

<style lang="scss" scoped>
.AsideView {
  height: 100%;
  background-color: #001427;

  .icon-header {
    height: var(--headerHeight);
    color: #FFF;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    font: {
      weight: bold;
      size: 24px;
    }
  }
}
</style>