import { createApp } from 'vue'
import './tailwind.css'
import App from './App.vue'
import { routes } from './routers'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import { SignalRService, VueSignalR } from '@/modules/signalR/index.ts'
import { signalRProviders } from '@/types/signalR.ts'
import { HttpTransportType } from '@microsoft/signalr'
const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes,
})
console.log(import.meta.env.VITE_BACKEND_URL)
app.use(createPinia())
app.use(router)

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
app.mount('#app')
