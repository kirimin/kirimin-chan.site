import React, { Component } from 'react'
import OseroGame from './OseroGame'
import './OseroMenu.css'
import menuImage from './assets/menu_image.png'

export default class OseroMenu extends Component {

  render() {
    return (
    <div>
      <div className="menuContainer">
        <h2>はじめる</h2>
        <a className="buttonYowaYowa" onClick={e => {this.props.onClickStart("よわよわ")}}>よわよわ</a>
        <a className="buttonTsuyoTsuyo" onClick={e => {this.props.onClickStart("つよつよver2")}}>つよつよver2</a>
      </div>
      <img className="menuImage" src={menuImage} />

      <a className="buttonBack" href="https://kirimin-chan.site">きりみんちゃん.siteにもどる</a>
    </div>
    )
  }
}