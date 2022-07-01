<template>
  <Header />
  <LandingPage />
  <ConnectPage />
  <FeaturePage />
</template>

<script>

  import Header from './components/Header/Header.vue'
  import LandingPage from './components/landing-page/LandingPage.vue'
  import ConnectPage from './components/ConnectPage.vue'
  import FeaturePage from './components/Features/FeaturePage.vue'

  export default {
    name: 'App',
    components: {
      Header,
      LandingPage,
      ConnectPage,
      FeaturePage
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
