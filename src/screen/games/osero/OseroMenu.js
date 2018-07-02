import React, { Component } from 'react'
import OseroGame from './OseroGame'
import './Osero.css';

export default class OseroMenu extends Component {

  EMPTY_PLACE = 0
  PLAYER_BLACK = 1
  PLAYER_WHITE = 2

  constructor() {
    super()
    this.state = {
      onGame: false,
    }
  }

  render() {
    return (
    <div>
      <div className="menuContainer">
        <h2>レベル</h2>
        <p className="buttonYowaYowa">よわよわ</p>
        <p className="buttonTsuyoTsuyo">つよつよ</p>
      </div>
    </div>
    )
  }
}