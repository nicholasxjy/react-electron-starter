import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

import { Provider } from 'react-redux'
import configureStore from '~/store'
import Entry from '~/pages/Entry'
import Home from '~/pages/Home'

import 'normalize.css'
import 'sass/reset.scss'

const store = configureStore()

const Root = (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Entry}></Route>
        <Route path="/home" component={Home}></Route>
      </div>
    </BrowserRouter>
  </Provider>
)

render(Root, document.getElementById('app'))

