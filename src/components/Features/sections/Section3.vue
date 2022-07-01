<template>

    <div style="height: 728px" class="flex flex-col items-center py-8 px-32 relative">
        <h1 class="font-bold text-4xl p-16 z-10">Some of Our Features</h1>
        <Circle :style="styles" />

        <div class=" flex justify-around items-center ">
            <div class="flex-1">
                <img src="../../../assets/feature-1.png">
            </div>

            <div class="flex-1 h-64 flex flex-col items-start justify-evenly">
                <h1 class="font-semibold text-2xl">Live Chatrooms</h1>
                <p>Imperdiet sit eu sed tortor egestas id. A consectetur ac fringilla nisi. Vitae et sed ante dictum diam scelerisque vulputate at pretium. Sit porttitor ac tortor pretium pellentesque. Duis fermentum.</p>
                <button class="font-semibold bg-green p-4 rounded">Join the waitlist</button>
            </div>
        </div>
    </div>
    
</template>

<script>

    import Circle from '../../landing-page/Circle.vue'

    export default {
        name: 'Section1',
        components: {Circle},
        data(){
            return{
                styles: {
                    strokeColor: '#8E25B6',
                    top: '0',
                    left: '37rem',
                }
            }
         }
    }

</script>