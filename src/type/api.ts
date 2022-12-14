import { any, number } from "vue-types"

export interface ApiType {
  method: 'get' | 'post' | 'put' | 'delete'
  url: string
  auth?: 'sign' | 'accessToken'
  takeAppid?: boolean
  desc?: string
}
