<template>
    <div id="header" ref="header" class="bg-slate-50 w-full h-16 px-4 lg:px-32 flex justify-between items-center fixed top-0 z-[9999]">
        <Icon :darks="darks" />
        <div class="cursor-pointer" @click="dark">
            <img src="/images/mode.png" class="w-4">
        </div>
    </div>
</template>

<script>
import Icon from './Icon.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

const checkHeight = () => {
    console.log(window.scrollY)
    // console.log(vue.$refs.header)
}

// window.addEventListener('scroll', checkHeight)

export default {
    name: 'Header',
    components: { Icon },
    data(){
        return {
            fade: 'fade-down'
        }
    },
    props: {
        dark: Function,
    },
    methods: {
        darks(){
            console.log('Hello')
        }
    }
}
</script>
