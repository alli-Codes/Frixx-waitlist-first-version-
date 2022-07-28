<template>
  <div :class="['w-full', mode]" ref="divs">
    <div class="dark:bg-gradient-to-b from-topColor to-bottomColor dark:text-white">
    <Header v-show="true" :darkMode="darkMode" :mode="mode" />
    <LandingPage v-show="true" />
    <ConnectPage v-show="true" />
    <FeaturePage v-show="true" />
    <FaqPage v-show="true" />
    <HelpPage v-show="true" />
    <Footer v-show="true" />
    </div>
  </div>
</template>

<script>
import Header from './components/Header/Header.vue'
import LandingPage from './components/landing-page/LandingPage.vue'
import ConnectPage from './components/ConnectPage.vue'
import FeaturePage from './components/Features/FeaturePage.vue'
import FaqPage from './components/Faq/FaqPage.vue'
import HelpPage from './components/Help/index.vue'
import Footer from './components/Footer/index.vue'

 export default {
  name: 'App',
  components:{
    Header,
    LandingPage,
    ConnectPage,
    FeaturePage,
    FaqPage,
    HelpPage,
    Footer
  },
  data(){
    return {
      mode: 'light'
    }
  },
  methods: {
    darkMode(){
      let invertMode = 'dark'
      if(this.mode == 'light'){
        invertMode = 'dark'
        this.mode = 'dark'
      }else{
        invertMode = 'light'
        this.mode = 'light'
      }
     this.$refs.divs.classList.replace(this.mode, invertMode)
     localStorage.setItem('userPreference', this.mode)
     return this.mode
    },
  
  },
  created(){
    let data = localStorage.getItem('userPreference') || 'light'
    this.mode = data
  }
 } 
</script>

<style>

@import '@/assets/base.css';

*{
  scroll-behavior: smooth;
}

#app {
  /* width: 100vw; */
  background-color: #FAFCFC;
}
</style>
