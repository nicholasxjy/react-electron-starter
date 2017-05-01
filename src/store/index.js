import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from '~/reducers/index'

const isProd = process.env.NODE_ENV === 'prod'

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

export default function configureStore(preloadedState = {}) {
  return createStore(rootReducer, preloadedState, composeEnhancers(applyMiddleware(createLogger(), thunk)))
}
