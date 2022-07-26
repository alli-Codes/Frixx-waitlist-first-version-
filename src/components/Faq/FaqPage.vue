<template>
<div class="">
  <swiper
    :slidesPerView="1"
    :spaceBetween="30"
    :loop="true"
    :autoplay="{
      delay: 3500,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"

    :style="{'--swiper-pagination-color': 'green', '--swiper-pagination-bullet-inactive-color': 'gray'}"
    
    class=" h-96 w-full lg:w-3/4 p-8 flex flex-col-reverse items-center"
  >
        <QuoteIcon :quoteColor="quoteColor" class=" w-[2rem] mb-8" />
    <swiper-slide v-for="person in person" class="h-full flex items-center justify-center flex-col"><Faq :person="person" /></swiper-slide>

  </swiper>
</div>
</template>
<script>
import Faq from './Faq.vue'
import QuoteIcon from './QuoteIcon.vue'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default {
    name: 'test',
  components: {
    Faq,
    Swiper,
    SwiperSlide,
    QuoteIcon
}, 
  data(){
            return{
                person: [
                    {
                        image: '/images/evans.png',
                        name: 'Tobi Emeka',
                        title: 'Frontend Dev/ CEWhore',
                        quote: 'Imperdiet sit eused tortor egestas id. Aconsectetur ac fringillanisi.'
                    },

                    {
                        image: '/images/evans.png',
                        name: 'Evans Allison',
                        title: 'Frontend Dev/ CTO',
                        quote: 'Imperdiet sit eused tortor egestas id. Aconsectetur ac fringillanisi.'
                    },

                    {
                        image: '/images/evans.png',
                        name: 'No name',
                        title: 'Media Lead/ CMO',
                        quote: 'Imperdiet sit eused tortor egestas id. Aconsectetur ac fringillanisi.'
                    },
                ],
                quoteColor: 'fill-[#182220] dark:fill-white'
            }
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
};
</script>

<style scoped>
  .red{
    background-color: red;
  }
</style>