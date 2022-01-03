<template>
  <main class="flex h-screen flex-col lg:flex-row">
    <div
      class="w-full lg:w-1/3 absolute lg:relative lg:bg-orange p-8 text-white"
    >
      <span class="text-orange lg:text-white font-bold text-5xl">FooDash</span>
    </div>
    <router-view />
    <div
      class="absolute left-0 bottom-0 p-8 w-full lg:w-1/3 text-gray-400 lg:text-white"
    >
      <h4>Check the status</h4>
      <p class="text-xs my-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, nemo
        assumenda debitis deserunt totam placeat veritatis ab atque eveniet
        obcaecati fuga aperiam inventore eaque blanditiis ut reiciendis quae
        dolore omnis.
      </p>
      <LanguageSwitcher />
      <h5 class="text-center lg:text-left">
        Privacy policy @2021 Foodash Team
      </h5>
    </div>
  </main>
</template>

<script lang="ts">
  import LanguageSwitcher from '@/components/UI/LanguageSwitcher.vue'
  import { useAuth } from '@/state/useAuth'
  import { mapState } from 'pinia'
  import { useApi } from '@/composables/useApi'
  import { API_ENDPOINTS } from '@/types/api'
  import { UserPayload } from '@/types/User'
  import { useLoader } from '@/state/useLoader'
  export default {
    name: 'AuthLayout',
    components: {
      LanguageSwitcher,
    },
    setup() {
      const authStore = useAuth()
      const router = useRouter()
      const { setShow } = useLoader()

      onMounted(() => {
        console.log('onmounted')
        setShow(false)
      })
      return {}
    },
  }
</script>
