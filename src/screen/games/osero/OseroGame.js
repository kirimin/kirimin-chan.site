import React, { Component } from 'react'
import Modal from 'react-modal'
import './OseroGame.css';
import kirimin_chan_normal from './assets/kirimin-chan-normal.png'
import kirimin_chan_down from './assets/kirimin-chan-down.png'
import kirimin_chan_smile from './assets/kirimin-chan-smile.png'
import kirimin_chan_lose from './assets/kirimin-chan-lose.png'
import kirimin_chan_thinking from './assets/kirimin-chan-thinking.png'
import put_se from './assets/put.mp3'

export default class OseroGame extends Component {

  YOWAYOWA = "よわよわ"
  TSUYOTSUYO = "つよつよ"

  EMPTY_PLACE = 0
  PLAYER_BLACK = 1
  PLAYER_WHITE = 2

  constructor() {
    super()
    this.state = {
      modalIsOpen: false,
      inThinking: false,
      isGameFinish: false,
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
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  render() {
    const level = this.props.level
    const blackCount = this._countStones(this.PLAYER_BLACK)
    const whiteCount = this._countStones(this.PLAYER_WHITE)
    const score = whiteCount - blackCount
    let kirimin_chan
    if (score > 0) {
      kirimin_chan = kirimin_chan_smile
    } else if (score > -4) {
      kirimin_chan = kirimin_chan_normal
    } else if (score > - 8){
      kirimin_chan = kirimin_chan_down
    } else {
      kirimin_chan = kirimin_chan_lose
    }
    const endText = score < 0 ? `${blackCount}:${whiteCount}であなたの勝ちだよ！おめでとう！！！` : 
      `${blackCount}:${whiteCount}できりみんちゃんの勝ちだよ！また挑戦してね！`
      const shareText = score < 0 ? `${blackCount}:${whiteCount}で${level}きりみんちゃんに勝ちました！！！` : 
      `${blackCount}:${whiteCount}で${level}きりみんちゃんに負けました...`
    return (
    <div className="container">
      <h2 className="turnText">{`${this._getCurrentPlayerName()}のターン！`}</h2>
      <div className="boardContainer">
        <table className="board">
          {this._initBoard()}
        </table>
        <img className='kiriminChan' src={this.state.inThinking ? kirimin_chan_thinking : kirimin_chan}/>
      </div>
      <div className="backButton" >
        <a onClick={this.props.onClickBack}>タイトルにもどる</a>
      </div>
      <Modal
        className="Modal"
        overlayClassName="Overlay"
        isOpen={this.state.modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
      >
        <h2>ゲーム終了！</h2>
        <div>{endText}</div>
        <p><a href={'https://twitter.com/intent/tweet?text=' + shareText + ' &url=https://kirimin-chan.site/games/osero&hashtags=きりみんちゃんねる'} target="_blank">ついーとする！</a></p>
        <p onClick={this.closeModal}>とじる</p>
      </Modal>
    </div>
    )
  }

  async componentDidUpdate(prevProps, prevState) {
    if (!this._canNext(this.state.player) && !this.state.inThinking && !this.state.isGameFinish) {
      if (!this._canNext(this._getOtherPlayer()) && !this.state.inThinking) {
        await this._sleep(100)
        this.openModal()
        // alert('ゲーム終了！　黒：' + this._countStones(this.PLAYER_BLACK) + ', 白：' + this._countStones(this.PLAYER_WHITE));
        this.setState( {isGameFinish : true })
        return
      }
      await this._sleep(100)
      alert(this._getCurrentPlayerName() + 'は打てる手がないのでパスします。')
      this.setState({ player: this._getOtherPlayer() })
      return
    }
    // きりみんちゃんのターン
    if (this.state.player === this.PLAYER_WHITE && !this.state.inThinking) {
      if (this.state.level === this.TSUYOTSUYO) {
        this._tsuyotsuyoAI()
      } else {
        this._yowayowaAI()
      }
    }
  }

  _yowayowaAI() {
    let max = {
      score: 0,
      place : { x: 0, y: 0 }
    }
    for(let i = 0; i < 8; i++){
      for (let j = 0; j < 8; j++) {
        if (this._canPutStone(i, j, this.state.player)) {
          const score = this._getCanChangePlaceList(i, j, this.state.player).length
          if (score >= max.score) {
            max = {
              score: score,
              place: { x: i, y: j }
            }
          }
        }
      }
    }
    this._onClickPlace(max.place.x, max.place.y)
  }

  _tsuyotsuyoAI() {
    const scoreMap = [
      [30, -12, 0, -1, -1, 0, -12, 30],
      [-12, -15, -3, -3, -3, -3, -15, -12],
      [0, -3, 0, -1, -1, 0, -3, 0],
      [-1, -3, -1, -1, -1, -1, -3, -1],
      [-1, -3, -1, -1, -1, -1, -3, -1],
      [0, -3, 0, -1, -1, 0, -3, 0],
      [-12, -15, -3, -3, -3, -3, -15, -12],
      [120, -20, 20, 5, 5, 20, -20, 120]
    ];
    let max = {
      score: -100,
      place : { x: 0, y: 0 }
    }
    for(var i = 0; i < 8; i++){
      for (var j = 0; j < 8; j++) {
        if (this._canPutStone(i, j, this.state.player)) {
          const score = scoreMap[i][j]
          if (score >= max.score) {
            max = {
              score: score,
              place: { x: i, y: j }
            }
          }
        }
      }
    }
    this._onClickPlace(max.place.x, max.place.y)
  }

  openModal() {
    this.setState({modalIsOpen: true})
  }

  closeModal() {
    this.setState({modalIsOpen: false})
  }

  async _onClickPlace(x, y) {
    // 石がおけるか
    if (!this._canPutStone(x, y, this.state.player)) {
      return
    }
    if (this.state.player === this.PLAYER_WHITE) {
      // なやむ
      this.setState({ inThinking: true})
      await this._sleep(1000)
    }
    // 石を置く
    const audio = new Audio()
    audio.src = put_se
    audio.play()
    this._putStone(x, y)
    // 石をひっくり返す
    this._reverseStones(x, y)

    // ターン変更
    this.setState({player: this._getOtherPlayer()})
    this.setState({ inThinking: false })
  }

  _initBoard() {
    var trList = [];
  
    for(var i = 0; i < 8; i++){
      const tdList = []
      for (var j = 0; j < 8; j++) {
        tdList.push(<td key={i + ',' + j} onClick={this.state.inThinking ? null : this._onClickPlace.bind(this, j, i)}>{this._getStoneState(j, i)}</td>);
      }
      trList.push(<tr key={'tr' + i}>{tdList}</tr>)
    }
    return trList
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
    return this.state.player === this.PLAYER_BLACK ? 'あなた(黒)' : 'きりみんちゃん(白)'
  }

  _canNext(player) {
    for(var i = 0; i < 8; i++){
      for (var j = 0; j < 8; j++) {
        if (this._canPutStone(i, j, player)) {
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

  _canPutStone(x, y, player) {
    if (this.state.board[x][y] !== 0) {
      return false
    }
    if (this._getCanChangePlaceList(x, y, player).length === 0) {
      return false
    }
    return true
  }

  _reverseStones(x, y) {
    this._getCanChangePlaceList(x, y, this.state.player).map(it => {
      this._putStone(it.x, it.y)
    })
  }

  _getCanChangePlaceList(x, y, player) {
    return this._searchChangePlacesRight(x, y, player)
    .concat(this._searchChangePlacesLeft(x, y, player))
    .concat(this._searchChangePlacesBottom(x, y, player))
    .concat(this._searchChangePlacesTop(x, y, player))
    .concat(this._searchChangePlacesRightBottom(x, y,player))
    .concat(this._searchChangePlacesLeftTop(x, y, player))
    .concat(this._searchChangePlacesRightTop(x, y, player))
    .concat(this._searchChangePlacesLeftBottom(x, y, player))
  }

  _searchChangePlacesRight(x, y, color) {
    const changePlaceList = []

    for (var i = x + 1; i < 8; i++) {
      const tempColor = this.state.board[i][y]
      if (tempColor === 0) {
        return []
      }
      if (tempColor === color) {
        return changePlaceList
      }
      changePlaceList.push({x: i, y: y})
    };
    return []
  }

  _searchChangePlacesLeft(x, y, color) {
    const changePlaceList = []

    for (var i = x - 1; i >= 0; i--) {
      const tempColor = this.state.board[i][y]
      if (tempColor === 0) {
        return []
      }
      if (tempColor === color) {
        return changePlaceList;
      }
      changePlaceList.push({x: i, y: y})
    };
    return []
  }

  _searchChangePlacesBottom(x, y, color) {
    const changePlaceList = []
    for (var i = y + 1; i < 8; i++) {
      const tempColor = this.state.board[x][i]
      if (tempColor === 0) {
        return []
      }
      if (tempColor === color) {
        return changePlaceList;
      }
      changePlaceList.push({x: x, y: i})
    }
    return []
  }

  _searchChangePlacesTop(x, y, color) {
    const changePlaceList = []

    for (var i = y - 1; i >= 0; i--) {
      const tempColor = this.state.board[x][i]
      if (tempColor === 0) {
        return []
      }
      if (tempColor === color) {
        return changePlaceList
      }
      changePlaceList.push({x: x, y: i})
    };
    return []
  }

  _searchChangePlacesRightBottom(x, y, color) {
    const changePlaceList = []
    while (true) {
      x++
      y++
      if (x >= 8 || y >= 8) {
        return []
      }
      const tempColor = this.state.board[x][y]
      if (tempColor === 0 || !tempColor) {
          return []
      }
      if (tempColor === color) {
          return changePlaceList
      }
      changePlaceList.push({x: x, y: y})
    }
  }

  _searchChangePlacesLeftTop(x, y, color) {
    const changePlaceList = [];
    while (true) {
      x--
      y--
      if (x < 0 || y < 0) {
        return []
      }
      const tempColor = this.state.board[x][y]
      if (tempColor === 0 || !tempColor) {
          return []
      }
      if (tempColor === color) {
          return changePlaceList
      }
      changePlaceList.push({x: x, y: y})
    }
    return [];
  }

  _searchChangePlacesRightTop(x, y, color) {
    const changePlaceList = [];
    while (true) {
      x++
      y--
      if (x >= 8 || y < 0) {
        return []
      }
      const tempColor = this.state.board[x][y]
      if (tempColor === 0 || !tempColor) {
          return [];
      }
      if (tempColor === color) {
          return changePlaceList
      }
      changePlaceList.push({x: x, y: y})
    }
    return [];
  }

  _searchChangePlacesLeftBottom(x, y, color) {
    const changePlaceList = [];
    while (true) {
      x--
      y++
      if (x < 0 || y >= 8) {
        return []
      }
      const tempColor = this.state.board[x][y]
      if (tempColor === 0 || !tempColor) {
          return [];
      }
      if (tempColor === color) {
          return changePlaceList
      }
      changePlaceList.push({x: x, y: y})
    }
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