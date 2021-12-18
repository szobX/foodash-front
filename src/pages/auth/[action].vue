<template>
  <div class="w-full lg:w-2/3 h-screen bg-gray-100 flex">
    <div class="flex flex-col my-auto lg:m-auto w-full lg:w-2/4 p-12 lg:p-0">
      <component :is="currentComponent" />
    </div>
  </div>
</template>
<route lang="yaml">
meta:
  layout: auth
</route>

<script lang="ts">
  import LoginForm from '@/components/Auth/LoginForm.vue'
  import RegisterForm from '@/components/Auth/RegisterForm.vue'
  import ForgotPasswordForm from '@/components/Auth/ForgotPasswordForm.vue'
  import { useRoute } from 'vue-router'
  import LanguageSwitcher from '@/components/UI/LanguageSwitcher.vue'
  import { watch, computed, ref } from 'vue'
  enum AuthNameEnum {
    login = 'LoginForm',
    register = 'RegisterForm',
    'forgot-password' = 'ForgotPasswordForm',
  }
  export default {
    name: 'AuthView',
    components: {
      LoginForm,
      RegisterForm,
      ForgotPasswordForm,
      LanguageSwitcher,
    },
    setup() {
      const route = useRoute()
      const name = ref(route.params.action)
      const component = ref()
      component.value = AuthNameEnum[name.value as keyof typeof AuthNameEnum]
      watch(
        () => route.params.action,
        (newParam, prevCount) => {
          component.value = AuthNameEnum[newParam as keyof typeof AuthNameEnum]
        }
      )
      return {
        currentComponent: component,
        name: name,
      }
    },
  }
</script>

<style></style>
