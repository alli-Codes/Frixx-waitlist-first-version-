<template>
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
    
    class="h-96 w-full lg:w-3/4 p-8 flex flex-col-reverse items-center"
  >
    <div>
        <img src="/images/quote.svg" alt="" class="h-16 w-8">
    </div>
    <swiper-slide v-for="person in person" class="h-full flex items-center justify-center flex-col"><Faq :person="person" /></swiper-slide>

  </swiper>
</template>
<script>
import Faq from './Faq.vue'
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
                index: 0,
            }
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
};
</script>
