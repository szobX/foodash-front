import useToken from '@/composables/useToken'
import axios from 'axios'
import { useRouter } from 'vue-router'
console.log(useRouter())
const router = useRouter()
const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL_API,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    App: import.meta.env.VITE_PREFIX_APP,
  },
})

api.interceptors.request.use(
  (config) => {
    console.log(`Request:[${config.url}]`, config.data)

    const { token } = useToken()

    if (token.value.length > 0) {
      config.headers.common['Authorization'] = `Bearer ${token.value}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
api.interceptors.response.use(
  (response) => {
    console.log(`Respons:[]`, response)

    if (response.status === 200 || response.status === 201) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(response)
    }
  },
  (error) => {
    if (error.response.status) {
      switch (error.response.status) {
        case 400:
          //do something
          break

        case 401:
          console.log({ name: 'Auth', params: { action: 'login' } })
          break
        case 403:
          console.log({ name: 'Auth', params: { action: 'login' } })
          break
        case 404:
          break
        case 502:
          setTimeout(() => {
            console.logh({ name: 'Auth', params: { action: 'login' } })
          }, 1000)
      }
      return Promise.reject(error.response)
    }
  }
)

export default api
