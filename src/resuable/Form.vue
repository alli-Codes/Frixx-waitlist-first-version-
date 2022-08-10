<template>
  <form
    id="input__field"
    @submit.prevent="postData"
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
</template>

<script>
import isEmail from "validator/lib/isEmail";

export default {
  name: "Form",
  data() {
    return {
      isValid: {
        color: "",
        status: false,
      },
      email: "",
      apiMessage: "",
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
    postData() {
      const waitlistUrl = "http://api.frixxapp.com/v1/waitlist/create";

      fetch(waitlistUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: this.email }),
      })
        .then((response) => response.json())
        .then((data) => {
          this.apiMessage = data.message;
          console.log(this.apiMessage);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },

    submit() {
      isEmail(this.$refs.input.value)
        ? console.log(this.$refs.input.value)
        : console.log("Error");
    },
  },
};
</script>

<style scoped>
#input {
  outline: none;
}
</style>
