import React from 'react'
import { Route, withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Entry from '~/pages/Entry'
import Home from '~/pages/Home'
import Login from '~/pages/Login'

class App extends React.Component {
  render() {
    return (
      <div>
        <Route extact path="/" component={Entry}></Route>
        <Route path="/home" component={Home}></Route>
        <Route path="/login" component={Login}></Route>
      </div>
    )
  }
}

export default withRouter(connect()(App))
