import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {HashLink} from 'react-router-hash-link'

import KiriminChan from '../assets/kirimin-chan2.png'
import './Profile.css';

export class Profile extends Component {

  constructor() {
    super()
    this.state = {
      currentVideoList : [],
    }
  }

  render() {
    return (
      <div className="Profile">
         <section>
          <header className="Header">
            <h1 className="HeaderTitle" id="top">じこしょうかい</h1>
            <div className="HeaderContainer">
              <div className='Menu'>
                <Link className="MenuItemButton" to="../">とっぷ</Link>
                <HashLink className="MenuItemButton" smooth to="/#video">おすすめ動画</HashLink>
                <HashLink className="MenuItemButton" smooth to="/#license">ソーシャル</HashLink>
                <HashLink className="MenuItemButton" smooth to="/#contact">グッズ</HashLink>
                <HashLink className="MenuItemButton" smooth to="/#gallery">プロダクト</HashLink>
                <Link className="MenuItemButton" smooth to="./games">おしごと</Link>
              </div>
            </div>
        </header>
        </section>
        <section className="Profile_KiriminChan" id="kirimin-chan">
          <img className="Profile_KiriminChanLeft" src={KiriminChan}/>
          <div className="Profile_KiriminChanRight">
            <div className="Profile_KiriminChanDescription">
              <h1>きりみんちゃん</h1>
              <h2>バーチャル幼女プログラマー</h2>
              <hr/>
              <p>きりみんちゃんはバーチャル幼女プログラマーとして活動している個人VTuberです。プログラミングやエンジニアの仕事に関する動画を作成したり、技術的な質問に答える配信やライブコーディングなども行っています。</p>
              <p>声はおじさんだけど７さいの幼女。フリーランスのプログラマーとして働いているが、個人事業主なので児童労働ではない。得意分野はAndroidアプリ開発。</p>
            </div>
            <div className="Profile_KiriminChanStatus">
              <table>
                <tr>
                  <th>ねんれい</th><td>7さい</td>
                </tr>
                <tr>
                  <th>しんちょう</th><td>119cm</td>
                </tr>
                <tr>
                  <th>たいじゅう</th><td>22kg</td>
                </tr>
                <tr>
                  <th>しゅみ</th><td>プログラミング、おえかき、ゲーム</td>
                </tr>
              </table>
            </div>
            <div className="Profile_KiriminChanDescription">
              <h2>ハッシュタグ</h2>
              <p>きりみんちゃんに関する話題は<a href="https://twitter.com/search?q=%23%E3%81%8D%E3%82%8A%E3%81%BF%E3%82%93%E3%81%A1%E3%82%83%E3%82%93%E3%81%AD%E3%82%8B&src=typd">#きりみんちゃんねる</a>、ファンアートや二次創作などは<a href="https://twitter.com/search?q=%23kirimin_tech&src=typd">#kirimin_tech</a>を付けてツイートしてくれるとうれしいな！</p>
            </div>
            <div className="Profile_KiriminChanDescription">
              <h2>マシュマロ</h2>
              <p><a href="https://marshmallow-qa.com/kirimin_chan">マシュマロ</a>で質問やお悩み、はげましのおたよりなどを募集しているよ！プログラミングやエンジニア業界についての質問は配信で真面目に答えるよ！</p>
            </div>
          </div>
        </section>
      </div>
    );
  }

  componentDidMount() {
  }

  _onReady(event) {
  }
}

export default Profile;
