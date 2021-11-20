<template>
  <div class="flex h-screen flex-col lg:flex-row">
    <div
      class="
        w-full
        lg:w-1/3
        absolute
        lg:relative
        h-screen
        lg:bg-orange
        p-8
        text-white
      "
    >
      <span class="text-orange lg:text-white font-bold text-5xl">FooDash</span>
    </div>
    <div class="w-full lg:w-2/3 h-screen bg-gray-100 flex">
      <div class="flex flex-col my-auto lg:m-auto w-full lg:w-2/4 p-12 lg:p-0">
        <component :is="currentComponent" />
      </div>
    </div>
    <div
      class="
        absolute
        left-0
        bottom-0
        p-8
        w-full
        lg:w-1/3
        text-gray-400
        lg:text-white
      "
    >
      <h4>Check the status</h4>
      <p class="text-xs my-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, nemo
        assumenda debitis deserunt totam placeat veritatis ab atque eveniet
        obcaecati fuga aperiam inventore eaque blanditiis ut reiciendis quae
        dolore omnis.
      </p>
      <h5 class="text-center lg:text-left">
        Privacy policy @2021 Foodash Team
      </h5>
    </div>
  </div>
</template>

<script lang="ts">
  import LoginForm from '@/components/Auth/LoginForm.vue'
  import RegisterForm from '@/components/Auth/RegisterForm.vue'
  import ForgotPasswordForm from '@/components/Auth/ForgotPasswordForm.vue'
  import { useRoute } from 'vue-router'
  import { watch, computed, ref } from 'vue'
  enum AuthNameEnum {
    login = 'LoginForm',
    register = 'RegisterForm',
    'forgot-password' = 'ForgotPasswordForm',
  }
  export default {
    name: 'AuthView',
    components: { LoginForm, RegisterForm, ForgotPasswordForm },
    setup() {
      const route = useRoute()
      const name = ref(route.params.action)
      const component = ref()
      console.log(name.value)
      component.value = AuthNameEnum[name.value as keyof typeof AuthNameEnum]
      // console.log(component.value)
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
