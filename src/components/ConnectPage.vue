<template>
    <div id="container" class="h-screen px-32 py-32 flex items-center justify-center">
        <div id="connect__page" class="bg-connect-pattern bg-no-repeat bg-contain bg-center h-full w-full flex flex-col  items-center content-center relative">
            <h1 class="text-4xl font-bold text-center" style="width: 500px; z-index: 10">Connect with users with similar technological interests.</h1>
            <Circle :style="styles" />
            <p class="w-3/6 text-center m-16 font-semibold text-lg">Dictum proin enim, metus nisi, nulla sagittis neque, mattis. Pretium massa ultricies metus nibh. Elit interdum integer orci, mi. Ut nulla volutp</p>
        </div>
    </div>
</template>

<script>
    import Circle from './landing-page/Circle.vue'

    export default {
        name: 'ConnectPage',
        components: {
            Circle
        },
         data(){
            return{
                styles: {
                    strokeColor: '#8E25B6',
                    top: '-30',
                    left: '',
                }
            }
         }
    }
</script>

