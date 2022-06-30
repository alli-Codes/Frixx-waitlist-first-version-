<template>
    <div id="header" class="w-full h-16 bg-blue-400 fixed top-0">
        <Icon />
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
