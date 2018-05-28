import { contextFactory, IProviderState } from '../helper/context'
import TodoState from './todos'

const initial = new TodoState()

export const { Provider, Consumer } = contextFactory(initial)
export type ITodoProviderState = IProviderState<TodoState>
