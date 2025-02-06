<template>
  <div ref="masonry" class="masonry">
    <div v-for="(column, colIndex) in columns" :key="colIndex" class="column">
      <!-- 使用 TransitionGroup 添加动画效果 -->
      <TransitionGroup name="masonry-transition" tag="div">
        <div v-for="(item, index) in column" :key="item" class="masonry-item">
          <img :src="item" alt="random image" />
        </div>
      </TransitionGroup>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';

const items = ref(
  Array.from(
    { length: 20 },
    (_, i) =>
      `https://picsum.photos/200/${
        Math.floor(Math.random() * 100) + 200
      }?random=${i}`
  )
);
const columns = ref<string[][]>([]);
const columnCount = ref(3);

const getColumnCount = () => {
  if (window.innerWidth > 1200) return 4;
  if (window.innerWidth > 800) return 3;
  return 2;
};

const distributeItems = () => {
  const newColumnCount = getColumnCount();
  if (newColumnCount === columnCount.value) return; // 避免不必要的重排

  columnCount.value = newColumnCount;
  const newColumns: string[][] = Array.from(
    { length: columnCount.value },
    () => []
  );

  items.value.forEach((item, index) => {
    const minColumnIndex = newColumns.reduce(
      (minIndex, col, i) =>
        col.length < newColumns[minIndex].length ? i : minIndex,
      0
    );
    newColumns[minColumnIndex].push(item);
  });

  columns.value = newColumns;
};

onMounted(() => {
  distributeItems();
  window.addEventListener('resize', distributeItems);
});

watch(items, distributeItems);
</script>

<style scoped>
.masonry {
  display: flex;
  gap: 10px;
  width: 100%;
  height: 100%;
  overflow: auto;
}

.column {
  flex: 1 0 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.masonry-item {
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.masonry-item img {
  width: 100%;
  border-radius: 10px;
}

/* 进入动画 */
.masonry-transition-enter-active,
.masonry-transition-leave-active {
  transition: all 0.2s ease;
}

.masonry-transition-enter-from {
  transform: scale(0.9);
  /* opacity: 0; */
}

.masonry-transition-leave-to {
  transform: scale(1.1);
  /* opacity: 0; */
}
</style>
