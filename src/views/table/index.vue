<template>
  <div class="app">
    <!-- Content here -->
    <div>
      11
      <div>222</div>
      <div>222</div>
      <div>222</div>
    </div>
  </div>
</template>

<script setup lang="tsx">
defineOptions({
  name: 'HomeView',
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
</style>
