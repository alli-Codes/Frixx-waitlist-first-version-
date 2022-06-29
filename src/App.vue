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
  max-width: 1280px;

  font-weight: normal;
}
</style>
