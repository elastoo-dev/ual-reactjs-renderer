import React from 'react'

export const UALContext = React.createContext()
/**
 * @type {function}
 * @name withUAL
 * @desc Function for making a component a consumer of the UAL context
 */
export const withUAL = WrappedComponent => props => {
  const displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component'
  const WithUAL = props => (
    <UALContext.Consumer>
      {context => <WrappedComponent {...props} ual={context} />}
    </UALContext.Consumer>
  )
  WithUAL.displayName = `withUAL(${displayName})`
  return <WithUAL/>
}
