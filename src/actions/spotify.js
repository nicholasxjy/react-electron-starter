import spotifyService from '~/services/spotify'

export const FETCHING_FEATURED_LISTS = 'FETCHING_FEATURED_LISTS'
export const FETCHING_FEATURED_LISTS_OK = 'FETCHING_FEATURED_LISTS_OK'
export const FETCHING_FEATURED_LISTS_FAIL = 'FETCHING_FEATURED_LISTS_FAIL'

export function fetchFeaturedPlayLists(params) {
  return dispatch => {
    dispatch({ type: FETCHING_FEATURED_LISTS })
    spotifyService.getFeaturedPlayLists(params).then(res => {
      dispatch({
        type: FETCHING_FEATURED_LISTS_OK,
        payload: {
          lists: res.playlists
        }
      })
    }).catch(err => {
      dispatch({
        type: FETCHING_FEATURED_LISTS_FAIL,
        payload: {
          err: err
        }
      })
      console.log(err)
    })
  }
}
