import axios from 'axios'
import { getStorageItem } from '~/utils'

const service = axios.create({
  baseURL: 'https://api.spotify.com/v1',
  timeout: 60000
})

service.interceptors.request.use(config => {
  const access_token = getStorageItem('access_token')
  if (access_token) {
    config.headers['Authorization'] = `Bearer ${access_token}`
  }
  return config
}, err => Promise.reject(err))

service.interceptors.response.use(res => {
  return res.data
}, err => {
  return Promise.reject(err)
})

export default service
