<template>
    <div id="app">
        <CardTemplate>
            <template #content>
                <!-- 这里放置卡片内容 -->
                <p>这是卡片的内容</p>
            </template>
            <template #footer>
                <!-- 这里放置页脚内容 -->
                <button @click="handleButtonClick">点击我</button>
            </template>
        </CardTemplate>
    </div>
</template>

<script>
import CardTemplate from './CardTemplate.vue';

export default {
    name: 'App',
    components: {
        CardTemplate,
    },
    methods: {
        handleButtonClick() {
            alert('按钮被点击了！');
        },
    },
};
</script>

<style>
#app {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

/* 可以在这里定义全局样式 */
</style>
