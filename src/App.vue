<template>
<Header />
  <LandingPage />
</template>

<script>

  import Header from './components/Header.vue'
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
  padding: 0 4rem;

  font-weight: normal;
}
</style>
