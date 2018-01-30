import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { App } from './App'

Enzyme.configure({ adapter: new Adapter() })

function setup() {
  const props = {
    increment: jest.fn(),
    decrement: jest.fn(),
    counter: 0
  }

  const enzymeWrapper = mount(<App {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('components', () => {
  describe('App', () => {
    it('should render counter', () => {
      const { enzymeWrapper } = setup()
      expect(enzymeWrapper.find('h3').text()).toBe('0')
    }),
      it('should render counter', () => {
        const { enzymeWrapper, props } = setup()
        const button = enzymeWrapper.find('#up')
        button.props().onClick()
        expect(props.increment.mock.calls.length).toBe(1)
        button.props().onClick()
        expect(props.increment.mock.calls.length).toBe(2)
      })
  })
})
