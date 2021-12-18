import useToken from '@/composables/useToken'
import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosResponseHeaders,
} from 'axios'
import router from '@/routers'

const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL_API as string,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    App: import.meta.env.VITE_PREFIX_APP as string,
  },
})

api.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    console.log(`Request:[${config.url}]`, config)

    const { token } = useToken()
    if (config.headers === undefined) return
    if (token.value.length > 0) {
      config.headers.common['Authorization'] = `Bearer ${token.value}`
    }
    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)
api.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log(`Respons:[]`, response)
    if (response === undefined) return
    if (
      (response.status as number) === 200 ||
      (response.status as number) === 201
    ) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(response)
    }
  },
  (error: AxiosError) => {
    if (error.response === undefined) return
    if (error.response.status) {
      switch (error.response.status || 200) {
        case 400:
          //do something
          break
        case 401:
          router.push({ name: 'Auth', params: { action: 'login' } })
          break
        case 403:
          router.push({ name: 'Auth', params: { action: 'login' } })
          break
        case 404:
          break
        case 502:
          setTimeout(() => {
            router.push({ name: 'Auth', params: { action: 'login' } })
          }, 1000)
      }
      return Promise.reject(error.response)
    }
  }
)

export default api
