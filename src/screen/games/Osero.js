import React, { Component } from 'react'
import './Osero.css';

export default class Osero extends Component {

  constructor() {
    super()
    this.state = {
      player: 1,
      board : [[0, 0, 0, 0, 0, 0, 0, 0], 
              [0, 0, 0, 0, 0, 0, 0, 0], 
              [0, 0, 0, 0, 0, 0, 0, 0], 
              [0, 0, 0, 1, 2, 0, 0, 0], 
              [0, 0, 0, 2, 1, 0, 0, 0], 
              [0, 0, 0, 0, 0, 0, 0, 0], 
              [0, 0, 0, 0, 0, 0, 0, 0], 
              [0, 0, 0, 0, 0, 0, 0, 0]],
    }
  }

  render() {
    return (
    <div className="container">
      <h1>きりみんちゃんとオセロげーむ！</h1>
      <h2>{`${this._getCurrentPlayerName()}のターン！`}</h2>
      <table className="board">
        {this._initBoard()}
      </table>
    </div>
    )
  }

  _onClickSquare(i, j) {
    // 石がおけるか
    if (!this._canPutStone(i, j)) {
      return
    }
    // 石を置く
    this._putStone(i, j)
    // 石をひっくり返す
    this._reverseStones(i, j)
    // ターン変更
    this.setState({player: this._getOtherPlayer()})
  }

  _putStone(i, j) {
    const temp = this.state.board.slice()
    temp[i][j] = this.state.player
    this.setState({board: temp})
  }

  _getStoneState(i, j) {
    return this.state.board[i][j] === 0 ? '　' : this.state.board[i][j] === 1 ? '●' : '◯'
  }

  _getOtherPlayer() {
    return this.state.player === 1 ? 2 : 1
  }

  _getCurrentPlayerName() {
    return this.state.player === 1 ? '黒' : '白'
  }

  _canPutStone(i, j) {
    if (this.state.board[i][j] !== 0) {
      return false
    }
    // TODO
    return true
  }


  _reverseStones(i, j) {
    // TODO
    this._getCanChangeSquareList(i, j).map(it => this._putStone(it.i, it.j))
  }

  _getCanChangeSquareList(i, j) {
    // TODO
    return [{i: i - 1, j: j}]
  }

  _initBoard() {
    var trList = [];
  
    for(var i = 0; i < 8; i++){
      const tdList = []
      for (var j = 0; j < 8; j++) {
        tdList.push(<td key={i + ',' + j} onClick={this._onClickSquare.bind(this, i, j)}>{this._getStoneState(i, j)}</td>);
      }
      trList.push(<tr key={'tr' + i}>{tdList}</tr>)
    }
    return trList
  }
}