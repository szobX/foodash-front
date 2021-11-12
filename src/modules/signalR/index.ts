export { VueSignalR, useSignalR } from './plugin.ts'
export { SignalRService } from './service.ts'
// export  SignalRConfig  from '@/modules/signalR/config.ts';
// export { HubCommandToken, HubEventToken } from './tokens.ts'
export { SignalRSymbol } from './symbols.ts'

/** @deprecated Use HubEventToken instead */
export type SignalRClientMethod<T> = HubEventToken<T>

/** @deprecated Use HubCommandToken instead */
export type SignalRServerMethod<T> = HubCommandToken<T>
