import { createApp } from 'vue'
import './tailwind.css'
import App from './App.vue'
import router from './routers'
import { createPinia } from 'pinia'
import { SignalRService, VueSignalR } from '@/modules/signalR/index.ts'
import { signalRProviders } from '@/types/signalR.ts'
import { HttpTransportType } from '@microsoft/signalr'
import useToken from '@/composables/useToken'
import api from '@/modules/axios'

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.provide('$http', api)
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

app.mount('#app')
