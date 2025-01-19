import { createRouter, createWebHistory } from 'vue-router';

// 定义路由
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/layouts/index.vue'),
    children: [
      {
        path: '/table',
        name: 'table',
        component: () => import('@/views/table/index.vue'),
        meta: {
          title: '表格'
        }
      }
    ]
  },
];

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
