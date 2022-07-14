<template>
    <div id="container" class="h-screen mt-20 px-32 py-32 flex items-center justify-center">
        <div id="connect__page"
            class="bg-connect-pattern bg-no-repeat bg-contain bg-center  h-screen w-full flex flex-col  items-center content-center relative">
            <h1 class="text-3xl font-gorgagrotesque-regular font-bold text-center w-[450px] z-10">Connect
                with users with similar technological <br /> interests.</h1>
            <Circle :style="styles" />
            <p class="w-3/6 text-center m-10 font-semibold text-lg">Dictum proin enim, metus nisi, nulla sagittis neque,
                mattis. Pretium massa ultricies metus nibh. Elit interdum integer orci, mi. Ut nulla volutp</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ConnectPage',
    data() {
        return {
            styles: {
                strokeColor: '#8E25B6',
                top: '-28',
                left: '',
            }
        }
    },
};
</script>

<script setup>
import Circle from './landing-page/Circle.vue'
</script>

