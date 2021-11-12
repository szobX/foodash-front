import axios from 'axios'

const ApiService = {
  apiHost: '',
  init(apiHost: string, baseApiURL: string) {
    console.log('axios init')
    this.apiHost = apiHost
    axios.defaults.baseURL = baseApiURL
    axios.defaults.withCredentials = false
    axios.defaults.headers.common['Accept'] = 'application/json'
    axios.defaults.headers.common['ContentType'] = 'application/json'
    console.log(axios.defaults)
  },
  config(configs?: object, queryParameters?: object) {
    const config: any = {
      ...configs,
      params: {
        ...queryParameters,
      },
    }
    return config
  },
  get(resource: string, queryParameters: object, configs: object) {
    return axios.get(resource, ApiService.config(configs, queryParameters))
  },

  post(resource: string, data: object, configs: object) {
    return axios.post(resource, data, ApiService.config(configs))
  },

  put(resource: string, data: object) {
    return axios.put(resource, data, ApiService.config())
  },
  delete(resource: string) {
    return axios.delete(resource, ApiService.config())
  },
  authorizeRequest(
    route: string,
    method: Function,
    paramOrData: object = {},
    configs: object = {}
  ) {
    return new Promise((resolve, reject) => {
      method(route, paramOrData, configs)
        .then((response: any) => {
          resolve(response)
        })
        .catch((error: any) => {
          console.log(error) // TODO
        })
    })
  },
}

export default ApiService
