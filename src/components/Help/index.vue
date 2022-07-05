<template>
    <div id="faq" class="grid place-items-center py-5 px-32 relative">
        <div class="h-64 grid place-items-center space-y-8">
            <h1 class="font-bold relative z-[100] font-gorgagrotesque-bold w-4/6 text-center text-3xl">
                With your help,our products and tools will empower people find what they need to develop technology
            </h1>
            <Circle :style="styles" />
            <span>Reserve your spot</span>
        </div>
        <div id="input__field" class="w-96 flex mt-8 shadow-3xl rounded">
            <input id="input" type="text" class="placeholder:text-sm flex shrink w-4/5 p-3" placeholder="Enter your email address">
            <button
                class="flex shrink w-40 items-center justify-center text-center font-semibold bg-green shadow-3xl rounded-r">
                <p class="text-center text-sm">
                    Join the waitlist
                </p>
            </button>
        </div>
        <!-- <div class="flex flex-row justify-center items-center gap-4">
            <img src="/images/xavier.png" class="w-12 h-12" alt="xavier photo's">
            <div class="flex flex-col space-y-2">
                <p class="font-bold">Uwakmfon inemesit</p>
                <p>Senior Product Designer</p>
            </div>
        </div> -->
    </div>
</template>


<script setup>
import Circle from '../landing-page/Circle.vue';
import { ref } from 'vue';



const styles = ref({
    strokeColor: '#8E25B6',
    top: '-10',
    left: '',
})
</script>