import spotifyService from '~/services/spotify'

export const FETCHING_ME = 'FETCHING_ME'
export const FETCHED_ME_OK = 'FETCHED_ME_OK'
export const FETCHED_ME_FAIL = 'FETCHED_ME_FAIL'


export function fetchMe() {
  return dispatch => {
    dispatch({
      type: FETCHING_ME
    })
    spotifyService.getMe().then(data => {
      dispatch({
        type: FETCHED_ME_OK,
        payload: { me: data }
      })
    }).catch(err => {
      dispatch({
        type: FETCHED_ME_FAIL,
        payload: { err }
      })
    })
  }
}
