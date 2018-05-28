import 'chai/register-should'
import { shallow } from 'enzyme'
import * as React from 'react'
import TodoInput from './TodoInput'

it('prop changes work', () => {
  const handle = (a: string) => null
  const input = shallow(
    <TodoInput add={handle} onChange={handle} value="default" />
  )
  input.html().should.contain('default')
  input.setProps({ value: 'changed' })
  input.html().should.contain('changed')
})

it('input handler fires on enter', () => {
  let result = 'not hey'
  const value = 'hey'
  const handle = (a: string) => (result = a)
  const todoInput = shallow(
    <TodoInput add={handle} onChange={handle} value="defautl" />
  )
  const syntheticKeyEvent = { currentTarget: { value }, key: 'Enter' }
  todoInput.simulate('keyPress', syntheticKeyEvent)
  todoInput.html().should.contain('input')
  result.should.be.equal(value)
})
