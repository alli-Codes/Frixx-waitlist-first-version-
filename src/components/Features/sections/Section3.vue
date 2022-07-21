<template>

<div data-aos="fade-right" data-aos-delay="800" data-aos-duration="1000" class=" flex flex-col items-center  px-0 lg:px-32 relative">
        

        <div class=" flex flex-col lg:flex-row justify-around items-center ">
            <div class="lg:flex-1">
                <img src="/images/feature-3.png">
            </div>

            <div class="py-4 lg:flex-1 lg:h-64 flex flex-col items-start justify-evenly space-y-4">
                <h1 class="font-bold font-gorgagrotesque-bold text-2xl ">Advanced Q/A Forums</h1>
                <p>Imperdiet sit eu sed tortor egestas id. A consectetur ac fringilla
                    nisi. Vitae et sed ante dictum
                    diam scelerisque vulputate at pretium. Sit porttitor ac tortor pretium pellentesque. Duis fermentum.</p>
                <button class="button">Join the waitlist</button>
            </div>
        </div>
    </div>

</template>

<script>
    import AOS from 'aos'
    import 'aos/dist/aos.css'
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
         },
          created(){
            AOS.init()
        }
    }

</script>