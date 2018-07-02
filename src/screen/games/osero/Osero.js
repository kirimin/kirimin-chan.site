import React, { Component } from 'react'
import OseroGame from './OseroGame'
import OseroMenu from './OseroMenu'
import './Osero.css';

export default class Osero extends Component {

  EMPTY_PLACE = 0
  PLAYER_BLACK = 1
  PLAYER_WHITE = 2

  constructor() {
    super()
    this.state = {
      onGame: true,
    }
  }

  render() {
    return (
    <div>
      <div className="header">
        <h1>きりみんちゃんとオセロげーむ！</h1>
      </div>
      {this.state.onGame ? <OseroGame /> : <OseroMenu />}
    </div>
    )
  }
}