<template>
    <!--    <CardElementPlus></CardElementPlus>-->
    <CardPlain></CardPlain>
    <product-card></product-card>
</template>


<script>
// import CardElementPlus from "@/components/ForAllComponents/CardElementPlus.vue";
import CardPlain from "@/components/ForAllComponents/Card/CardPlain.vue";
import ProductCard from "@/components/ForAllComponents/ProductCard.vue";

export default {
    components: {
        ProductCard,
        // CardElementPlus,
        CardPlain
    },
}

</script>
<style>

</style>
