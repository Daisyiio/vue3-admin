<template>
  <div class="water-fallflow">
    <!-- Content here -->
    <!-- <WaterFallFlow /> -->
    <waterFallByJs />
  </div>
</template>

<script setup lang="tsx">
import {
  ref,
  reactive,
  computed,
  onMounted,
  onUpdated,
  onUnmounted,
} from 'vue';
// import WaterFallFlow from './WaterFallFlow.vue';
import waterFallByJs from './waterFallByJs.vue';
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
.water-fallflow {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
