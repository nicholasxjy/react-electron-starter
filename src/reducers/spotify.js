import {
  FETCHING_FEATURED_LISTS,
  FETCHING_FEATURED_LISTS_OK,
  FETCHING_FEATURED_LISTS_FAIL
} from '~/actions/spotify'

const initState = {
  lists: null,
  isFetching: false,
  error: null
}

export function spotifyReducer(state = initState, action) {
  switch (action.type) {
    case FETCHING_FEATURED_LISTS:
      return Object.assign({}, state, { isFetching: true })
    case FETCHING_FEATURED_LISTS_OK:
      return Object.assign({}, state, { lists: action.payload.lists, isFetching: false })
    case FETCHING_FEATURED_LISTS_FAIL:
      return Object.assign({}, state, { isFetching: false, error: action.payload.err })
    default:
      return state
  }
}
