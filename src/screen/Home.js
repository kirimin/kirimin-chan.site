import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {HashLink} from 'react-router-hash-link'
import YouTube from 'react-youtube';

import header from '../assets/header_image.png';
import logo from '../assets/kirimin_chsolologo.png'
import op1 from '../assets/op_image1.png'
import op2 from '../assets/op_image4.png'
import op3 from '../assets/op_image3.png'
import sd from '../assets/sd.png'
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
            <HashLink className="MenuItemHomeButton" smooth to="/#top">▲</HashLink>
            <h1 className="HeaderTitle" id="top">Hello, kirimin-chan</h1>
            <div className="HeaderContainer">
              <p className="HeaderText1">Virtual<br/>　Little girl<br/>　　Programmer</p>
              <div className="FloatingButtons">
                <a href="https://www.youtube.com/channel/UCqN87Ye4TNLB04EFhxJ0L5w" className="HeaderChannelButton" onclick="ga('send', 'event', 'link', 'click', 'HeaderChannelButton')">きりみんちゃんねるへ</a>
                <a href='https://twitter.com/intent/tweet?text=きりみんちゃん.site&url=https://kirimin-chan.site/&hashtags=きりみんちゃんねる' className="HeaderShereButton" onclick="ga('send', 'event', 'link', 'click', 'HeaderShereButton')">ついーとする</a>
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
                <HashLink className="MenuItemButton" smooth to="/#video">どうが</HashLink>
                <HashLink className="MenuItemButton" smooth to="/#license">らいせんす</HashLink>
                <HashLink className="MenuItemButton" smooth to="/#contact">おといあわせ</HashLink>
                <HashLink className="MenuItemButton" smooth to="/#gallery">ぎゃらりー</HashLink>
                <Link className="MenuItemButton" smooth to="./games">げーむ</Link>
              </div>
            </div>
          </header>
        </section>
        <section className="Movie">
          <div className="MovieYoutube">
            <YouTube className="MovieYoutubeFrame"
              videoId="xOvEpXWt70Y"
              opts={youtubeOpts}
              onReady={this._onReady}
            />
          </div>
        </section>
        <section className="Introduction" id="introduction">
          <h1 className="IntroductionTitle">じこしょうかい</h1>
          <hr/>
          <div className="IntroductionContents">
            <div className="IntroductionTableProfile">
              <p className="IntroductionTableText">なまえ　　：きりみんちゃん</p>
              <p className="IntroductionTableText">ねんれい　：７さい</p>
              <p className="IntroductionTableText">しんちょう：１１９cm</p>
              <p className="IntroductionTableText">たいじゅう：２２kg</p>
              <p className="IntroductionTableText">しゅみ　　：プログラミング、おえかき、ゲーム</p>
            </div>
            <div className="IntroductionTableDescribe">
              <p className="IntroductionTableText">きりみんちゃんはバーチャル幼女プログラマーです。VTuberとしてバーチャルLTやライブコーディングなど、ギークな動画を発信していくよ。</p>
            </div>
            <div className="IntroductionTableHashTag">
              <p className="IntroductionTableText">きりみんちゃんに関する話題は<a href='https://twitter.com/search?q=%23%E3%81%8D%E3%82%8A%E3%81%BF%E3%82%93%E3%81%A1%E3%82%83%E3%82%93%E3%81%AD%E3%82%8B&src=typd'>#きりみんちゃんねる</a>、ファンアートなど二次創作は<a href='https://twitter.com/search?q=%23kirimin_tech&src=typd'>#kirimin_tech</a>でツイートしてくれるとうれしいです！</p>
            </div>
            <div className="IntroductionTableRequest">
              <p className="IntroductionTableText">マシュマロでしつもん、リクエストを募集しているよ！プログラミングに関するしつもんなどを気軽に送ってくれたら、それをネタに動画をつくったりするよ。</p>
            </div>
          </div>
        </section>
        <section className="Links">
          <h1>りんく</h1>
          <hr/>
          <div className="LinksContainer">
            <a className="LinksButton" href="https://www.youtube.com/channel/UCqN87Ye4TNLB04EFhxJ0L5w" onclick="ga('send', 'event', 'link', 'click', 'LinkChannnel')"><i class="fa fa-tv" aria-hidden="true"></i>きりみんちゃんねる(Youtube)</a>
            <a className="LinksButton" href="https://twitter.com/kirimin_chan" onclick="ga('send', 'event', 'link', 'click', 'LinkTwitter')"><i class="fa fa-twitter" aria-hidden="true"></i>Twitter</a>
            <a className="LinksButton" href="https://www.pixiv.net/fanbox/creator/13627594"  onclick="ga('send', 'event', 'link', 'click', 'LinkFANBOX')"><i class="fa fa-pencil" aria-hidden="true"></i>FANBOX(ぶろぐ)</a>
            <a className="LinksButton" href="https://kirimin-chan.booth.pm/"  onclick="ga('send', 'event', 'link', 'click', 'LinkBOOTH')"><i class="fa fa-list-alt" aria-hidden="true"></i>きりみんちゃんねるしょっぷ</a>
            <a className="LinksButton" href="https://marshmallow-qa.com/kirimin"  onclick="ga('send', 'event', 'link', 'click', 'LinkMarshmallow')"><i class="fa fa-question" aria-hidden="true"></i>マシュマロ(しつもん)</a>
          </div>
        </section>
        <section className="Video" id="video">
          <h1>どうが</h1>
          <hr/>
          <div className="VideoContents">
            {videos}
          </div>
        </section>
        <section className="Gallery" id="gallery">
          <h1>ぎゃらりー</h1>
          <hr/>
          <p>きりみんちゃんの画像(フリー素材)だよ。自由につかってね。</p>
          <div className="GalleryContainer">
            <img src="./gallery/lgtm1.png"/>
            <img src="./gallery/lgtm2.png"/>
            <img src="./gallery/lgtm4.png"/>
            <img src="./gallery/lgtm3.png"/>
            <img src="./gallery/teigi_taisha.jpg"/>
            <img src="./gallery/i_think_so_too.jpg"/>
          </div>
        </section>
        <section className="License" id="license">
          <h1 >らいせんす</h1>
          <hr/>
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
            <li className="LicenseHeaderText">公式の素材を使ったグッズの販売や公式と誤解されるようなグッズの販売</li>
          </ul>
        </section>
        <section className="Contact" id="contact">
          <h1>おといあわせ</h1>
          <hr/>
          <p className="ContactText">きりみんちゃんに関するお問い合わせは、minkarakirimade@gmail.comか、Twitterで@kirimin_chanにリプライやDMしてください。</p>
        </section>
        <img className='IntroductionSD' src={sd} />
      </div>
    );
  }

  componentDidMount() {
    fetch("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UUqN87Ye4TNLB04EFhxJ0L5w&maxResults=5&key=AIzaSyC0FXYDHyJJMA5D8eSbhISejSknJq_EXOI")
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

export default Home;
