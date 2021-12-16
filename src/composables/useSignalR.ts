// import { readonly, ref } from 'vue'
// import * as signalR from '@microsoft/signalr'

// declare type signalRStatus = 'OPEN' | 'CONNECTING' | 'CLOSED'

// export default (provider: string) => {
//   const connection = ref<SignalR.HubConnection>(null)
//   const signalRStatus = ref<signalRStatus>('CLOSED')
//   const provider: string = provider
//   const init = () => {
//     connection = new signalR.HubConnectionBuilder()
//       .withUrl(`${import.meta.env.VITE_BACKEND_URL}${provider}`, {
//         skipNegotiation: true,
//         transport: signalR.HttpTransportType.WebSockets,
//         withCredentials: false,
//       })
//       .configureLogging(signalR.LogLevel.Information)
//       .build()
//   }
//   const connection: signalR.HubConnection =
//     (app.config.globalProperties.$signalR = connection)

//   app.provide('signalR', connection)
//   return {}
// }
