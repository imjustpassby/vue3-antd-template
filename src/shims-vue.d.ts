declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'nprogress' {
  const NProgress: any
  export default NProgress
}

declare module 'query-string' {
  const qs: any
  export default qs
}