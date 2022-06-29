<template>
  <LandingPage />
</template>

<script>

  import LandingPage from './components/LandingPage.vue'

  export default {
    name: 'App',
    components: {
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
