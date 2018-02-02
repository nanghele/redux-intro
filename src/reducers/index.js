import { INCREMENT, DECREMENT } from '../actions/types'

export default function(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + action.amount
    case DECREMENT:
      return state - action.amount
    default:
      return state
  }
}

export default counter
