<template>
    <div id="faq" class="grid place-items-center py-5 px-32 relative">
        <div>
            <img src="/images/quote.svg" alt="">
        </div>
        <div class="h-64 grid place-items-center space-y-8">
            <h1 class="font-bold relative z-[100] font-gorgagrotesque-bold w-3/6 text-center text-3xl">Imperdiet sit eu
                sed tortor
                egestas id. A
                consectetur ac fringilla
                nisi.</h1>
            <Circle :style="styles" />
        </div>
        <div class="flex flex-row justify-center items-center gap-4">
            <img src="/images/xavier.png" class="w-12 h-12" alt="xavier photo's">
            <div class="flex flex-col space-y-2">
                <p class="font-bold">Uwakmfon inemesit</p>
                <p>Senior Product Designer</p>
            </div>
        </div>
        <div class="mt-6">
            <img src="/images/bars.svg" class="w-12 h-12" alt="">
        </div>
    </div>
</template>


<script setup>
import Circle from '../landing-page/Circle.vue';
    import { ref } from 'vue';

    

const styles = ref({
    strokeColor: '#8E25B6',
    top: '80',
    left: '',
})
</script>