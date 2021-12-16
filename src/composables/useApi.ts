import { UserPayload } from '@/types/User'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { computed, ref, watch, inject } from 'vue'
import { useRouter } from 'vue-router'
// import api from '@/modules/axios'

export const useApi = (endpoint: string, access_token?: string) => {
  const router = useRouter()
  const $http = inject('$http') as AxiosInstance
  const data = ref()
  const loading = ref(false)
  const error = ref()

  const post = (payload?: Record<string, any>) => {
    loading.value = true
    error.value = undefined

    return $http
      .post(endpoint, payload)
      .then((res) => (data.value = res.data))
      .catch((e) => {
        error.value = e

        throw e
      })
      .finally(() => (loading.value = false))
  }

  const get = (query?: Record<string, any>, config?: AxiosRequestConfig) => {
    loading.value = true
    error.value = undefined

    let queryString = ''

    if (query) {
      queryString =
        '?' +
        Object.entries(query)
          .map(
            ([key, value]) =>
              `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
          )
          .join('&')
    }

    return $http
      .get(endpoint + queryString, config)
      .then((res) => (data.value = res.data))
      .catch((e) => {
        error.value = e
        throw e
      })
      .finally(() => (loading.value = false))
  }

  // @ts-ignore
  const del = () => {
    loading.value = true
    error.value = undefined

    return $http
      .delete(endpoint)
      .then((res) => (data.value = res.data))
      .catch((e) => {
        error.value = e

        throw e
      })
      .finally(() => (loading.value = false))
  }

  const errorMessage = computed(() => {
    console.log('?? compute', error.value)

    if (error.value) {
      return error.value.message
    }
  })

  const errorDetails = computed(() => {
    if (error.value && error.value.response) {
      return error.value.response.data.message
    }
  })

  const errorFields = computed(() => {
    if (error.value && Array.isArray(error.value.response.data.message)) {
      return (error.value.response.data.message as string[]).reduce(
        (acc: Record<string, any>, msg: string) => {
          let [field] = msg.split(' ')

          // TODO: Maximal...
          if (field == 'maximal') field = 'dateOfBirth'

          if (!acc[field]) {
            acc[field] = []
          }

          acc[field].push(msg)

          return acc
        },
        {}
      )
    }
  })

  const computedClasses = (key: string) => {
    if (errorFields.value?.hasOwnProperty(key)) {
      return ['border-red-600', 'bg-red-200', 'text-red-900']
    }
    return ['border-grey-600', 'bg-white', 'text-gray-900']
  }

  watch([error], () => {
    // If 401 Unauthorised, force user to buy a new subscription
    // if (error.value.response.status === 401 && router) {
    //   router.push('/subscribe')
    // }
  })

  return {
    loading,
    data,
    error,
    get,
    post,
    del,
    errorMessage,
    errorDetails,
    errorFields,
    computedClasses,
  }
}

// export default api
