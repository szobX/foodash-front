import {
  HubConnection,
  HubConnectionBuilder,
  LogLevel,
} from '@microsoft/signalr'
import { ISignalRConfig } from './interface'
import { HubEventToken, HubCommandToken } from './tokens'

type Action = () => void

export class SignalRService {
  private connection: HubConnection
  private connected = false

  private invokeQueue: Action[] = []
  private successQueue: Action[] = []

  constructor(
    private options: ISignalRConfig,
    connectionBuilder: HubConnectionBuilder
  ) {
    connectionBuilder.withUrl(this.buildUrl(options), options.withUrlOptions)
    if (options.automaticReconnect) connectionBuilder.withAutomaticReconnect()
    if (options.logger) connectionBuilder.configureLogging(LogLevel.Information)
    this.connection = connectionBuilder.build()
    this.connection.onclose(() => this.fail())
  }
  buildUrl(options: ISignalRConfig) {
    return `${options.url}ws/${options.provider}`
  }
  init() {
    this.connection
      .start()
      .then(() => {
        this.connected = true
        while (this.invokeQueue.length) {
          const action = this.invokeQueue.shift() as Action
          action.call(this)
        }

        while (this.successQueue.length) {
          const action = this.successQueue.shift() as Action
          action.call(null)
        }
      })
      .catch(() => {
        this.fail()
      })
  }

  connectionSuccess(callback: () => void) {
    if (this.connected) {
      callback()
    } else {
      this.successQueue.push(callback)
    }
  }

  invoke<T>(target: HubCommandToken<T>, message: T) {
    return new Promise((res, rej) => {
      if (this.connected) {
        this.connection
          .invoke(target as string, message)
          .then(res)
          .catch(rej)
      } else {
        this.invokeQueue.push(() =>
          this.connection
            .invoke(target as string, message)
            .then(res)
            .catch(rej)
        )
      }
    })
  }

  send<T>(target: HubCommandToken<T>, message: T) {
    if (this.connected) {
      this.connection.send(target as string, message)
    } else {
      this.invokeQueue.push(() =>
        this.connection.send(target as string, message)
      )
    }
  }

  on<T>(target: HubEventToken<T>, callback: (arg: T) => void) {
    this.connection.on(target as string, callback)
  }

  off<T>(target: HubEventToken<T>, callback?: (arg: T) => void) {
    if (callback) {
      this.connection.off(target as string, callback)
    } else {
      this.connection.off(target as string)
    }
  }

  private fail() {
    this.options.disconnected?.call(null)
  }
}
