import config from '~/config'

const SPOTIFY_BASE = 'https://accounts.spotify.com/authorize'

export function getSpotifyAuthUrl(state = 'chef-salad') {
  const query = `client_id=${config.client_id}&response_type=code&redirect_uri=${encodeURIComponent(config.redirect_uri)}&scope=${encodeURIComponent('user-read-private user-read-email')}&state=${state}`
  return `${SPOTIFY_BASE}/?${query}`
}

export function getStorageItem(key) {
  return localStorage.getItem(key)
}

export function setStorageItem(key, val) {
  localStorage.setItem(key, val)
}

export function removeStorageItem(key) {
  localStorage.removeItem(key)
}
