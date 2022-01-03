import { createApp } from 'vue'
import './tailwind.css'
import App from './App.vue'
import router from './routers'
import { createPinia } from 'pinia'
import { SignalRService, VueSignalR } from '@/modules/signalR/index'
import { signalRProviders } from '@/types/signalR'
import { HttpTransportType } from '@microsoft/signalr'
import useToken from '@/composables/useToken'
import api from '@/modules/axios'
import { createI18n } from 'vue-i18n'

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.provide('$http', api)

const messages = Object.fromEntries(
  Object.entries(import.meta.globEager('../locales/*.y(a)?ml')).map(
    ([key, value]) => {
      const yaml = key.endsWith('.yaml')
      return [key.slice(11, yaml ? -5 : -4), value.default]
    }
  )
)
const i18n = createI18n({
  locale: 'en',
  messages,
})

app.use(i18n)

app.use(VueSignalR, {
  url: import.meta.env.VITE_BACKEND_URL,
  options: {},
  provider: signalRProviders.NOTIFICATIONS,
  withUrlOptions: {
    skipNegotiation: true,
    transport: HttpTransportType.WebSockets,
    withCredentials: false,
  },
})
app.use(VueSignalR, {
  url: import.meta.env.VITE_BACKEND_URL,
  options: {},
  provider: signalRProviders.ORDERS,
  withUrlOptions: {
    skipNegotiation: true,
    transport: HttpTransportType.WebSockets,
    withCredentials: false,
  },
})
interface ImportMetaEnv {
  readonly VITE_API_TIMEOUT: number
  readonly VITE_MOCKUP: boolean
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
app.mount('#app')

// if (module.hot) {
//   module.hot.accept(['./en', './pl'], function () {
//     // i18n.setLocaleMessage('en', import('./en').default)
//     // i18n.setLocaleMessage('pl', import('./pl').default)
//     // Or the following hot updates via $i18n property
//     // app.$i18n.setLocaleMessage('en', require('./en').default)
//     // app.$i18n.setLocaleMessage('ja', require('./ja').default)
//   })
// }
