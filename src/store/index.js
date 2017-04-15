import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from '~/reducers/index'
const isProd = process.env.NODE_ENV === 'prod'
// const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()


export default function configureStore(preloadedState = {}) {
  return createStore(rootReducer, preloadedState, compose(applyMiddleware(createLogger(), thunk)))
}
