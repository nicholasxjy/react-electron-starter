import React from 'react'
import { connect } from 'react-redux'
import qs from 'qs'
import { getStorageItem, setStorageItem } from '~/utils'

class Entry extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    const { search } = this.props.location
    const query = qs.parse(search.substr(1))
    if (query.access_token) {
      setStorageItem('access_token', query.access_token)
    }
    const access_token = getStorageItem('access_token')
    if (!access_token) {
      this.props.history.push('/login')
    } else {
      this.props.history.push('/home')
    }
  }
  render() {
    return <span></span>
  }
}

export default Entry



