<template>
  <div class="TableDemo">
    table
    <!-- Content here -->
  </div>
</template>

<script setup lang="tsx">
defineOptions({
  name: 'TableDemo',
});
import {
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
.TableDemo {
  width: 100%;
}
</style>
