<template>
  <Header />
  <LandingPage />
  <ConnectPage />
  <FeaturePage v-show="false" />
  <FaqPage v-show="false" />
  <HelpPage v-show="false" />
  <Footer v-show="false" />
</template>

<script setup>
import Header from './components/Header/Header.vue'
import LandingPage from './components/landing-page/LandingPage.vue'
import ConnectPage from './components/ConnectPage.vue'
import FeaturePage from './components/Features/FeaturePage.vue'
import FaqPage from './components/Faq/index.vue'
import HelpPage from './components/Help/index.vue'
import Footer from './components/Footer/index.vue'
</script>

<style>

@import '@/assets/base.css';

#app {
  /*max-width: 1280px;*/
  background-color: #FAFCFC;
}
</style>
