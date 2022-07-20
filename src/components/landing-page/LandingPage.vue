<template>
    <div id="container" class="lg:h-screen lg:flex flex-col justify-between pt-20 lg:pt-8">
        <div id="landing__page" class=" lg:h-full lg:flex flex-row items-center justify-center">
            <div id="landing__text-section" class=" w-full lg:w-1/2 flex flex-col px-4 lg:pl-16  items-start justify-center">

                <div v-show="true" id="headline" class="text-4xl mt-5 font-gorgagrotesque-regular font-bold flex">
                    <h1 style="line-height: 44px; z-index: 10" class="">
                        <span class="relative z-[100]">
                            A community
                        </span>
                        <div class="flex items-center relative">
                            <h1 style="display: inline" class="relative z-[100]">for&nbsp;<span
                                    class="text-primary">Tech
                                    <br /> Enthusiasts</span></h1>
                            <Circle :style="styles" v-show="false" class="w-80 lg:w-auto h-36 lg:h-auto" />
                        </div>
                        <span class="relative z-[100]">
                            fueled by <br /> knowledge
                        </span>
                    </h1>

                    <!-- <img src="../assets/images/circle.svg" class="absolute inset-y-40"> -->
                </div>

                <p v-show="false" class="w-full mt-4 font-semibold leading-6 text-[12px]">Adipiscing commodo, eget morbi sagittis. Quis
                    dignissim viverra ultrices enim, massa dolor dolor eget. Ultrices ornare quam tristique pharetra.
                    Vel, sit scelerisque commodo libero,</p>

                <form id="input__field" class="w-full h-28 lg:h-16 flex flex-col justify-between lg:flex-row mt-8 lg:shadow-3xl rounded">
                    <input id="input" type="email" class=" flex flex-1 lg:flex-none shrink lg:w-4/5 text-center lg:text-left lg:p-8 placeholder:text-center lg:placeholder:text-left placeholder:font-semibold border border-green lg:border-none  border-solid rounded lg:rounded-none" :class="isValid.color" @input="emailValidity" placeholder="Enter your email address" ref="input">
                    <input  type="submit" value="Join the waitlist"
                        class=" bg-green mt-4 lg:mt-0 flex flex-1 lg:flex-none shrink lg:w-40  items-center justify-center text-center font-semibold  lg:shadow-3xl rounded lg:rounded-r">
                        
                </form>
            </div>

            <div id="landing__image-section" class=" h-full lg:w-1/2 flex justify-center items-center py-16 lg:py-0">
                <!-- <Mockup /> -->
                <img src="../../assets/mockup.svg" class="w-fit" v-show="false" alt="">
            </div>
        </div>

        <div id="strap"
            class="w-full h-20 bg-primary font-semibold font-gorgagrotesque-bold flex items-center justify-center">Join
            the waitlist
            to get early access</div>
    </div>
</template>

<script>
import {ref} from 'vue'
import Circle from './Circle.vue'
import Mockup from './Mockup.vue'
import isEmail from 'validator/lib/isEmail'

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
            isValid: {
                color: '',
                status: false
            },
        }
    },

    methods: {
        check(){
            this.isValid.status ? this.isValid.color = 'border-green' : this.isValid.color = 'border-pink-400'
        },
        emailValidity(){
            this.isValid.status = isEmail(this.$refs.input.value)
            this.check()
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