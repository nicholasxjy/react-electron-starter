import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import configureStore from '~/store'
import App from '~/App'
import 'normalize.css'
import 'sass/reset.scss'

const store = configureStore()

const Root = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
)

render(Root, document.getElementById('app'))

