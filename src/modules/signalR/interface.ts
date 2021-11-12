export interface ISignalRConfig {
  url: string
  disconnected?: () => void
  automaticReconnect?: boolean
}
