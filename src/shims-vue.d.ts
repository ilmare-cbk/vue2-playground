declare module '*.vue' {
  import Vue from 'vue'
  import { ComponentOptions } from 'vue'
  const component: ComponentOptions<Vue>
  export default component
}
