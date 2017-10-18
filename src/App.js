import React, { Component } from 'react'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import reducers from './reducers'

import Profile from './screens/Profile'

const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore)
const store = createStoreWithMiddleware(reducers)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Profile />
      </Provider>
    )
  }
}

export default App
