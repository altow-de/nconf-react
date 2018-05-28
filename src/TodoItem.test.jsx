import 'chai/register-should'
import { shallow } from 'enzyme'
import * as React from 'react'
import TodoItem from './TodoItem'

it('renders without crashing', () => {
  const todoItem = shallow(<TodoItem topic="jo" />)
  todoItem.html().should.not.contain('checked')
  todoItem.find('input').simulate('change')
  todoItem.html().should.contain('jo')
})
