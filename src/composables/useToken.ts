import { useStorage, localStorage } from '@vueuse/core'
import axios from 'axios'
import { ref, readonly } from 'vue'

export default () => {
  const token: string = useStorage(import.meta.env.VITE_AUTH_PREFIX_APP, '')

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
