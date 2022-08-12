<template>
  <div id="faq" class="grid place-items-center py-5 px-4 lg:px-32 relative">
    <div class="h-64 grid place-items-center space-y-8">
      <h1
        class="font-bold relative z-[100] font-gorgagrotesque-bold lg:w-4/6 text-center text-2xl lg:text-3xl"
      >
        With your help,our products and tools will empower people find what they need to
        develop technology
      </h1>
      <span class="font-semibold">Reserve your spot</span>
    </div>
    <div class="w-full lg:w-1/2 flex justify-center">
      <Form
        :postData="postData"
        :isActive="apiResponse.isActive"
        :apiMessage="apiResponse.apiMessage"
        :statusMessage="apiResponse.statusMessage"
      />
    </div>
  </div>
</template>

<script>
import Form from "../../resuable/Form.vue";

export default {
  components: { Form },
  props: {
    postData: Function,
    apiResponse: Object,
    statusMessage: String,
    email: String,
  },
  data() {
    return {
      bgColor: "bg-emerald-50",
      isValid: {
        color: "",
        status: false,
      },
    };
  },

  methods: {
    check() {
      this.isValid.status
        ? (this.isValid.color = "border-green")
        : (this.isValid.color = "border-pink-400");
    },
    emailValidity() {
      this.isValid.status = isEmail(this.$refs.input.value);
      this.check();
    },
  },
};
</script>
