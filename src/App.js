import React, { Component } from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Home from './Home'
import Links from './Links'

const App = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/links' componet={Links} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default App