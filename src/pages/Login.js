import React from 'react'
import { getSpotifyAuthUrl } from '~/utils'
import './login.scss'
class Login extends React.Component {
  constructor(props) {
    super(props)
    this.goAuth = this.goAuth.bind(this)
  }
  goAuth() {
    location.href = getSpotifyAuthUrl()
  }
  render() {
    return (
      <div className="sf-container">
        <div className="sf-logo">
          <img src={require('~/assets/images/logo.svg')} alt="logo"/>
        </div>
        <div className="sf-login">
          <h1 className="sf-title">Music for everyone</h1>
          <div className="sf-subtitle">Every music tells us a story</div>
          <button className="sf-login-link" onClick={this.goAuth}>Login with Spotify</button>
        </div>
      </div>
    )
  }
}

export default Login
