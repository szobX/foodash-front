<template>
  <h1 class="text-orange text-4xl font-semibold mb-4">Welcome!</h1>
  <p class="font-semibold">{{ t('sign-in') }}</p>
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
      value="admin@foodash.com"
      placeholder="E-mail"
      success-message="Nice and secure!"
    />
    <FDInput
      name-id="password"
      name="password"
      type="password"
      value="DevelopmentSuperAdminPassword"
      label="Password"
      placeholder="Password"
      success-message=""
    />
    <p class="text-sm mb-3 text-gray-500">
      Don't remember password?
      <router-link
        class=""
        :to="{ name: 'auth-action', params: { action: 'forgot-password' } }"
      >
        reset it!</router-link
      >
    </p>
    <FDButton class="submit-btn" h>Sign Me In</FDButton>
  </Form>
  <div class="h-px w-full bg-gray-200 my-3"></div>
  <p class="text-sm mb-3 text-gray-500 text-center mt-3">
    <router-link :to="{ name: 'auth-action', params: { action: 'register' } }"
      >Go to register!</router-link
    >
  </p>
</template>

<script lang="ts">
  import FDInput from '@/components/UI/Input/InputComponent.vue'
  import FDButton from '@/components/UI/Button/index.vue'
  import { Form } from 'vee-validate'
  import * as Yup from 'yup'
  import { useRouter } from 'vue-router'
  import { UserLogin } from '@/types/User'
  import { useApi } from '@/composables/useApi'
  import { API_ENDPOINTS } from '@/types/api'
  import { useAuth } from '@/state/useAuth'

  export default {
    components: { FDInput, FDButton, Form },
    setup() {
      const router = useRouter()
      const authStore = useAuth()
      const { t } = useI18n()
      const {
        error,
        loading,
        post,
        data,
        errorMessage,
        errorDetails,
        errorFields,
      } = useApi(API_ENDPOINTS.LOGIN)

      function onSubmit(values: UserLogin): void {
        post(values).then(() => {
          authStore.setUser(data.value)
          router.push({ name: 'Dashboard' })
        })
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
        authStore,
        t,
      }
    },
  }
</script>
