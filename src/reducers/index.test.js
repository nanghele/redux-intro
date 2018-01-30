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
  expect(reduce(1, { type: INCREMENT })).toEqual(2)
  expect(reduce(5, { type: DECREMENT })).toEqual(4)
})

it('add element testing', () => {
  const state = {
    1: { name: 'antonio', gender: 'male', time: 249 },
    2: { name: 'paolo', gender: 'male', time: 390 }
  }

  const roberta = { name: 'roberta', gender: 'female', time: 460 }

  const newstate = {
    1: { name: 'antonio', gender: 'male', time: 249 },
    2: { name: 'paolo', gender: 'male', time: 390 },
    3: { name: 'roberta', gender: 'female', time: 460 }
  }

  expect(add(state, { type: ADD, payload: roberta })).toEqual(newstate)
})
