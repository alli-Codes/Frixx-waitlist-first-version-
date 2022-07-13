<template>
    <div id="container">
        <div class="flex flex-col items-center content-center	 relative">
            <h1 class="font-bold text-4xl p-16 z-10">Some of Our Features</h1>
            <Circle :style="styles" />
        </div>

        <Section1 /> 
        <Section2 /> 
        <Section3 /> 
        <Section4 /> 
    </div>
</template>

<script>

    import Section1 from './sections/Section1.vue'
    import Section2 from './sections/Section2.vue'
    import Section3 from './sections/Section3.vue'
    import Section4 from './sections/Section4.vue'
    import Circle from '../landing-page/Circle.vue'

    export default {
        name: 'FeaturePage',
        components: {
            Section1,
            Section2,
            Section3,
            Section4,
            Circle
        },
        data(){
            return{
                styles: {
                    strokeColor: '#8E25B6',
                    top: '10',
                    left: '',
                }
            }
         }
    }

</script>

