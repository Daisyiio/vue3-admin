<template>
  <div class="waterFallByJs">
    <div class="container" id="container"></div>
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
.waterFallByJs {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: center;
  .container {
    width: 90%;
    border: solid 2px;
    position: relative;
    margin: auto 0;
  }
}
</style>
