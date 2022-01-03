/* eslint-disable @typescript-eslint/ban-ts-comment */
export { VueSignalR, useSignalR } from './plugin'
export { SignalRService } from './service'
// export  SignalRConfig  from '@/modules/signalR/config.ts';
export { SignalRSymbol } from './symbols'
//@ts-ignore
// /** @deprecated Use HubEventToken instead */
// export type SignalRClientMethod<T> = HubEventToken<T>

// /** @deprecated Use HubCommandToken instead */
// export type SignalRServerMethod<T> = HubCommandToken<T>

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SignalRClientMethod<T> extends String {}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SignalRServerMethod<T> extends String {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface HubCommandToken<T> extends String {}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface HubEventToken<T> extends String {}
