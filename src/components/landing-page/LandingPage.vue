<template>
    <div id="container" class="h-screen flex flex-col justify-between">
        <div id="landing__page" class="h-full flex flex-row items-center justify-center">
            <div id="landing__text-section" class=" h-full w-1/2 flex flex-col pl-16  items-start justify-center">
                <!-- <img src="../assets/images/headline.png" class="h-80"> -->

                <div id="headline" class="text-5xl font-bold flex w-80 relative">
                    <h1 style="line-height: 64px; z-index: 10">A community for <h1 style="display: inline" class="text-primary">Tech Enthusiasts</h1> fueled by knowledge</h1>
                    <Circle :style="styles" />
                    <!-- <img src="../assets/images/circle.svg" class="absolute inset-y-40"> -->
                </div>

                <p class="w-96 mt-4 font-semibold leading-6 text-lg">Adipiscing commodo, eget morbi sagittis. Quis dignissim viverra ultrices enim, massa dolor dolor eget. Ultrices ornare quam tristique pharetra. Vel, sit scelerisque commodo libero,</p>

                <div id="input__field" class="w-full flex mt-8 shadow-3xl rounded">
                    <input id="input" type="text" class=" flex shrink w-4/5 p-4" placeholder="Enter your email address">
                    <button class="flex shrink w-40 flex items-center justify-center font-semibold bg-green shadow-3xl rounded-r">Join the waitlist</button>
                </div>
            </div>

            <div id="landing__image-section" class="bg-green-400 h-full w-1/2 flex justify-center items-center">
                <Mockup />
            </div>
        </div>

        <div id="strap" class="w-full h-20 bg-primary font-semibold flex items-center justify-center">Join the waitlist to get early access</div>
    </div>
</template>

<script>

    import Circle from './Circle.vue'
    import Mockup from './Mockup.vue'

    export default {
        name: 'LandingPage',
        components: {
            Circle,
            Mockup
        },
        data(){
            return{
                styles: {
                    strokeColor: '#8E25B6',
                    top: '40',
                    left: '-27',
                }
            }
        }

    }

</script>

<style scoped>

    #landing__page{
        padding: 0 4rem;
    }
    #input{
        outline: none;
    }

    #input::placeholder{
        font-weight: 600;
    }
    
</style>