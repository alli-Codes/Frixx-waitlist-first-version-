<template>
<Header />
  <LandingPage />
</template>

<script>

  import Header from './components/Header/Header.vue'
  import LandingPage from './components/landing-page/LandingPage.vue'

  export default {
    name: 'App',
    components: {
      Header,
      LandingPage,
    }
  }


</script>

<style>

@import '@/assets/base.css';

#app {
  /*max-width: 1280px;*/
  background-color: #FAFCFC;
  

  font-weight: normal;
}
</style>
