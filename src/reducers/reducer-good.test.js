import { INCREMENT, DECREMENT } from '../actions/types'

const ADD = 'adding'
const DEL = 'delete'
const UPDATE = 'update'
const reduce = (state, action) => {
  switch (action.type) {
    case ADD:
      let id = state.reduce((maxId, row) => Math.max(maxId, row.id), -1) + 1
      let newRow = { id, ...action.payload }
      return [...state, newRow]
    case DEL:
      return state.filter(row => row.id != action.payload)
    case UPDATE:
      return [
        ...state.filter(row => row.id != action.payload.id),
        action.payload
      ]
    default:
      return state
  }
  return state
}

it('adding one element', () => {
  const state = [
    { id: 1, name: 'antonio', gender: 'male', time: 249 },
    { id: 2, name: 'paolo', gender: 'male', time: 390 }
  ]

  const roberta = { name: 'roberta', gender: 'female', time: 460 }

  const newstate = [
    { id: 1, name: 'antonio', gender: 'male', time: 249 },
    { id: 2, name: 'paolo', gender: 'male', time: 390 },
    { id: 3, name: 'roberta', gender: 'female', time: 460 }
  ]

  expect(reduce(state, { type: ADD, payload: roberta })).toEqual(newstate)
})

it('removing one element', () => {
  const state = [
    { id: 1, name: 'antonio', gender: 'male', time: 249 },
    { id: 2, name: 'paolo', gender: 'male', time: 390 },
    { id: 3, name: 'roberta', gender: 'female', time: 460 }
  ]

  const newstate = [
    { id: 1, name: 'antonio', gender: 'male', time: 249 },
    { id: 3, name: 'roberta', gender: 'female', time: 460 }
  ]

  expect(reduce(state, { type: DEL, payload: 2 })).toEqual(newstate)
})

it('updating one element', () => {
  const state = [
    { id: 1, name: 'antonio', gender: 'male', time: 249 },
    { id: 2, name: 'paolo', gender: 'male', time: 390 },
    { id: 3, name: 'roberta', gender: 'female', time: 460 }
  ]

  const newstate = [
    { id: 1, name: 'antonio', gender: 'male', time: 249 },
    { id: 2, name: 'paolo', gender: 'male', time: 390 },
    { id: 3, name: 'roberta', gender: 'female', time: 524 }
  ]

  expect(
    reduce(state, {
      type: UPDATE,
      payload: { id: 3, name: 'roberta', gender: 'female', time: 524 }
    })
  ).toEqual(newstate)
})
