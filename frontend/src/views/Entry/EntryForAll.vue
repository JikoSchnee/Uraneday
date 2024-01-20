<script>
export default {
    data() {
        return {
            titles: [
                "新年快乐。",
                "恭喜发财。",
                "步步高升。",
                "年年平安。",
                "万事如意。",
                "一帆风顺。",
                "心想事成。",
                "前程似锦。",
                "财运亨通。",
                "吉星⾼照。",
            ],
            sentences: [
                "辞暮尔尔，烟火年年。日子滚烫，人间可爱。",
                "所求皆如愿，所行皆坦途，多喜乐，长安宁。",
                "祥虎留下好运扬长而去，瑞龙带着平安昂然而来。瑞龙到来之际，愿你把好运牢牢拥有，把平安稳稳接收，把幸福生活酿成美酒。祝您和家人吉祥无忧！",
                "一是一，二是二，今天祝福才有味儿：不抢早，不迟到，大年初二拜年了；快乐随，好运追，龙年薪水要翻倍；祝福来，真精彩，愿你幸福花儿开。",
                "祝你在龙年里：一家和和睦睦，一年开开心心；一生快快乐乐，一世平平安安；天天精神百倍，月月喜气洋洋；年年财源广进，岁岁平安祥和！龙年快乐！",
                // 在这里添加更多句子
            ],
        };
    },
    methods: {
        getRandomSentence() {
            const randomIndex = Math.floor(Math.random() * this.sentences.length);
            return this.sentences[randomIndex];
        },
        getRandomTitle() {
            const randomIndex = Math.floor(Math.random() * this.titles.length);
            return this.titles[randomIndex];
        }
    },
};
</script>

<template>
    <div class="background_pic">
        <h1>Uraneday</h1>
    </div>
    <div class="background_pic">
        <el-row :gutter="40" justify="space-between">
            <el-col :span="12">
                <div class="card">
                    <div class="circle" style="--clr:#ed1b24">
                        <img src="@/assets/Entry/HappyNewYear/GongXiFaCai.png" class="logo">
                    </div>
                    <div class="content">
                        <h2>{{ getRandomTitle() }}</h2>
                        <p>{{ getRandomSentence() }}</p>
                        <a href="newYear">新年快乐！</a>
                    </div>
                    <img src="@/assets/Entry/HappyNewYear/LiuDeHua.png" class="product_img">
                </div>
            </el-col>
            <el-col :span="12">
                <div class="card">
                    <div class="circle" style="--clr:#009D43">
                        <img src="@/assets/Card/2.png" class="logo">
                    </div>
                    <div class="content">
                        <h2>sprite</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, aspernatur delectus dolorum eaque</p>
                        <a href="#">Explore</a>
                    </div>
                    <img src="@/assets/Card/2_hover.png" class="product_img">
                </div>
            </el-col>
        </el-row>
    </div>







</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
}

body {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    min-height: 100vh;
}

.card {
    position: relative;
    width: 300px;
    height: 350px;
    margin: 20px;
    border-radius: 20px;
    transition: 0.5s;
    transition-delay: 0.5s;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.card:hover {
    width: 600px;
    transition-delay: 0s;
}

.card .circle {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}

.card .circle::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: var(--clr);
    clip-path: circle(120px at center);
    transition: 0.5s;
}

.card:hover .circle::before {
    clip-path: circle(400px at center);
}

.card .circle .logo {
    position: relative;
    width: 200px;
    transition: 0.5s;
    transition-delay: 0.5s;
}

.card:hover .circle .logo {
    transform: scale(0);
    transition-delay: 0s;
}

.content {
    position: relative;
    width: 50%;
    left: 20%;
    padding: 20px 20px 20px 40px;
    opacity: 0;
    transition: 0.5s;
    visibility: hidden;
}

.card:hover .content {
    left: 0;
    opacity: 1;
    visibility: visible;
    transition-delay: 0.5s;
}

.content h2 {
    color: #ffffff;
    font-size: 2.5em;
    line-height: 1em;
    text-transform: uppercase;
}

.content p {
    color: #ffffff;
}

.content a {
    position: relative;
    color: #111;
    background: #ffffff;
    padding: 10px 20px;
    border-radius: 10px;
    margin-top: 10px;
    display: inline-block;
    text-decoration: none;
    font-weight: 500;
}

.card .product_img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    height: 500px;
    transition: 0.3s;
    transition-delay: 0s;
}

.card:hover .product_img {
    left: 72%;
    transform: translate(-50%, -50%) scale(1);
    transition-delay: 0.5s;
}

@media (max-width: 991px) {
    .card {
        width: auto;
        max-width: 350px;
        align-items: flex-start;
    }
    .card:hover {
        height: 600px;
    }
    .card:hover .product_img {
        top: initial;
        bottom: 30px;
        left: 50%;
        transform: translate(-50%, 0) scale(1);
        height: 300px;
    }
    .card .content {
        width: 100%;
        left: 0;
        padding: 40px;
    }
}


//element-plus
.el-row {
    margin-bottom: 20px;
}
.el-row:last-child {
    margin-bottom: 0;
}
.el-col {
    border-radius: 4px;

}

.grid-content {
    border-radius: 4px;
    min-height: 36px;
}

//background
.background_pic {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('@/assets/Entry/bgTest.jpeg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
</style>
