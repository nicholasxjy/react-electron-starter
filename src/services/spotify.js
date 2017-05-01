import service from './service'

export default {
  getMe() {
    return service.get('/me')
  },
  getFeaturedPlayLists(params) {
    return service.get('/browse/featured-playlists', { params })
  }
}
