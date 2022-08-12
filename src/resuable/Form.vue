<template>
  <form
    v-show="isActive"
    id="input__field"
    @submit.prevent="
      async () => {
        await postData(email);
      }
    "
    :email="email"
    class="lg:bg-white w-full h-28 lg:h-16 flex flex-col justify-between lg:flex-row mt-8 lg:shadow-3xl lg:dark:shadow-lightShadow rounded"
  >
    <input
      id="input"
      type="email"
      class="flex flex-1 lg:flex-none shrink lg:w-4/5 text-center text-black font-semibold tracking-wide lg:text-left lg:p-8 placeholder:text-center lg:placeholder:text-left placeholder:font-semibold border border-green lg:border-none border-solid rounded lg:rounded-none lg:rounded-l"
      :class="isValid.color"
      @input="emailValidityCheck"
      placeholder="Enter your email address"
      ref="input"
    />
    <input
      type="submit"
      value="Join the waitlist"
      :disabled="!isValid.status"
      class="bg-green disabled:bg-[#777] mt-4 lg:mt-0 flex flex-1 lg:flex-none shrink lg:w-40 items-center justify-center text-center font-semibold lg:shadow-3xl rounded lg:rounded-r cursor-pointer transition"
    />
  </form>

  <div
    v-show="!isActive"
    class="bg-green h-20 w-1/2 py-8 flex flex-col items-center justify-center text-white rounded relative"
  >
    <p class="" v-if="statusMessage === 'success'">You'll recieve an email from us</p>

    <p v-else-if="statusMessage === 'error'">You in already</p>

    <p v-else="statusMessage == ''">Loading</p>
    <!-- <img src="/images/celebration.gif" class="h-full w-full object-cover absolute" /> -->
  </div>
</template>

<script>
import isEmail from "validator/lib/isEmail";

export default {
  name: "Form",
  props: {
    postData: Function,
    isActive: Boolean,
    apiMessage: String,
    statusMessage: String,
  },
  data() {
    return {
      isValid: {
        color: "",
        message: "",
        statusCode: this.statusMessage,
      },
      email: "",
      // apiResponse: this.apiResponse,
    };
  },
  methods: {
    changeInputStyles() {
      this.isValid.status
        ? (this.isValid.color = "border-green")
        : (this.isValid.color = "border-pink-400");
    },
    emailValidityCheck() {
      let userEmail = this.$refs.input.value;
      this.isValid.status = isEmail(userEmail);
      this.isValid.status ? (this.email = userEmail) : undefined;
      this.changeInputStyles();
    },
  },
};
</script>

<style scoped>
#input {
  outline: none;
}

.message {
  background-color: rgba(0, 0, 0, 0.637);
}
</style>
