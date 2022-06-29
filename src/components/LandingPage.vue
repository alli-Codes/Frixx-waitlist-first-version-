<template>
    <div id="landing__page" class="h-screen flex flex-row items-center justify-center">
        <div id="landing__text-section" class=" h-full w-1/2 flex flex-col pl-16 items-start justify-center">
            <!-- <img src="../assets/images/headline.png" class="h-80"> -->

            <div id="headline" class="text-5xl font-bold w-80 ">
                <h1 style="line-height: 64px">A community for Tech Enthusiasts fueled by knowledge</h1>
                <img src="../assets/images/circle.svg" class="absolute inset-y-40">
            </div>

            <p class="w-96 m-4">Adipiscing commodo, eget morbi sagittis. Quis dignissim viverra ultrices enim, massa dolor dolor eget. Ultrices ornare quam tristique pharetra. Vel, sit scelerisque commodo libero,</p>

            <div id="input__field" class="w-full bg-green-400 flex m-4">
                <input id="input" type="text" class=" flex shrink w-3/4 p-4">
                <button class="flex shrink w-1/5 flex items-center justify-center bg-green-600">Join the waitlist</button>
            </div>
        </div>

        <div id="landing__image-section" class="bg-green-400 h-full w-1/2">
        
        </div>
    </div>
</template>

<script>

    export default {
        name: 'LandingPage',

    }

</script>

<style scoped>
</style>