<template>
    <div class="cardTemplate">
        <div class="card-header">
            <!-- 渐变色块 -->
        </div>
        <div class="card-content">
            <!-- 内容区域 -->
            <slot name="content"></slot>
        </div>
        <div class="card-footer">
            <!-- 页脚区域 -->
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardTemplate',
};
</script>

<style scoped>
.cardTemplate {
    border: 1px solid #ccc;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 添加阴影效果 */
}

.card-header {
    height: 50px;
    background: linear-gradient(to right, #ffcc00, #ff6699);
    color: white;
    text-align: center;
    line-height: 50px;
    border-bottom: 1px solid #ccc; /* 添加底部边框 */
}

.card-content,
.card-footer {
    padding: 20px;
}
</style>
