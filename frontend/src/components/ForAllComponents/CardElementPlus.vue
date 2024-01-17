<template>
    <el-card class="box-card">
        <template #header>
            <div class="card-header">
                <div class="gradient-box"></div>
                <span>Card name</span>
                <el-button class="button" text>Operation button</el-button>
            </div>
        </template>
        <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
        <template #footer>Footer content</template>
    </el-card>
</template>


<script>
import { ElCard, ElButton } from 'element-plus';

export default {
    components: {
        ElCard,
        ElButton,
    },
}

</script>
<style>
.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(to right, #ff6b6b, #4361ee);
    width: 100%;
    margin: 0;
    /* 背景渐变效果，你可以根据需要调整颜色和方向 */
    padding: 0px; /* 可以添加 padding 来调整头部内边距 */
    color: white; /* 可以设置文字颜色 */
}

.text {
    font-size: 14px;
}

.item {
    margin-bottom: 18px;
}

.box-card {
    width: 480px;
    padding: 0; /* 设置 el-card 的 padding 为 0 */
    box-sizing: border-box; /* 保证宽度计算包括 border 和 padding */
}

.gradient-box {
    width: 40px;
    height: 40px;
    background: linear-gradient(to bottom right, #000000, #ffffff);
    /* 渐变方向和颜色，你可以根据需要调整 */
    top: 50%;
}
</style>
