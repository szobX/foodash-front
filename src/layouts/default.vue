<script lang="ts">
  import Preloader from '@/components/Layouts/Preloader.vue'
  import { onMounted } from 'vue'
  import Sidebar from '@/components/Layouts/Sidebar.vue'
  import Navbar from '@/components/Layouts/Navbar.vue'
  import { useAuth } from '@/state/useAuth'
  import { useApi } from '@/composables/useApi'
  import { API_ENDPOINTS } from '@/types/api'
  import { useRouter } from 'vue-router'

  import { UserPayload } from '@/types/User'
  import { useLoader } from '@/state/useLoader'
  export default {
    name: 'LayoutDashboard',
    components: { Preloader, Sidebar, Navbar },
    setup() {
      const authStore = useAuth()
      const router = useRouter()
      const { setShow } = useLoader()
      const loaderStore = useLoader()
      const { isLogged } = toRefs(authStore)
      // const { show } = toRefs(loaderStore)

      const { loading, get, data } = useApi(API_ENDPOINTS.GET_CURRENT_USER)
      onMounted(() => {
        get()
          .then(() => {
            authStore.setUserData(data.value as UserPayload)
            setShow(false)
          })
          .catch(() => {
            authStore.setIsLogged(false)
          })
      })
      return {
        loading,
        isLogged,
      }
    },
  }
</script>

<template>
  <div class="flex h-screen w-screen bg-gray-100 font-sans">
    <Preloader />
    <Sidebar />
    <Navbar />

    <div class="main flex flex-1 flex-col pt-32 mx-8">
      <router-view />
    </div>
  </div>
</template>
