<template>
  <div
    id="container"
    class="lg:h-screen lg:flex flex-col justify-between pt-20 lg:pt-8"
    :email="email"
  >
    <div
      id="landing__page"
      class="lg:h-full lg:flex flex-row items-center justify-center"
    >
      <div
        id="landing__text-section"
        class="w-full lg:w-1/2 flex flex-col px-4 lg:pl-16 items-start justify-center lg:space-y-24"
      >
        <div
          v-show="true"
          id="headline"
          class="w-full lg:w-3/4 text-4xl lg:text-6xl mt-5 font-gorgagrotesque-regular font-bold"
        >
          <h1 style="z-index: 10" class="w-full">
            A community for <br />
            <span class="text-primary"
              >Tech <br />
              Enthusiasts</span
            >
            <br />
            fueled by knowledge
          </h1>

          <div
            v-show="true"
            id="headline"
            class="w-full lg:w-3/4 text-4xl lg:text-6xl mt-5 font-gorgagrotesque-regular font-bold"
          >
            <h1 style="z-index: 10" class="w-full">
              A community for <br />
              <span class="text-primary"
                >Tech <br />
                Enthusiasts</span
              >
              <br />
              fueled by knowledge
            </h1>

            <!-- <img src="../assets/images/circle.svg" class="absolute inset-y-40"> -->
          </div>

          <p v-show="false" class="w-full mt-4 font-semibold leading-6 text-[12px]">
            Adipiscing commodo, eget morbi sagittis. Quis dignissim viverra ultrices enim,
            massa dolor dolor eget. Ultrices ornare quam tristique pharetra. Vel, sit
            scelerisque commodo libero,
          </p>

          <Form />
        </div>

        <div
          id="landing__image-section"
          class="h-full lg:w-1/2 flex justify-center items-center py-16 lg:py-0"
        >
          <!-- <Mockup /> -->
          <img src="../../assets/mockup.svg" class="animate" alt="" />
        </div>
      </div>

      <p v-show="false" class="w-full mt-4 font-semibold leading-6 text-[12px]">
        Adipiscing commodo, eget morbi sagittis. Quis dignissim viverra ultrices enim,
        massa dolor dolor eget. Ultrices ornare quam tristique pharetra. Vel, sit
        scelerisque commodo libero,
      </p>

      <Form
        :postData="postData"
        :isActive="apiResponse.isActive"
        :apiMessage="apiResponse.apiMessage"
        :statusMessage="apiResponse.statusMessage"
      />
    </div>

    <div
      id="landing__image-section"
      class="h-full lg:w-1/2 flex justify-center items-center py-16 lg:py-0"
    >
      <!-- <Mockup /> -->
      <img src="/images/mockup.png" class="animate" alt="" />
    </div>
  </div>

  <div
    id="strap"
    class="w-full h-20 bg-primary font-semibold font-gorgagrotesque-bold flex items-center justify-center dark:text-black"
  >
    Join the waitlist to get early access
  </div>
</template>

<script>
import { ref } from "vue";
import Circle from "./Circle.vue";
import Form from "../../resuable/Form.vue";

import Mockup from "./Mockup.vue";

import "animate.css";

export default {
  name: "LandingPage",
  components: {
    Circle,
    Mockup,
    Form,
    // Message,
  },
  props: {
    postData: Function,
    apiResponse: Object,
    statusMessage: String,
    email: String,
  },
  data() {
    return {
      styles: {
        strokeColor: "#8E25B6",
        top: "-25",
        left: "-27",
      },
      bgColor: "bg-emerald-50",
      isValid: {
        color: "",
        status: false,
      },
    };
  },
};
</script>

<style scoped>
#landing__page {
  padding: 0 0rem;
}

.animate {
  animation-name: hover;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  animation-direction: alternate;
  /* animation-fill-mode: forwards; */
  /* transform: scale(0.9); */
}

@keyframes hover {
  from {
    transform: scale(0.8);
  }
  to {
    transform: scale(0.9);
  }
}
</style>
