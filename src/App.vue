<template>
  <div>
    <Header v-show="true" />
    <LandingPage v-show="true" />
    <ConnectPage v-show="true" />
    <FeaturePage v-show="true" />
    <FaqPage v-show="true" />
    <HelpPage v-show="true" />
    <Footer v-show="true" />
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
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
  /* width: 100vw; */
  background-color: #FAFCFC;
}
</style>
