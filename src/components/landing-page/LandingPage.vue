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
                            <Circle :style="styles" class="w-80 lg:w-auto h-36 lg:h-auto" />
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

                <div id="input__field" class="w-full h-28 lg:h-16 flex flex-col justify-between lg:flex-row mt-8 lg:shadow-3xl rounded">
                    <input id="input" type="email" class=" flex flex-1 lg:flex-none shrink lg:w-4/5 text-center lg:text-left lg:p-8 placeholder:text-center lg:placeholder:text-left placeholder:font-semibold border border-green border-solid disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500" @input="emailValidity" placeholder="Enter your email address">
                    <button :disabled="isEnabled"
                        class=" mt-4 lg:mt-0 flex flex-1 lg:flex-none shrink lg:w-40  items-center justify-center text-center font-semibold  lg:shadow-3xl rounded-r" :class="[bgColor]">
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
            },
            bgColor: 'bg-emerald-50',
            isDisabled: true,
        }
    },

    methods: {
        greet(){
            !this.isDisabled ? this.bgColor = 'bg-green' : this.bgColor = 'bg-emerald-50'
        },
        emailValidity(e){
            if( e.target.checkValidity() && e.data)
                this.isDisabled = false
            else
                this.isDisabled = true

            this.greet()
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


</style>