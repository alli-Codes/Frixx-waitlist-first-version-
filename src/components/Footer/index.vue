<template>
    <div>

        <div class="py-3 px-4 lg:pl-16 relative grid space-y-5 mt-8">
            <Icon :w="140" :h="80" class="fill-[#182220] dark:fill-[#ffffff]" />
            <div class="flex flex-col space-y-6">
                <p class="font-normal lg:w-3/6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui laboriosam
                    asperiores, atque consequuntur
                    excepturi soluta? </p>
                <div class="flex flex-row gap-4 text-green">

                        <a href="https://facebook.com/frixxapp" class="rounded-full flex justify-center items-center w-12 h-12 border border-primary hover:text-white hover:bg-green transition" target="_blank" rel="noopener noreferrer">

                            <i class="fab fa-facebook"></i>
                        </a>

                        <a href="https://twitter.com/frixxapp" class="rounded-full flex justify-center items-center w-12 h-12 border border-primary hover:text-white hover:bg-green transition" target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-twitter"></i>
                        </a>
                    <!-- <div > -->
                        <a href="https://linkedin/company/frixxapp" class=" rounded-full flex justify-center items-center w-12 h-12 border border-primary hover:text-white hover:bg-green transition" target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-linkedin"></i>
                        </a>
                    <!-- </div> -->
                        <a href="https://instagram.com/frixxapp" class="rounded-full flex justify-center items-center w-12 h-12 border border-primary hover:text-white hover:bg-green transition" target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-instagram"></i>
                        </a>
                </div>
            </div>
            <div class="flex py-8">
                <a href="#" class="cursor-pointer flex flex-row justify-center items-center gap-3">
                    Back to top <i class="fa-solid fa-angle-up text-2xl "></i>
                </a>
            </div>
        </div>
        <div class="border-t border-slate-600">
            <div class="py-5 px-2 grid place-items-center">
                <span class="text-center font-[700]">&copy; Copyright 2022 Texxalabs Technology</span>
            </div>
        </div>
    </div>
</template>


<script setup>
import Icon from '../Header/Icon.vue';
</script>