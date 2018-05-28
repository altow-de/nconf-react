import 'chai/register-should'
import { shallow } from 'enzyme'
import * as React from 'react'
import TodoItem from './TodoItem'

it('props are working', () => {
  const toggle = () => null
  const todoItem = shallow(<TodoItem topic="jo" done={true} toggle={toggle} />)
  todoItem.html().should.contain('jo')
  todoItem.html().should.contain('checked')
  todoItem.setProps({ done: false })
  todoItem.html().should.not.contain('checked')
})

it('toggle event works', () => {
  let result = false
  const toggle = () => (result = true)
  const todoItem = shallow(<TodoItem topic="jo" done={true} toggle={toggle} />)
  todoItem.find('input').simulate('change')
  // tslint:disable-next-line:no-unused-expression
  result.should.be.true
})
