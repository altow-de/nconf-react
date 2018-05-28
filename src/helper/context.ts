import * as React from 'react'

export interface IProviderState<T extends {}> {
  value: Readonly<T>
}

function wrapState<T extends {}>(this: React.Component, state: T) {
  const get = (target: typeof state, key: keyof typeof state) => {
    if (typeof target[key] !== 'function') {
      return target[key]
    }
    return (...args: any[]) => {
      const result = target[key].bind(state)(...args)
      this.setState({ value: wrapState.bind(this)(state) })
      return result
    }
  }
  return new Proxy(state, { get })
}

export const contextFactory = <T extends {}>(initial: T) => {
  const provider = React.createContext<IProviderState<T>>({ value: initial })
  class Provider extends React.Component<{}, IProviderState<T>> {
    public constructor(props: {}, context: any) {
      super(props, context)
      this.state = { value: wrapState.bind(this)(initial) }
    }
    public render() {
      const props = { value: this.state, children: this.props.children }
      return React.createElement(provider.Provider, props)
    }
  }
  return { Provider, Consumer: provider.Consumer }
}
