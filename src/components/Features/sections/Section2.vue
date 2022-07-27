<template>

    <div data-aos="fade-left" data-aos-delay="500" data-aos-duration="1000" class=" flex flex-col items-center py-8 px-0 lg:px-32 relative">

        <div  class=" flex flex-col lg:flex-row justify-around items-center lg:flex-row-reverse">
            <div class="lg:flex-1 lg:flex justify-end self-center">
                <img src="/images/feature-2.png">
            </div>

            <div class=" py-4 lg:flex-1 lg:h-64 flex flex-col items-start justify-evenly space-y-4">
                <h1 class="font-bold font-gorgagrotesque-bold text-2xl">Access to userbase of well educated, highly skilled proffessionals</h1>
                <p>Imperdiet sit eu sed tortor egestas id. A consectetur ac fringilla nisi. Vitae et sed ante dictum diam scelerisque vulputate at pretium. Sit porttitor ac tortor pretium pellentesque. Duis fermentum.</p>
                <a href="#faq" class="lg:self-end"><button class="button">Join the waitlist</button></a>
            </div>
        </div>
    </div>
    
</template>

<script>
    import AOS from 'aos'
    import 'aos/dist/aos.css'

    export default {
        name: 'Section1',
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