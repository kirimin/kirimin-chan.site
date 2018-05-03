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
              <p className="IntroductionTableTitle">なまえ　　：きりみん</p>
              <p className="IntroductionTableTitle">ねんれい　：７さい</p>
              <p className="IntroductionTableTitle">しんちょう：１１９cm</p>
              <p className="IntroductionTableTitle">たいじゅう：２２kg</p>
              <p className="IntroductionTableTitle">しゅみ　　：プログラミング、おえかき、ゲーム</p>
            </div>
            <div className="IntroductionTableDescribe">
              <p className="IntroductionTableTitle">きりみんちゃんはバーチャル幼女プログラマーです。VTuberとしてバーチャルLTやライブコーディングなど、ギークな動画を発信していくよ。</p>
            </div>
            <img className='IntroductionSD' src={sd} />
            <div className="IntroductionTableProfile">
              <p className="IntroductionTableTitle">きりみんちゃんに関する話題は#きりみんちゃんねる、ファンアートなど二次創作は#kirimin_techでツイートしてくれるとうれしいな！</p>
            </div>
            <div className="IntroductionTableDescribe">
              <p className="IntroductionTableTitle">【きりみんちゃんねる】【Twitter】【FANbox】【BOOTH】</p>
            </div>
          </div>
        </section>
        <section className="Video">
          <h1>■どうが</h1>
          <div className="VideoContents">
            {videos}
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
