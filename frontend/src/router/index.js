// router/index.js
import { createRouter, createWebHistory } from 'vue-router';

// 导入你的组件
import Home from '../views/HomeTest.vue';
import About from '../views/AboutTest.vue';
import Contact from '../views/ContactTest.vue';

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/about', name: 'about', component: About },
    { path: '/contact', name: 'contact', component: Contact },
    // 如果需要，可以添加更多路由
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
