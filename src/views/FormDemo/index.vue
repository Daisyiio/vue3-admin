<template>
  <div class="FormDemo">
    <!-- Content here -->
    form
  </div>
</template>

<script setup lang="tsx">
import { onMounted, onUpdated, onUnmounted } from 'vue';
defineOptions({
  name: 'FormDemo', // 给组件指定名称
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

<style lang="scss" scoped>
.FormDemo {
  width: 100%;
}
</style>