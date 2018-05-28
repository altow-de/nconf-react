import 'chai/register-should'
import { shallow } from 'enzyme'
import * as React from 'react'
import TodoInput from './TodoInput'

it('renders without crashing', () => {
  let result = 'not hey'
  const value = 'hey'
  const handle = a => (result = a)
  const todoInput = shallow(<TodoInput add={handle} />)
  const syntheticKeyEvent = { currentTarget: { value }, key: 'Enter' }
  todoInput.simulate('keyPress', syntheticKeyEvent)
  todoInput.html().should.contain('input')
  result.should.be.equal(value)
})
