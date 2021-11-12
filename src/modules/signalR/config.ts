export default interface SignalRConfig {
  url: string
  disconnected?: () => void
  automaticReconnect?: boolean
}
