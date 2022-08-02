<template>
    <div id="header" ref="header" class="bg-dull dark:bg-[#001530db] w-full h-16 px-4 lg:px-32 flex justify-between items-center fixed top-0 z-[9999] shadow-3xl dark:shadow-lightShadow backdrop-blur-md">
        <Icon :darks="darks" class="fill-[#182220] dark:fill-[#ffffff]" />

        <button class="cursor-pointer border border-slate-400 transition-all dark:border-white h-7 w-14 rounded-full px-2 py-1 flex flex-col focus-within:bg-green" @click.stop="changeMode">
            <img :src="['/images/' + mode +'.png']" class="w-[1.2rem] dark:self-end">
        </button>
    </div>
</template>

<script>
import Icon from './Icon.vue'

export default {
    name: 'Header',
    components: { Icon },
    props: {
        darkMode: Function,
        mode: String
    },
    methods: {
        changeMode(){
            this.darkMode()
        }
    },
}
</script>
