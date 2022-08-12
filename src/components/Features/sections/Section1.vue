<template>
  <div
    data-aos="fade-right"
    data-aos-duration="1000"
    class="flex flex-col items-center px-0 lg:px-32 relative"
  >
    <div class="flex flex-col lg:flex-row justify-around items-center">
      <div class="lg:flex-1">
        <img src="/images/feature-1.png" class="w-[90%]" />
      </div>

      <div
        class="py-4 lg:flex-1 lg:h-64 flex flex-col items-start justify-evenly space-y-4"
      >
        <h1 class="font-bold font-gorgagrotesque-bold text-2xl">Live Chatrooms</h1>
        <p>
          Imperdiet sit eu sed tortor egestas id. A consectetur ac fringilla nisi. Vitae
          et sed ante dictum diam scelerisque vulputate at pretium. Sit porttitor ac
          tortor pretium pellentesque. Duis fermentum.
        </p>
        <a href="#faq"><button class="button">Join the waitlist</button></a>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  name: "Section1",
  created() {
    AOS.init();
  },
};
</script>
