import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import router from "@/router";

const app = createApp(App);
// 使用 index
app.use(router)
// 使用 Element Plus 插件
app.use(ElementPlus);
app.mount('#app');



