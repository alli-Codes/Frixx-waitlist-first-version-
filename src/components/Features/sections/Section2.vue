<template>

    <div style="height: 600px" class="flex flex-col items-center py-8 px-32 relative">

        <div class=" flex  items-center flex-row-reverse">
            <div class="flex-1 flex justify-end self-end">
                <img src="/images/feature-2.png">
            </div>

            <div class="flex-1 h-64 flex flex-col items-start justify-evenly space-y-8">
                <h1 class="font-bold font-gorgagrotesque-bold text-3xl">Access to userbase of well educated, highly skilled proffessionals</h1>
                <p>Imperdiet sit eu sed tortor egestas id. A consectetur ac fringilla nisi. Vitae et sed ante dictum diam scelerisque vulputate at pretium. Sit porttitor ac tortor pretium pellentesque. Duis fermentum.</p>
                <button class="button self-end">Join the waitlist</button>
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