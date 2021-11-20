<template>
  <h1 class="text-orange text-4xl font-semibold mb-4">Reset password</h1>
  <p class="font-semibold">
    We send to your email link with change password form
  </p>
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
      placeholder="Type a E-mail to reset password"
      success-message="Nice and secure!"
    />
    <FDButton class="submit-btn">Submit</FDButton>
    <p class="text-sm mb-3 text-gray-500 mt-3">
      back to the
      <router-link :to="{ name: 'Auth', params: { action: 'login' } }"
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
      })
      return {
        schema,
        onSubmit,
        onInvalidSubmit,
      }
    },
  }
</script>
