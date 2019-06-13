import { ACTION_TYPE_HELLO } from './types'

export const actionHello = () => {
  return {
    type: ACTION_TYPE_HELLO,
    payload: "Hello Redux !!!"
  }
}