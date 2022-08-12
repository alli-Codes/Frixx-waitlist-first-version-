<template>
  <div
    v-show="showCard"
    class="message h-full w-full px-8 flex items-center justify-center fixed z-[10000] transition duration-[3000ms] delay-1000 ease-in-out"
  >
    <div
      class="bg-[#F2F7F7] dark:bg-[#F9F1FC] dark:text-black h-60 w-[30rem] flex flex-col items-center justify-center rounded shadow-2xl relative"
    >
      <button
        @click="closeCard"
        class="bg-red-400 h-8 w-8 mx-4 my-2 text-sm absolute top-0 right-0 rounded-full"
      >
        <i class="fas fa-close"></i>
      </button>
      <p>{{ apiMessage }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    apiMessage: String,
  },
  data() {
    return {
      showCard: true,
    };
  },
  methods: {
    closeCard() {
      this.showCard = false;
    },
  },
};
</script>

<style>
.message {
  background-color: rgba(0, 0, 0, 0.425);
}
</style>
