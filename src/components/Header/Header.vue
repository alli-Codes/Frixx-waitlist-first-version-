<template>
    <div id="header" class="bg-slate-50 w-full h-16 px-32 flex justify-between items-center fixed top-0">
        <Icon />
        <img src="../../assets/images/mode.png" class="w-4">
    </div>
</template>

<script>

    import Icon from './Icon.vue'
    
    export default {
        name: 'Header',
        components: {
            Icon
        }
    }

</script>
