<template>
  <Form
    :validation-schema="schema"
    @submit="onSubmit"
    @invalid-submit="onInvalidSubmit"
  >
    <FDInput
      name="email"
      type="email"
      label="E-mail"
      placeholder="Your email address"
      success-message="Got it, we won't spam you!"
    />

    <FDInput
      name="password"
      type="password"
      label="Password"
      placeholder="Your password"
      success-message="Nice and secure!"
    />

    <FDButton type="primary">Submit</FDButton>
  </Form>
</template>

<script lang="ts">
  import { Form } from 'vee-validate'
  import FDInput from '@/components/UI/Input/InputComponent.vue'
  import FDButton from '@/components/UI/Button/index.vue'

  import * as Yup from 'yup'
  export default {
    name: 'LoginFOrm',
    components: { Form, FDInput, FDButton },
    setup() {
      function onSubmit(values) {
        alert(JSON.stringify(values, null, 2))
      }

      function onInvalidSubmit() {
        const submitBtn = document.querySelector('.submit-btn')
        submitBtn.classList.add('invalid')
        setTimeout(() => {
          submitBtn.classList.remove('invalid')
        }, 1000)
      }
      const schema = Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().email().required(),
        password: Yup.string().min(6).required(),
        confirm_password: Yup.string()
          .required()
          .oneOf([Yup.ref('password')], 'Passwords do not match'),
      })
      return {
        schema,
      }
    },
  }
</script>
