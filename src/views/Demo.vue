<template>
  <FDCard>
    <template #header>
      <h2 class="text-xl font-semibold text-gray-500">Demo components</h2>
    </template>
    <template #body>
      <Form
        :validation-schema="schema"
        @submit="onSubmit"
        @invalid-submit="onInvalidSubmit"
      >
        <FDInput
          name="email"
          type="email"
          label="E-mail"
          placeholder="E-mail"
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

<script lang="ts">
  import FDInput from '@/components/UI/Input/InputComponent.vue'
  import FDButton from '@/components/UI/Button/index.vue'
  import FDCard from '@/components/UI/Card/Card.vue'
  import { Form } from 'vee-validate'
  import * as Yup from 'yup'
  import axios from 'axios'
  export default {
    components: { FDInput, FDButton, FDCard, Form },
    setup() {
      function onSubmit(values: object) {
        alert(JSON.stringify(values, null, 2))
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
        onSubmit,
      }
    },
  }
</script>
