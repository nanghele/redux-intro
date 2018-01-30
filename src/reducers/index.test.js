import { INCREMENT, DECREMENT } from '../actions/types'

import reduce from './index'

it('sums numbers', () => {
  expect(reduce(1, { type: INCREMENT })).toEqual(2)
  expect(reduce(5, { type: DECREMENT })).toEqual(4)
})
