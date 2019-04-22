import React, { Component } from 'react'

import './Social.css';
import insta from '../assets/insta.png'
import fanbox from '../assets/fanbox.png'

export class Social extends Component {

  constructor() {
    super()
  }

  render() {
    return (
      <div className="Social">
         <section>
          <header className="Header">
            <h1 className="HeaderTitle" id="top">ソーシャル</h1>
            <div className="HeaderContainer">
              <div className='Menu'>
                <a className="MenuItemButton" href="https://kirimin-chan.site/?skip_anime=true">とっぷ</a>
                <a className="MenuItemButton" href="https://kirimin-chan.site/profile">じこしょうかい</a>
                <a className="MenuItemButton" href="https://kirimin-chan.site/videos">おすすめ動画</a>
                <a className="MenuItemButton" href="https://kirimin-chan.site/social">ソーシャル</a>
                <a className="MenuItemButton" href="https://kirimin-chan.site/products">プロダクト</a>
                <a className="MenuItemButton" href="https://kirimin-chan.site/gallery">素材</a>
                <a className="MenuItemButton" href="https://kirimin-chan.site/works">おしごと</a>
              </div>
            </div>
        </header>
        </section>
        <section className="Social_Body">
          <div>
            <h1>Twitter</h1>
            <hr/>
            <p>ツイ廃だよ！いろいろなお知らせもきほんてきにツイッターでやってるからフォローしてね！</p>
            <div className="Social_Twitter">
              <a className="twitter-timeline" data-width="600" data-height="1000" data-theme="light" data-link-color="#2B7BB9" href="https://twitter.com/kirimin_chan?ref_src=twsrc%5Etfw">Tweets by TwitterDev</a>
            </div>
            <h1>Instagram</h1>
            <hr/>
            <p>きりみんちゃんのInstagramでは主にきりみんちゃんのイラストやお写真を投稿しています！</p>
            <div className="Social_Thumbnail">
              <a href="https://www.instagram.com/kirimin/"><img src={insta} /></a>
            </div>
            <h1>FANBOX</h1>
            <hr/>
            <p>FANBOXではブログ的な内容を書いたり、有料プランの方向けに特別コンテンツや人生fmのAfter showを公開しているよ！とりあえずフォローだけでもしてみてね！</p>
            <div className="Social_Thumbnail">
              <a href="https://www.pixiv.net/fanbox/creator/13627594"><img src={fanbox} /></a>
            </div>
          </div>
          <div className="Margin32"/>
          <div className="Margin32"/>
        </section>
      </div>
    )
  }
}

export default Social;
