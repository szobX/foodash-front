export type ISignalRConfig = {
  url: string
  disconnected?: () => void
  automaticReconnect?: boolean
  logger?: boolean
  provider: string
  withUrlOptions: object
}
