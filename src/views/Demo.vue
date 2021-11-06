<template>
  <FDCard>
    <template v-slot:header>
      <h2 class="text-xl font-semibold text-gray-500">
        Demo components
      </h2></template
    >
    <template v-slot:body>
      <Form
        @submit="onSubmit"
        :validation-schema="schema"
        @invalid-submit="onInvalidSubmit"
      >
        <span>SMALL INPUT</span>
        <FDInput
          name="name"
          type="text"
          value="inital"
          label="Full Name"
          size="small"
          placeholder="Your Name"
          success-message="Nice to meet you!"
        />
        <span>LARGE INPUT</span>
        <FDInput
          name="email"
          type="email"
          label="E-mail"
          size="large"
          placeholder="Your email address"
          success-message="Got it, we won't spam you!"
        />
        <span>DEFAULT INPUT</span>

        <FDInput
          name="password"
          type="password"
          label="Password"
          size="xd"
          placeholder="Your password"
          success-message="Nice and secure!"
        />
        <FDInput
          name="confirm_password"
          type="password"
          label="Confirm Password"
          placeholder="Type it again"
          success-message="Glad you remembered it!"
        />
        <FDButton>Submit</FDButton>
      </Form>
    </template>
  </FDCard>
  <FDCard> xD </FDCard>
</template>

<script setup lang="ts">
import FDInput from "@/components/UI/Input/InputComponent.vue";
import FDButton from "@/components/UI/Button/index.vue";
import FDCard from "@/components/UI/Card/Card.vue";
import { Form } from "vee-validate";
import * as Yup from "yup";

import { ref } from "vue";
const name = ref("test");
function onSubmit(values) {
  alert(JSON.stringify(values, null, 2));
}

function onInvalidSubmit() {
  const submitBtn = document.querySelector(".submit-btn");
  submitBtn.classList.add("invalid");
  setTimeout(() => {
    submitBtn.classList.remove("invalid");
  }, 1000);
}
const schema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(6).required(),
  confirm_password: Yup.string()
    .required()
    .oneOf([Yup.ref("password")], "Passwords do not match"),
});
</script>
