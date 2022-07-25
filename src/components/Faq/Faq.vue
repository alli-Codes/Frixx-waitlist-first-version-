<template>
    <div class="h-full flex flex-col space-y-20">
        <div class="flex items-center justify-center space-y-8">
            <h1 class="font-bold relative z-[100] text-xl lg:text-xl font-gorgagrotesque-regular lg:w-3/6 text-center ">Imperdiet sit eu
                sed tortor
                egestas id. A
                consectetur ac fringilla
                nisi.</h1>
            <Circle v-show="false" :style="styles" class="w-80 lg:w-auto h-36 lg:h-auto" />
        </div>

        <div class="flex flex-row justify-center items-center gap-4">
                <img :src="person.image" class="w-12 h-12" alt="xavier photo's">
                <div class="flex flex-col space-y-2">
                    <p class="font-bold">{{person.name}}</p>
                    <p class="text-sm">{{person.title}}</p>
                </div>
        </div>
    </div>
</template>

<script>
    import Circle from '../landing-page/Circle.vue';

    export default {
        name: 'Faq',
        components: {
            Circle
        },
        data() {
            return {
                styles: {
                    strokeColor: '#8E25B6',
                    top: '60',
                    left: '',
                }
            }
        },
        props: {
            person: Object,
            slider: Function
        },
    }

</script>

