import { SignalRService } from './service.ts'
import { InjectionKey } from 'vue'

export const SignalRSymbol: InjectionKey<SignalRService> =
  Symbol('SignalRService')
