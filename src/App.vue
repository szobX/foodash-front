<template>
  <router-view />
  <template v-if="loading">
    <div class="bg-red-500 text-yellow-300 text-4xl">LOADING</div>
  </template>
</template>

<script lang="ts">
  import Layout from '@/components/Layouts/Layout.vue'
  import { onMounted, toRefs } from 'vue'
  import { useRouter } from 'vue-router'
  import { useAuth } from './state/useAuth'
  import { mapState } from 'pinia'
  import { useApi } from './composables/useApi'
  import { API_ENDPOINTS } from './types/api'
  import { UserPayload } from './types/User'

  export default {
    name: 'App',
    components: { Layout },

    setup() {
      const authStore = useAuth()
      const router = useRouter()
      const { isLogged } = toRefs(authStore)

      const {
        error,
        loading,
        get,
        data,
        errorMessage,
        errorDetails,
        errorFields,
      } = useApi(API_ENDPOINTS.GET_CURRENT_USER)
      onMounted(() => {
        // get()
        //   .then(() => authStore.setUserData(data.value as UserPayload))
        //   .catch(() => {
        //     authStore.setIsLogged(false)
        //   })
      })
      return {
        loading,
        isLogged,
      }
    },
  }
</script>
