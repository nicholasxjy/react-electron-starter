import { combineReducers } from 'redux'
import { authReducer } from './auth'
import { spotifyReducer } from './spotify'

export default combineReducers({
  authReducer,
  spotifyReducer
})
