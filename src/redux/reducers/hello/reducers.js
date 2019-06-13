import { ACTION_TYPE_HELLO } from './types'

export const hello = (state = "", action) => {
  if (action.type === ACTION_TYPE_HELLO) return action.payload
  return state
}

export const helloSaga = (state = "", action) => {
  if (action.type === "INCREMENT") return action.payload
  return state
}
