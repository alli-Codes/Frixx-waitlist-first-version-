<template>
    <div id="header" ref="header" class="bg-dull dark:bg-[#001530db] w-full h-16 px-4 lg:px-32 flex justify-between items-center fixed top-0 z-[9999] shadow-3xl dark:shadow-lightShadow backdrop-blur-md">
        <Icon :darks="darks" class="fill-[#182220] dark:fill-[#ffffff]" />
        <!-- <Icon :darks="darks" class="fill-[#182220] dark:fill-[#182220]" /> -->

        <div class="cursor-pointer" @click="changeMode">
            <img v-if="isLight ? mode = 'light' : mode = 'dark'" :src="['/images/' + mode +'.png']" class="w-[1.2rem]">
        </div>
    </div>
</template>

<script>
import Icon from './Icon.vue'

export default {
    name: 'Header',
    components: { Icon },
    data(){
        return {
            isLight: true,
        }
    },
    props: {
        darkMode: Function,
    },
    methods: {
        changeMode(){
            this.darkMode()
            this.isLight ? this.isLight = false : this.isLight = true

        }
    },
}
</script>
