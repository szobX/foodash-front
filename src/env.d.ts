/// <reference types="vite/client" />
/// <reference types="vite-svg-loader" />
/// <reference types="vite-plugin-pages/client" />

interface ImportMetaEnv {
  VITE_APP_TITLE: string
  VITE_BACKEND_URL_API: string
  VITE_AUTH_PREFIX_APP: string
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
declare interface Window {}
interface ImportMeta {
  readonly env: ImportMetaEnv
}
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
