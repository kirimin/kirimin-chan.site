import React, { Component } from 'react';
import YouTube from 'react-youtube';

import header from './assets/header_image.png';
import sd from './assets/sd.png'
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      currentVideoList : [],
    }
  }

  render() {
    const youtubeOpts = {
      height: '390',
      width: '640',
        playerVars: {
          autoplay:0,
          showinfo:0,
          loop:1,
        }
    };
    const youtubeOpts2 = {
      height: '195',
      width: '320',
        playerVars: {
        }
    };
    const videos = this.state.currentVideoList.map( item => {
      return (
        <div className="VideoCard">
          <YouTube className=""
            videoId={item.snippet.resourceId.videoId}
            opts={youtubeOpts2} />
          <p className="VideoCardTitle">{item.snippet.title}</p>
        </div>
        )
    })
    return (
      <div className="App">
        <section>
          <header className="Header">
            <h1 className="HeaderTitle">Hello, kirimin-chan</h1>
            <div className="HeaderContainer">
              <p className="HeaderText1">Virtual<br/>　Little girl<br/>　　Programmer</p>
              <div className='HeaderImageCover' />
              <img className='HeaderImage' src={header} />
            </div>
          </header>
        </section>
        <section className="Movie">
          <div className="MovieYoutube">
            <YouTube className="MovieYoutubeFrame"
              videoId="bGTEriE9zu0"
              opts={youtubeOpts}
              onReady={this._onReady}
            />
          </div>
        </section>
        <section className="Introduction">
          <h1 className="IntroductionTitle">■じこしょうかい</h1>
          <div className="IntroductionContents">
            <div className="IntroductionTableProfile">
              <p className="IntroductionTableText">なまえ　　：きりみん</p>
              <p className="IntroductionTableText">ねんれい　：７さい</p>
              <p className="IntroductionTableText">しんちょう：１１９cm</p>
              <p className="IntroductionTableText">たいじゅう：２２kg</p>
              <p className="IntroductionTableText">しゅみ　　：プログラミング、おえかき、ゲーム</p>
            </div>
            <div className="IntroductionTableDescribe">
              <p className="IntroductionTableText">きりみんちゃんはバーチャル幼女プログラマーです。VTuberとしてバーチャルLTやライブコーディングなど、ギークな動画を発信していくよ。</p>
            </div>
            <img className='IntroductionSD' src={sd} />
            <div className="IntroductionTableHashTag">
              <p className="IntroductionTableText">きりみんちゃんに関する話題は<a href='https://twitter.com/search?q=%23%E3%81%8D%E3%82%8A%E3%81%BF%E3%82%93%E3%81%A1%E3%82%83%E3%82%93%E3%81%AD%E3%82%8B&src=typd'>#きりみんちゃんねる</a>、ファンアートなど二次創作は<a href='https://twitter.com/search?q=%23kirimin_tech&src=typd'>#kirimin_tech</a>でツイートしてくれるとうれしいです！</p>
            </div>
            <div className="IntroductionTableRequest">
              <p className="IntroductionTableText">マシュマロでしつもん、リクエストを募集しているよ！プログラミングに関するしつもんなどを気軽に送ってくれたら、それをネタに動画をつくったりするよ。</p>
            </div>
          </div>
        </section>
        <section className="Video">
          <h1>■どうが</h1>
          <div className="VideoContents">
            {videos}
          </div>
        </section>
        <section className="Links">
          <h1>■りんく</h1>
          <div className="LinksContainer">
            <a className="LinksButton" href="https://marshmallow-qa.com/kirimin">マシュマロ(しつもん)</a>
            <a className="LinksButton" href="https://www.pixiv.net/fanbox/creator/13627594">FANBOX(ぶろぐ)</a>
            <a className="LinksButton" href="https://twitter.com/kirimin">ついったー</a>
          </div>
        </section>
        <section className="License">
          <h1 >■らいせんす</h1>
          <h2 className="LicenseHeaderTextTitle">きりみんちゃんのキャラクターライセンスについて</h2>
          <p className="LicenseHeaderText">きりみんちゃんのファンアートなどの二次創作利用はだいかんげいだよ！個人での範囲内であれば商用利用もおっけーだよ！</p>
          <p className="LicenseHeaderText">企業や営利団体での使用は個別におといあわせしてね！</p>
          <h2 className="LicenseHeaderTextTitle">○おっけー！</h2>
            <ul>
              <li className="LicenseHeaderText">個人でのファンアート、二次創作物などの制作、販売</li>
              <li className="LicenseHeaderText">きりみんちゃんの動画のキャプチャ画像の引用、MADなどの作成</li>
            </ul>
          <h2 className="LicenseHeaderTextTitle">☓だめ！</h2>
          <ul>
            <li className="LicenseHeaderText">特定の宗教、政治などの思想に関わる情報発信にキャラクターを使用すること</li>
            <li className="LicenseHeaderText">他人を誹謗中傷する目的でキャラクター使用すること</li>
            <li className="LicenseHeaderText">著しく暴力的、反社会的な内容、またはゾーニングへの配慮がないキャラクターの使用</li>
          </ul>
        </section>
        <section className="Contact">
          <h1>■おといあわせ</h1>
            <p className="ContactText">きりみんちゃんに関するお問い合わせは、minkarakirimade@gmail.comか、Twitterで@kiriminにリプライやDMしてください。</p>
        </section>
      </div>
    );
  }

  componentDidMount() {
    fetch("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UUqN87Ye4TNLB04EFhxJ0L5w&maxResults=6&key=AIzaSyC0FXYDHyJJMA5D8eSbhISejSknJq_EXOI")
      .then(results => {
        return results.json()
      }).then(data => {
        this.setState({currentVideoList: data.items })
      })
  }

  _onReady(event) {
    event.target.playVideo();
    event.target.mute();
  }
  
}

export default App;
