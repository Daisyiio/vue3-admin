import { createRouter, createWebHistory } from 'vue-router';

// 定义路由
const routes = [
  {
    path: '/',
    name: 'AdminLayout',
    component: () => import('@/layouts/index.vue'),
    children: [
      {
        path: '/table',
        name: 'table',
        component: () => import('@/views/TableDemo/index.vue'),
        meta: {
          title: '表格',
        },
      },
      {
        path: '/form',
        name: 'form',
        component: () => import('@/views/FormDemo/index.vue'),
        meta: {
          title: '表单',
        },
      },
      {
        path: '/water-fallflow',
        name: 'waterFallflow',
        component: () => import('@/views/waterfallFlow/index.vue'),
        meta: {
          title: '瀑布流',
        },
      }, {
        path: '/swiper',
        name: 'Swiper',
        component: () => import('@/views/Swiper/swiper.vue'),
        meta: {
          title: '轮播',
        },
      },
    ],
  },
];

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
