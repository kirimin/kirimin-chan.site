// @flow

import './global.css';
import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './screen/Home'
import Profile from './screen/Profile'
import Videos from './screen/Videos'
import Social from './screen/Social'
import Products from './screen/Products'
import Gallery from './screen/Gallery'
import Games from './screen/games/Games'
import Osero from './screen/games/osero/Osero'
import Services from './screen/services/Services'

const App = () => (
  <BrowserRouter>
      <Switch>
      <Route exact path='/' component={Home} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/videos' component={Videos} />
        <Route exact path='/social' component={Social} />
        <Route exact path='/products' component={Products} />
        <Route exact path='/gallery' component={Gallery} />
        <Route exact path='/games' component={Games} />
        <Route exact path='/games/osero' component={Osero} />
        <Route exact path='/services' component={Services} />
      </Switch>
  </BrowserRouter>
)

export default App