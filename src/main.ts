import { createApp } from 'vue';
import '@/style/common.scss';
import App from '@/App.vue';
import router from '@/router/index'; // 引入路由
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

const app = createApp(App);
app.use(router); // 注册路由
app.use(ElementPlus);

app.mount('#app');
