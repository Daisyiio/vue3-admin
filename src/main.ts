import { createApp } from 'vue';
import '@/style/common.scss';
import App from '@/App.vue';
import router from '@/router/index'; // 引入路由
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import Antd from 'ant-design-vue';
import * as Icons from '@ant-design/icons-vue'; // 引入所有图标
// import 'ant-design-vue/dist/antd.css'; // 引入 Ant Design 样式
const app = createApp(App);
app.use(router); // 注册路由
app.use(ElementPlus);
app.use(Antd);
// 全局注册所有 Ant Design 图标
// 为 Icons 添加索引签名
Object.keys(Icons).forEach((key: string) => {
  app.component(key, Icons[key as keyof typeof Icons]);
});

app.mount('#app');
