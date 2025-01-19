<template>
  <a-layout class="common-layout">
    <AsideCpm :collapsed="collapsed" />
    <a-layout>
      <a-layout-header style="background: #fff" id="AlayoutHeaderId">
        <menu-unfold-outlined v-if="collapsed" class="trigger" @click="() => (collapsed = !collapsed)" />
        <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
      </a-layout-header>
      <a-layout-content>
        <router-view v-slot="{ Component }">
          <component :is="Component"></component>
        </router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script setup lang="tsx">
import {
  ref,
  onMounted,
  onUpdated,
  onUnmounted,
} from 'vue';
import AsideCpm from './AsideCpm.vue'
defineOptions({
  name: 'CommonLayout', // 给组件指定名称
});
const collapsed = ref<boolean>(false);

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
.common-layout {
  height: 100%;

  #components-layout-demo-custom-trigger .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }

  #components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
  }
}
</style>
