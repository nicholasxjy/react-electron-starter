import { FETCHING_ME, FETCHED_ME_OK, FETCHED_ME_FAIL } from '~/actions/auth'

const initState = {
  isLogin: false,
  me: null,
  isFetching: false,
  error: null
}

export function authReducer(state = initState, action) {
  switch (action.type) {
    case FETCHING_ME:
      return Object.assign({}, state, { isFetching: true })
    case FETCHED_ME_OK:
      return Object.assign({}, state, { me: action.payload.me, isFetching: false, isLogin: true })
    case FETCHED_ME_FAIL:
      return Object.assign({}, state, { isFetching: false, error: action.payload.err })
    default:
      return state
  }
}
