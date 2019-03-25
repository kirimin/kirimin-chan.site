import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {HashLink} from 'react-router-hash-link'
import YouTube from 'react-youtube'

import header from '../assets/header_image.png'
import logo from '../assets/kirimin_chsolologo.png'
import op1 from '../assets/op_image1.png'
import op2 from '../assets/op_image2.png'
import op3 from '../assets/op_image3.png'
import './Home.css';

export class Home extends Component {

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
    // const youtubeOpts2 = {
    //   height: '195',
    //   width: '320',
    //     playerVars: {
    //     }
    // };
    // const videos = this.state.currentVideoList.map( item => {
    //   return (
    //     <div className="VideoCard">
    //       <YouTube className=""
    //         videoId={item.snippet.resourceId.videoId}
    //         opts={youtubeOpts2} />
    //       <p className="VideoCardTitle">{item.snippet.title}</p>
    //     </div>
    //     )
    // })
    return (
      <div className="App">
         <section>
          <header className="Header">
            <h1 className="HeaderTitle" id="top">Hello, kirimin-chan</h1>
            <div className="HeaderContainer">
              <p className="HeaderText1">Virtual<br/>　Little girl<br/>　　Programmer</p>
              <div className="ShareButtons">
                <div dangerouslySetInnerHTML={{__html: `<a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-size="large" data-text="バーチャル幼女プログラマーきりみんちゃんの公式サイトをみたよ！" data-url="https://kirimin-chan.site" data-hashtags="#きりみんちゃんねる" data-show-count="false">Tweet</a>`}}></div>
                <div dangerouslySetInnerHTML={{__html: `<a href="http://b.hatena.ne.jp/entry/" class="hatena-bookmark-button" data-hatena-bookmark-layout="vertical-normal" data-hatena-bookmark-lang="ja" title="このエントリーをはてなブックマークに追加"><img src="https://b.st-hatena.com/images/v4/public/entry-button/button-only@2x.png" alt="このエントリーをはてなブックマークに追加" width="20" height="20" style="border: none;" /></a>`}}></div>
              </div>
              <div className="LinkButtons">
                <a href="https://www.youtube.com/channel/UCqN87Ye4TNLB04EFhxJ0L5w" className="ChannelButton" onClick="ga('send', 'event', 'link', 'click', 'ChannelButton')">YouTubeチャンネルへ　＞</a>
                <a href="https://twitter.com/kirimin_chan" className="TwitterButton" onClick="ga('send', 'event', 'link', 'click', 'TwitterlButton')">Twitterアカウントへ　＞</a>
              </div>
              <div className='HeaderOpImage1Cover' />
              <img className='HeaderOpImage1' src={op1}/>
              <div className='HeaderOpImage2Cover' />
              <img className='HeaderOpImage2' src={op2}/>
              <div className='HeaderOpImage3Cover' />
              <img className='HeaderOpImage3' src={op3}/>
              <div className='HeaderImageCover' />
              <img className='HeaderImage' src={header} />
              <img className='HeaderImageLogo' src={logo} />
              <div className='Menu'>
                <HashLink className="MenuItemButton" smooth to="/#introduction">じこしょうかい</HashLink>
                <HashLink className="MenuItemButton" smooth to="/#video">おすすめ動画</HashLink>
                <HashLink className="MenuItemButton" smooth to="/#license">ソーシャル</HashLink>
                <HashLink className="MenuItemButton" smooth to="/#contact">グッズ</HashLink>
                <HashLink className="MenuItemButton" smooth to="/#gallery">プロダクト</HashLink>
                <Link className="MenuItemButton" smooth to="./games">おしごと</Link>
              </div>
            </div>
          </header>
        </section>
        <section className="Movie">
          <div className="MovieYoutube">
            <YouTube className="MovieYoutubeFrame"
              videoId="ZhINFxFdISA"
              opts={youtubeOpts}
              onReady={this._onReady}
            />
          </div>
        </section>
        <section className="Introduction" id="introduction">
          <h1>きりみんちゃんねる</h1>
          <hr/>
          <p>きりみんちゃんはバーチャル幼女プログラマーとして活動している個人VTuberです。プログラミングやエンジニアの仕事に関する動画を作成したり、技術的な質問に答える配信やライブコーディングなども行っています。</p>
        </section>
        <section className="License" id="license">
          <h1 >らいせんす</h1>
          <hr/>
          <h2 className="LicenseHeaderTextTitle">きりみんちゃんのキャラクターライセンスについて</h2>
          <p className="LicenseHeaderText">きりみんちゃんのファンアートなどの二次創作利用はだいかんげいだよ！個人での範囲内であれば商用利用もおっけーだよ！</p>
          <p className="LicenseHeaderText">企業や営利団体での使用は個別におといあわせしてね！</p>
          <h2 className="LicenseHeaderTextTitle">○おっけー！</h2>
            <ul>
              <li className="LicenseHeaderText">個人でのファンアート、二次創作物などの公開、販売</li>
              <li className="LicenseHeaderText">きりみんちゃんの動画のキャプチャ画像の引用、切り抜き動画やMADなどの投稿</li>
            </ul>
          <h2 className="LicenseHeaderTextTitle">☓だめ！</h2>
          <ul>
            <li className="LicenseHeaderText">特定の宗教、政治などの思想に関わる情報発信にキャラクターを使用すること</li>
            <li className="LicenseHeaderText">他人を誹謗中傷する目的でキャラクター使用すること</li>
            <li className="LicenseHeaderText">著しく暴力的、反社会的な内容、またはゾーニングへの配慮がないキャラクターの使用</li>
            <li className="LicenseHeaderText">公式の素材を使ったグッズの販売や公式と誤解されるようなグッズの販売</li>
          </ul>
        </section>
        <div className="Formrun" dangerouslySetInnerHTML={{__html: `<div
            class="formrun-embed"
            data-formrun-form="@kirimin-chan"
            data-formrun-redirect="true">
          </div>
        `}}>
        </div>
      </div>
    );
  }

  componentDidMount() {
    // fetch("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UUqN87Ye4TNLB04EFhxJ0L5w&maxResults=5&key=AIzaSyC0FXYDHyJJMA5D8eSbhISejSknJq_EXOI")
    //   .then(results => {
    //     return results.json()
    //   }).then(data => {
    //     this.setState({currentVideoList: data.items })
    //   })
  }

  _onReady(event) {
    event.target.playVideo();
    event.target.mute();
  }
}

export default Home;
