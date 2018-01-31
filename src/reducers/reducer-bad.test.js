import { INCREMENT, DECREMENT } from '../actions/types'

const ADD = 'adding'
const DEL = 'delete'
const UPDATE = 'update'
const reduce = (state, action) => {
  let newState = { ...state }
  switch (action.type) {
    case ADD:
      const id = Object.keys(state).reduce(
        (maxId, id) => Math.max(maxId, id) + 1,
        -1
      )
      newState[id] = action.payload
      return newState
    case DEL:
      delete newState[action.payload]
      return newState
    case UPDATE:
      newState[action.id] = action.payload
      return newState
    default:
      return state
  }
  return state
}

it('adding one element', () => {
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

  expect(reduce(state, { type: ADD, payload: roberta })).toEqual(newstate)
})

it('removing one element', () => {
  const state = {
    1: { name: 'antonio', gender: 'male', time: 249 },
    2: { name: 'paolo', gender: 'male', time: 390 },
    3: { name: 'roberta', gender: 'female', time: 460 }
  }

  const newstate = {
    1: { name: 'antonio', gender: 'male', time: 249 },
    3: { name: 'roberta', gender: 'female', time: 460 }
  }

  expect(reduce(state, { type: DEL, payload: 2 })).toEqual(newstate)
})

it('updating one element', () => {
  const state = {
    1: { name: 'antonio', gender: 'male', time: 249 },
    2: { name: 'paolo', gender: 'male', time: 390 },
    3: { name: 'roberta', gender: 'female', time: 460 }
  }

  const newstate = {
    1: { name: 'antonio', gender: 'male', time: 249 },
    2: { name: 'paolo', gender: 'male', time: 390 },
    3: { name: 'roberta', gender: 'female', time: 526 }
  }

  expect(
    reduce(state, {
      type: UPDATE,
      payload: { name: 'roberta', gender: 'female', time: 526 },
      id: 3
    })
  ).toEqual(newstate)
})
