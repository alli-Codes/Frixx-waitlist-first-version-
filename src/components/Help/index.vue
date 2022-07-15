<template>
    <div id="faq" class="grid place-items-center py-5 px-8 lg:px-32 relative">
        <div class="h-64 grid place-items-center space-y-8">
            <h1 class="font-bold relative z-[100] font-gorgagrotesque-bold lg:w-4/6 text-center text-2xl lg:text-3xl">
                With your help,our products and tools will empower people find what they need to develop technology
            </h1>
            <Circle :style="styles" class="w-80 lg:w-auto h-36 lg:h-auto" />
            <span>Reserve your spot</span>
        </div>
        <div id="input__field" class=" w-full lg:w-1/2 h-28 lg:h-16 flex flex-col justify-between lg:flex-row mt-8 lg:shadow-3xl rounded">
                    <input id="input" type="email" class=" flex flex-1 lg:flex-none shrink lg:w-4/5 text-center lg:text-left lg:p-8 placeholder:text-center lg:placeholder:text-left placeholder:font-semibold border border-green border-solid disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500" @input="emailValidity" placeholder="Enter your email address">
                    <button :disabled="isEnabled"
                        class=" mt-4 lg:mt-0 flex flex-1 lg:flex-none shrink lg:w-40  items-center justify-center text-center font-semibold  lg:shadow-3xl rounded-r" :class="[bgColor]">
                        <p class="text-center text-sm lg:text-base">

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