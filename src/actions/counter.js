import { INCREMENT, DECREMENT } from './types'

export function increment(value) {
  return { type: INCREMENT, amount: value }
}

export function decrement(value) {
  return { type: DECREMENT, amount: value }
}
