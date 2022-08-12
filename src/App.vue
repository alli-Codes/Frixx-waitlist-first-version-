<template>
  <div :class="['w-full', mode]" ref="divs">
    <div class="dark:bg-gradient-to-b from-topColor to-bottomColor dark:text-white">
      <Message
        :apiMessage="apiResponse.apiMessage"
        v-show="!apiResponse.apiMessage == ''"
      />
      <Header v-show="true" :darkMode="darkMode" :mode="mode" />
      <LandingPage
        :postData="postData"
        :apiResponse="apiResponse"
        :statusMessage="statusMessage"
        v-show="true"
      />
      <ConnectPage v-show="true" />
      <FeaturePage v-show="true" />
      <FaqPage v-show="true" />
      <HelpPage :postData="postData" :apiResponse="apiResponse" v-show="true" />
      <Footer v-show="true" />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header/Header.vue";
import LandingPage from "./components/landing-page/LandingPage.vue";
import ConnectPage from "./components/ConnectPage.vue";
import FeaturePage from "./components/Features/FeaturePage.vue";
import FaqPage from "./components/Faq/FaqPage.vue";
import HelpPage from "./components/Help/index.vue";
import Footer from "./components/Footer/index.vue";
import Message from "./resuable/Message.vue";

export default {
  name: "App",
  components: {
    Header,
    LandingPage,
    ConnectPage,
    FeaturePage,
    FaqPage,
    HelpPage,
    Footer,
    Message,
  },
  props: {
    email: String,
  },
  data() {
    return {
      mode: "light",
      apiResponse: {
        isActive: true,
        apiMessage: "",
        statusMessage: "",
      },
    };
  },
  methods: {
    darkMode() {
      let invertMode = "dark";
      if (this.mode == "light") {
        invertMode = "dark";
        this.mode = "dark";
      } else {
        invertMode = "light";
        this.mode = "light";
      }
      this.$refs.divs.classList.replace(this.mode, invertMode);
      localStorage.setItem("userPreference", this.mode);
      return this.mode;
    },

    postData(email) {
      const waitlistUrl = "http://api.frixxapp.com/v1/waitlist/create";

      fetch(waitlistUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email }),
      })
        .then((response) => response.json())
        .then((data) => {
          // console.log(data.status);
          this.apiResponse.apiMessage = data.message;
          this.apiResponse.statusMessage = data.status;
          // console.log(this.apiResponse.status);
        })
        .catch((error) => {
          console.error("Error:", error);
        });

      this.apiResponse.isActive = false;
    },
  },
  created() {
    let data = localStorage.getItem("userPreference") || "light";
    this.mode = data;
  },
};
</script>

<style>
@import "@/assets/base.css";

* {
  scroll-behavior: smooth;
}

#app {
  /* width: 100vw; */
  background-color: #fafcfc;
}
</style>
