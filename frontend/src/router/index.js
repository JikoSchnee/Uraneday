// router/index.js
import { createRouter, createWebHistory } from 'vue-router';

// 导入你的组件
import Home from '../views/Home/HomePage.vue';
import Entry from '../views/Entry/EntryForAll.vue'
import Home_NewYear from '../views/HappyNewYear/HomePage_NewYear.vue'

const routes = [
    { path: '/', name: 'entry', component: Entry},
    { path: '/home', name: 'home', component: Home },
    { path: '/newYear', name: 'newYearHome', component: Home_NewYear}
    // 如果需要，可以添加更多路由
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
