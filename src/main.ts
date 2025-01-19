import { createApp } from 'vue';
import '@/style/common.scss';
import App from '@/App.vue';
import router from '@/router/index'; // 引入路由
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import Antd from 'ant-design-vue';
const app = createApp(App);
app.use(router); // 注册路由
app.use(ElementPlus);
app.use(Antd);

app.mount('#app');
