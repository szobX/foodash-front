import { defineStore } from 'pinia'
import useToken from '@/composables/useToken'
import { useApi } from '@/composables/useApi'
import { API_ENDPOINTS } from '@/types/api'
import { UserPayload } from '@/types/User'
import { useRouter } from 'vue-router'
const { setToken, getToken, token } = useToken()

export const useAuth = defineStore({
  id: 'useAuth',
  state: () => ({
    user: null,
    token: token,
    refreshToken: null,
    loading: false,
    isLogged: false,
  }),
  getters: {
    auth: (state) => state.isLogged,
    hasToken: (state) => state.token,
  },
  actions: {
    setUser(data) {
      this.$patch((state) => {
        setToken(data.authToken.token)
        state.refreshToken = data.refreshToken
        state.isLogged = true
      })
    },
    setUserData(data: UserPayload) {
      this.$patch((state) => {
        state.isLogged = true
        state.user = data
      })
    },
    setIsLogged(flag) {
      this.isLogged = flag
    },
    logoutUser() {
      setToken(null)
      this.$patch((state) => {
        state.user = {}
        state.isLogged = false
        state.refreshToken = null
      })
    },
  },
})
