import { INCREMENT, DECREMENT } from '../actions/types'

import reduce from './index'

const ADD = 'add'
const add = (state, action) => {
  switch (action.type) {
    case ADD:
      const id = Object.keys(state).reduce(
        (maxId, id) => Math.max(maxId, id) + 1,
        -1
      )
      const newState = { ...state }
      newState[id] = action.payload
      return newState
    default:
      return state
  }
  return state
}

it('sums numbers', () => {
  expect(reduce(1, { type: INCREMENT, amount: 1 })).toEqual(2)
  expect(reduce(5, { type: DECREMENT, amount: 1 })).toEqual(4)
})
