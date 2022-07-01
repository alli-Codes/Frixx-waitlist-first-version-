<template>
  <Header />
  <LandingPage />
  <ConnectPage />
</template>

<script>

  import Header from './components/Header/Header.vue'
  import LandingPage from './components/landing-page/LandingPage.vue'
  import ConnectPage from './components/ConnectPage.vue'

  export default {
    name: 'App',
    components: {
      Header,
      LandingPage,
      ConnectPage
    }
  }


</script>

<style>

@import '@/assets/base.css';

#app {
  /*max-width: 1280px;*/
  background-color: #FAFCFC;
}
</style>
