<template>
  <div class="TableDemo">
    <table>
      <tr>
        <th>姓名</th>
        <th>价格</th>
        <th>数量</th>
        <th>操作</th>
      </tr>

      <tbody>
        <tr v-for="(item, index) in tableList" :key="index">
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
          <td>
            <button @[event]="item.num >= 1 ? item.num-- : null">--</button>
            {{ item.num }}
            <button @click="item.num <= 99 ? item.num++ : null">++</button>
          </td>
          <td>
            <button @click="del(index)">删除</button>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="3">总计</td>
          <td>{{ sumPrice }}</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script setup lang="tsx">
defineOptions({
  name: 'TableDemo',
});
import { ref, computed, onMounted, onUpdated, onUnmounted } from 'vue';
type TableObjType = {
  name: string;
  price: number;
  num: number;
};
const event = 'click';
const tableList = ref<TableObjType[]>([
  { name: '物品1', price: 500, num: 0 },
  { name: '物品2', price: 200, num: 0 },
  { name: '物品3', price: 1000, num: 0 },
  { name: '物品4', price: 2200, num: 0 },
]);
const sumPrice = computed(() => {
  return tableList.value.reduce((prve, next) => {
    return prve + next.price * next.num;
  }, 0);
});
const del = function (index: number) {
  tableList.value.splice(index, 1);
};
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
  padding: 20px;

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th,
  td {
    padding: 10px;
    border: 1px solid #000;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }
}
</style>
