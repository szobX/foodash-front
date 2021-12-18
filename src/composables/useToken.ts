import { useStorage } from '@vueuse/core'
import { readonly } from 'vue'

export default () => {
  const token = useStorage(import.meta.env.VITE_AUTH_PREFIX_APP, '')

  const getToken = () => {
    return token.value
  }
  const setToken = (data) => {
    token.value = data
  }
  return {
    token: readonly(token),
    getToken,
    setToken,
  }
}
