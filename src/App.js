// @flow

import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './screen/Home'
import Links from './screen/Links'
import Games from './screen/games/Games'
import Osero from './screen/games/osero/Osero'

const App = () => (
  <BrowserRouter>
      <Switch>
      <Route exact path='/' component={Home} />
        <Route exact path='/links' component={Links} />
        <Route exact path='/games' component={Games} />
        <Route exact path='/games/osero' component={Osero} />
      </Switch>
  </BrowserRouter>
)

export default App