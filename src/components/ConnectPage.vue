<template>
    <div id="container" class="lg:h-screen lg:mt-20 px-4 lg:px-32 py-16 lg:py-32 lg:flex items-center justify-center">
        <div id="connect__page"
            class="bg-connect-pattern bg-no-repeat bg-contain bg-bottom lg:bg-center  lg:h-screen w-full lg:flex flex-col  items-center content-center relative">
            <div class=" flex items-center justify-center relative">
                <h1 class="text-2xl lg:text-4xl font-gorgagrotesque-regular font-bold text-center w-80 lg:w-[450px] z-10">Connect
                with users with similar technological <br /> interests.</h1>
                <Circle v-show="false" :style="styles" class="w-80 lg:w-auto h-36 lg:h-auto" />
            </div>
            <p class="lg:w-3/6 text-center mt-8 lg:m-10 font-semibold text-lg backdrop-blur-sm">Dictum proin enim, metus nisi, nulla sagittis neque,
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
            }
        }
    },
};
</script>

<script setup>
import Circle from './landing-page/Circle.vue'
</script>

