<template>
    <div id="container" class="lg:h-screen lg:flex flex-col justify-between pt-20 lg:pt-8">
        <div id="landing__page" class=" lg:h-full lg:flex flex-row items-center justify-center">
            <div id="landing__text-section" class=" w-full lg:w-1/2 flex flex-col px-8 lg:pl-16  items-start justify-center">

                <div id="headline" class="text-4xl mt-5 font-gorgagrotesque-regular font-bold flex w-80 relative">
                    <h1 style="line-height: 44px; z-index: 10" class="">
                        <span class="relative z-[100]">
                            A community
                        </span>
                        <div class="flex items-center relative">
                            <h1 style="display: inline" class="relative z-[100]">for&nbsp;<span
                                    class="text-primary">Tech
                                    <br /> Enthusiasts</span></h1>
                            <Circle :style="styles" :w="360" :h="140" />
                        </div>
                        <span class="relative z-[100]">
                            fueled by <br /> knowledge
                        </span>
                    </h1>

                    <!-- <img src="../assets/images/circle.svg" class="absolute inset-y-40"> -->
                </div>

                <p class="w-full mt-4 font-semibold leading-6 text-[12px]">Adipiscing commodo, eget morbi sagittis. Quis
                    dignissim viverra ultrices enim, massa dolor dolor eget. Ultrices ornare quam tristique pharetra.
                    Vel, sit scelerisque commodo libero,</p>

                <div id="input__field" class="w-full flex mt-8 shadow-3xl rounded">
                    <input id="input" type="text" class=" flex shrink w-4/5 p-3" placeholder="Enter your email address">
                    <button
                        class="flex shrink w-40  items-center justify-center text-center font-semibold bg-green shadow-3xl rounded-r">
                        <p class="text-center text-sm lg:text-base">

                            Join the waitlist
                        </p>
                    </button>
                </div>
            </div>

            <div id="landing__image-section" class=" h-full lg:w-1/2 flex justify-center items-center py-16 lg:py-0">
                <!-- <Mockup /> -->
                <img src="../../assets/mockup.svg" class="w-fit" alt="">
            </div>
        </div>

        <div id="strap"
            class="w-full h-20 bg-primary font-semibold font-gorgagrotesque-bold flex items-center justify-center">Join
            the waitlist
            to get early access</div>
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
    data() {
        return {
            styles: {
                strokeColor: '#8E25B6',
                top: '-25',
                left: '-27',
            }
        }
    }

}

</script>

<style scoped>
#landing__page {
    padding: 0 0rem;
}

#input {
    outline: none;
}

#input::placeholder {
    font-weight: 600;
}
</style>