<template>
  <div class="water-fallflow">
    <!-- Content here -->
    <WaterFallFlow />
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
import WaterFallFlow from './WaterFallFlow.vue';
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
}
</style>
