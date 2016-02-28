import React from 'react'

import emptyModel from './model'
import update from './update'
import log from './log'

import { chan, go, take, put } from 'medium'

import Main from './components/main'

/**

  VIEW RENDERING FROM STATE

  This is the render loop.

  It takes an action that was put in the actionsChannel,
  updates the application state accordingly, and rerenders
  the view.

**/

const actionsChannel = chan()

export default React.createClass({
  getInitialState() {
    return emptyModel
  },
  componentDidMount() {
    const self = this

    go(async () => {
      while(true) {
        // take action from channel
        const action = await take(actionsChannel)

        // log it
        log(action)

        // transform state
        const currentState = self.state
        const newState = update(action, currentState)

        // rerenders view
        self.setState(newState)
      }
    })
  },
  dispatch(action) {
    // this is the function that will
    // be passed to all components that
    // perform an action

    put(actionsChannel, action)
  },
  render() {
    return <Main appState={this.state} dispatch={this.dispatch} />
  }
})
