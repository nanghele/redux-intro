import { INCREMENT, DECREMENT } from './types'

export function increment() {
  return { type: INCREMENT, amount: 2 }
}

export function decrement() {
  return { type: DECREMENT, amount: 1 }
}
