<template>
  <h1 class="text-orange text-4xl font-semibold mb-4">Welcome!</h1>
  <p class="font-semibold">Sign in by entering information below</p>
  <Form
    :validation-schema="schema"
    @submit="onSubmit"
    @invalid-submit="onInvalidSubmit"
  >
    <FDInput
      name-id="email"
      name="email"
      type="email"
      label="E-mail"
      placeholder="E-mail"
      success-message="Nice and secure!"
    />
    <FDInput
      name-id="password"
      name="password"
      type="password"
      label="Password"
      placeholder="Type it again"
      success-message=""
    />
    <FDInput
      name-id="password"
      name="confirm_password"
      type="password"
      label="Confirm Password"
      placeholder="Type it again"
      success-message="Matched :)"
    />
    <FDButton class="submit-btn">Sign me Up</FDButton>
    <p class="text-sm mb-3 text-gray-500 text-center mt-3">
      Already have an account?
      <router-link :to="{ name: 'auth-action', params: { action: 'login' } }"
        >Sign in</router-link
      >
    </p>
  </Form>
</template>

<script lang="ts">
  import FDInput from '@/components/UI/Input/InputComponent.vue'
  import FDButton from '@/components/UI/Button/index.vue'
  import { Form } from 'vee-validate'
  import * as Yup from 'yup'
  export default {
    name: 'RegisterForm',
    components: { FDInput, FDButton, Form },
    setup() {
      function onSubmit(values: object) {
        alert(JSON.stringify(values, null, 2))
      }

      function onInvalidSubmit() {
        const submitBtn: HTMLButtonElement | null =
          document.querySelector('.submit-btn')
        if (submitBtn) {
          submitBtn.classList.add('invalid')
          setTimeout(() => {
            submitBtn.classList.remove('invalid')
          }, 1000)
        }
      }
      const schema = Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().min(6).required(),
        confirm_password: Yup.string()
          .required()
          .oneOf([Yup.ref('password')], 'Passwords do not match'),
      })
      return {
        schema,
        onSubmit,
        onInvalidSubmit,
      }
    },
  }
</script>
