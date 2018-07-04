import React, { Component } from 'react'
import OseroGame from './OseroGame'
import OseroMenu from './OseroMenu'
import './Osero.css';

export default class Osero extends Component {

  constructor() {
    super()
    this.state = {
      onGame: false,
      level: "",
    }
    this.onClickStart = this.onClickStart.bind(this)
    this.onClickBack = this.onClickBack.bind(this)
  }

  render() {
    const menu = (
      <OseroMenu
        onClickStart={this.onClickStart} />)
    const game = (
      <OseroGame
        onClickBack={this.onClickBack}
        level={this.state.level} />
    )
    return (
    <div>
      <div className="header">
        <h1>きりみんちゃんとオセロげーむ！</h1>
      </div>
      {this.state.onGame ? game : menu }
    </div>
    )
  }

  onClickStart(level) {
    this.setState({ onGame: true, level : level })
  }

  onClickBack() {
    this.setState({ onGame: false })
  }
}