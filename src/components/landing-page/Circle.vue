<template>
    <svg :style="{ top: style.top, left: style.left, }" class="absolute" :width="w || 380" :height="h || 160" viewBox="0 0 416 178"
        fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M206.898 5.01432C214.796 -11.997 -28.3609 45.1152 5.17803 122.887C47.1017 220.101 357.942 169.03 408.617 88.254C459.291 7.47799 134.594 5.01432 109.683 60.3049"
            :stroke="style.strokeColor" stroke-width="2.74194" />
    </svg>

</template>


<script setup>
defineProps({
    style: Object,
    w: Number,
    h: Number
});
</script>