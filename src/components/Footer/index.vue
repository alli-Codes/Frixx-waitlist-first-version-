<template>
    <div class="bg-green">

        <div class="py-3 px-32 relative grid space-y-5">
            <Icon :w="140" :h="80" />
            <div class="flex flex-col space-y-6">
                <p class="font-normal w-3/6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui laboriosam
                    asperiores, atque consequuntur
                    excepturi soluta? </p>
                <div class="flex flex-row gap-4 text-green">
                    <div class="rounded-full grid place-items-center px-3 py-3 w-12 h-12 border border-primary">
                        <a href="https://facebook.com/frixxapp" target="_blank" rel="noopener noreferrer">

                            <i class="fab fa-facebook"></i>
                        </a>
                    </div>
                    <div class="rounded-full grid place-items-center px-3 py-3 w-12 h-12 border border-primary">
                        <a href="https://twitter.com/frixxapp" target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-twitter"></i>
                        </a>
                    </div>
                    <div class="rounded-full grid place-items-center px-3 py-3 w-12 h-12 border border-primary">
                        <a href="https://linkedin/company/frixxapp" target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-linkedin"></i>
                        </a>
                    </div>
                    <div class="rounded-full grid place-items-center px-3 py-3 w-12 h-12 border border-primary">
                        <i class="fab fa-instagram"></i>
                        <a href="https://instagram.com/frixxapp" target="_blank" rel="noopener noreferrer"></a>
                    </div>
                </div>
            </div>
            <div class="flex justify-start items-start pb-10">
                <a href="#" class="cursor-pointer flex flex-row justify-center items-center gap-3">
                    Back to top <i class="fa-solid fa-angle-up"></i>
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