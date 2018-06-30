import React, { Component } from 'react'
import './Osero.css';
import kirimin_chan1 from './assets/kirimin-chan-1.png'
import kirimin_chan2 from './assets/kirimin-chan-2.png'
import kirimin_chan3 from './assets/kirimin-chan-3.png'
import kirimin_chan_thinking from './assets/kirimin-chan-thinking.png'
import black_stone from './assets/kirimi_black.png'
import white_stone from './assets/kirimi_white.png'

export default class Osero extends Component {

  EMPTY_PLACE = 0
  PLAYER_BLACK = 1
  PLAYER_WHITE = 2

  constructor() {
    super()
    this.state = {
      onGame: false,
      inThinking: false,
      finishGame: false,
      player: this.PLAYER_BLACK,
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
      <h2 className="turnText">{`${this._getCurrentPlayerName()}のターン！`}</h2>
      <div className="boardContainer">
        <table className="board">
          {this._initBoard()}
        </table>
        <img className='kiriminChan' src={this.state.inThinking ? kirimin_chan_thinking : kirimin_chan3}/>
      </div>
    </div>
    )
  }

  async componentDidUpdate(prevProps, prevState) {
    // きりみんちゃんのターン
    if (this.state.player === this.PLAYER_WHITE && !this.state.inThinking) {
      for(var i = 0; i < 8; i++){
        for (var j = 0; j < 8; j++) {
          if (this._canPutStone(i, j)) {
            this._onClickPlace(i, j)
            return
          }
        }
      }
      return
    }
    if (!this._canNext() && !this.state.inThinking) {
      alert('ゲーム終了！　黒：' + this._countStones(this.PLAYER_BLACK) + ', 白：' + this._countStones(this.PLAYER_WHITE));
      return
    }
  }

  _initBoard() {
    var trList = [];
  
    for(var i = 0; i < 8; i++){
      const tdList = []
      for (var j = 0; j < 8; j++) {
        tdList.push(<td key={i + ',' + j} onClick={this._onClickPlace.bind(this, j, i)}>{this._getStoneState(j, i)}</td>);
      }
      trList.push(<tr key={'tr' + i}>{tdList}</tr>)
    }
    return trList
  }

  async _onClickPlace(x, y) {
    // 石がおけるか
    if (!this._canPutStone(x, y)) {
      return
    }
    if (this.state.player === this.PLAYER_WHITE) {
      // なやむ
      this.setState({ inThinking: true})
      await this._sleep(1000)
    }
    // 石を置く
    this._putStone(x, y)
    // 石をひっくり返す
    this._reverseStones(x, y)

    // ターン変更
    this.setState({player: this._getOtherPlayer()})
    this.setState({ inThinking: false})
  }

  _putStone(x, y) {
    const temp = this.state.board.slice()
    temp[x][y] = this.state.player
    this.setState({board: temp})
  }

  _getStoneState(x, y) {
    return this.state.board[x][y] === this.EMPTY_PLACE ? <span/> : this.state.board[x][y] === this.PLAYER_BLACK ? <span className="black"/> : <span className="white"/>
  }

  _getOtherPlayer() {
    return this.state.player === this.PLAYER_BLACK ? this.PLAYER_WHITE : this.PLAYER_BLACK
  }

  _getCurrentPlayerName() {
    return this.state.player === this.PLAYER_BLACK ? '黒' : '白'
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
    if (this._getCanChangePlaceList(x, y).length === 0) {
      return false
    }
    return true
  }

  _reverseStones(x, y) {
    this._getCanChangePlaceList(x, y).map(it => {
      this._putStone(it.x, it.y)
    })
  }

  _getCanChangePlaceList(x, y) {
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

  _sleep(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, time);
    });
  }
}