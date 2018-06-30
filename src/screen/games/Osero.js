import React, { Component } from 'react'
import './Osero.css';

export default class Osero extends Component {

  constructor() {
    super()
    this.state = {
      onGame: false,
      finishGame: false,
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

  componentDidUpdate(prevProps, prevState) {
    if (this.state.finishGame) {
      alert('ゲーム終了！　黒：' + this._countStones(1) + ', 白：' + this._countStones(2));
      return
    }
    if (!this._canNext()) {
      this.setState({finishGame: true})
    }
  }

  _initBoard() {
    var trList = [];
  
    for(var i = 0; i < 8; i++){
      const tdList = []
      for (var j = 0; j < 8; j++) {
        tdList.push(<td key={i + ',' + j} onClick={this._onClickSquare.bind(this, j, i)}>{this._getStoneState(j, i)}</td>);
      }
      trList.push(<tr key={'tr' + i}>{tdList}</tr>)
    }
    return trList
  }

  _onClickSquare(x, y) {
    // 石がおけるか
    if (!this._canPutStone(x, y)) {
      return
    }
    // 石を置く
    this._putStone(x, y)
    // 石をひっくり返す
    this._reverseStones(x, y)

    // ターン変更
    this.setState({player: this._getOtherPlayer()})
  }

  _putStone(x, y) {
    const temp = this.state.board.slice()
    temp[x][y] = this.state.player
    this.setState({board: temp})
  }

  _getStoneState(x, y) {
    return this.state.board[x][y] === 0 ? '　' : this.state.board[x][y] === 1 ? '●' + x + y : '◯' + x + y
  }

  _getOtherPlayer() {
    return this.state.player === 1 ? 2 : 1
  }

  _getCurrentPlayerName() {
    return this.state.player === 1 ? '黒' : '白'
  }

  _canNext() {
    for(var i = 0; i < 8; i++){
      for (var j = 0; j < 8; j++) {
        if (this._canPutStone(i, j)) {
          return true
        }
      }
    }
    return false
  }

  _countStones(player) {
    let count = 0
    for(var i = 0; i < 8; i++){
      for (var j = 0; j < 8; j++) {
        if (this.state.board[i][j] === player) {
          count++
        }
      }
    }
    return count
  }

  _canPutStone(x, y) {
    if (this.state.board[x][y] !== 0) {
      return false
    }
    if (this._getCanChangeSquareList(x, y).length === 0) {
      return false
    }
    return true
  }

  _reverseStones(x, y) {
    this._getCanChangeSquareList(x, y).map(it => {
      this._putStone(it.x, it.y)
    })
  }

  _getCanChangeSquareList(x, y) {
    return this._searchChangePlacesRight(x, y, this.state.player)
    .concat(this._searchChangePlacesLeft(x, y, this.state.player))
    .concat(this._searchChangePlacesBottom(x, y, this.state.player))
    .concat(this._searchChangePlacesTop(x, y, this.state.player))
  }

  _searchChangePlacesRight(x, y, color) {
    const changePlaceList = [];

    for (var i = x + 1; i < 8; i++) {
      const tempColor = this.state.board[i][y]
      if (tempColor === 0) {
        return [];
      }
      if (tempColor === color) {
        return changePlaceList;
      }
      changePlaceList.push({x: i, y: y})
    };
    return [];
  }

  _searchChangePlacesLeft(x, y, color) {
    const changePlaceList = [];

    for (var i = x - 1; i >= 0; i--) {
      const tempColor = this.state.board[i][y]
      if (tempColor === 0) {
        return [];
      }
      if (tempColor === color) {
        return changePlaceList;
      }
      changePlaceList.push({x: i, y: y})
    };
    return [];
  }

  _searchChangePlacesBottom(x, y, color) {
    const changePlaceList = [];

    for (var i = y + 1; i < 8; i++) {
      const tempColor = this.state.board[x][i]
      if (tempColor === 0) {
        return [];
      }
      if (tempColor === color) {
        return changePlaceList;
      }
      changePlaceList.push({x: x, y: i})
    };
    return [];
  }

  _searchChangePlacesTop(x, y, color) {
    const changePlaceList = [];

    for (var i = y - 1; i >= 0; i--) {
      const tempColor = this.state.board[x][i]
      if (tempColor === 0) {
        return [];
      }
      if (tempColor === color) {
        return changePlaceList;
      }
      changePlaceList.push({x: x, y: i})
    };
    return [];
  }
}