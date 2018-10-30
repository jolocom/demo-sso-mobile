import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { RootState, rootReducer } from 'src/reducers'
const { createReactNavigationReduxMiddleware } = require('react-navigation-redux-helpers')

createReactNavigationReduxMiddleware('root', (state : RootState) => state.navigation)

export const store = createStore(
  rootReducer,
  {},
  applyMiddleware(thunk)
)
