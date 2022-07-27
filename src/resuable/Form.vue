<template>
    <form id="input__field"
        class=" lg:bg-white w-full h-28 lg:h-16 flex flex-col justify-between lg:flex-row mt-8 lg:shadow-3xl lg:dark:shadow-lightShadow rounded">
        <input id="input" type="email"
            class=" flex flex-1 lg:flex-none shrink lg:w-4/5 text-center text-black font-semibold tracking-wide lg:text-left lg:p-8 placeholder:text-center lg:placeholder:text-left placeholder:font-semibold border border-green lg:border-none  border-solid rounded lg:rounded-none lg:rounded-l"
            :class="isValid.color" @input="emailValidity" placeholder="Enter your email address" ref="input">
        <input type="submit" value="Join the waitlist"
            class=" bg-green mt-4 lg:mt-0 flex flex-1 lg:flex-none shrink lg:w-40  items-center justify-center text-center font-semibold  lg:shadow-3xl rounded lg:rounded-r cursor-pointer">

    </form>
</template>

<script>
    export default {
        name: 'Form',
        data(){
            return {
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
        },
        }
</script>

<style scoped>
    #input {
        outline: none;
    }
</style>