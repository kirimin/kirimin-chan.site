import React, { Component } from 'react'

import './Gallery.css';

export class Gallery extends Component {

  constructor() {
    super()
  }

  render() {
    return (
      <div className="Gallery">
         <section>
          <header className="Header">
            <h1 className="HeaderTitle" id="top">素材</h1>
            <div className="HeaderContainer">
              <div className='Menu'>
                <a className="MenuItemButton" href="https://kirimin-chan.site/">とっぷ</a>
                <a className="MenuItemButton" href="https://kirimin-chan.site//profile">じこしょうかい</a>
                <a className="MenuItemButton" href="https://kirimin-chan.site//videos">おすすめ動画</a>
                <a className="MenuItemButton" href="https://kirimin-chan.site//social">ソーシャル</a>
                <a className="MenuItemButton" href="https://kirimin-chan.site//products">プロダクト</a>
                <a className="MenuItemButton" href="https://kirimin-chan.site//gallery">素材</a>
                <a className="MenuItemButton" href="https://kirimin-chan.site//works">おしごと</a>
              </div>
            </div>
        </header>
        </section>
        <section className="Gallery_Body">
          <div dangerouslySetInnerHTML={{__html: `<a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-size="large" data-text="きりみんちゃんのフリー素材" data-url="https://kirimin-chan.site/services" data-hashtags="きりみんちゃんねる" data-show-count="false">Tweet</a>`}}></div>
          <div dangerouslySetInnerHTML={{__html: `<a href="http://b.hatena.ne.jp/entry/" class="hatena-bookmark-button" data-hatena-bookmark-layout="vertical-normal" data-hatena-bookmark-lang="ja" title="このエントリーをはてなブックマークに追加"><img src="https://b.st-hatena.com/images/v4/public/entry-button/button-only@2x.png" alt="このエントリーをはてなブックマークに追加" width="20" height="20" style="border: none;" /></a>`}}></div>
          <h1>公式素材</h1>
          <hr/>
          <p>きりみんちゃんの画像を利用する場合はこちらをご利用ください。</p>
          <div className="Gallery_OfficeialImageContainer">
            <img src="https://kirimin-scrapbox.firebaseapp.com/free_assets/official_image1.png"/>
            <img src="https://kirimin-scrapbox.firebaseapp.com/free_assets/official_image2.png"/>
          </div>
          <h1>フリー素材</h1>
          <hr/>
          <p>ツイッターにアップしたりLGTM画像として利用したり良識の範囲内で自由に使ってあそんでね。</p>
          <div className="Gallery_Free">
            {this.createImageCard("https://kirimin-scrapbox.firebaseapp.com/free_assets/free_gif1.gif")}
            {this.createImageCard("https://kirimin-scrapbox.firebaseapp.com/free_assets/free1.png")}
            {this.createImageCard("https://kirimin-scrapbox.firebaseapp.com/free_assets/free2.png")}
            {this.createImageCard("https://kirimin-scrapbox.firebaseapp.com/free_assets/free3.png")}
            {this.createImageCard("https://kirimin-scrapbox.firebaseapp.com/free_assets/free4.png")}
            {this.createImageCard("https://kirimin-scrapbox.firebaseapp.com/free_assets/free5.png")}
            {this.createImageCard("https://kirimin-scrapbox.firebaseapp.com/free_assets/free6.png")}
            {this.createImageCard("https://kirimin-scrapbox.firebaseapp.com/free_assets/free8.png")}
            {this.createImageCard("https://kirimin-scrapbox.firebaseapp.com/free_assets/free9.png")}
          </div>
          <h1>バナー</h1>
          <hr/>
          <p>きりみんちゃんのバナーだよ！よかったらつかってね！</p>
          <div className="Gallery_BannerContainer">
            <img src="https://kirimin-scrapbox.firebaseapp.com/free_assets/banner.png"/>
            <img src="https://kirimin-scrapbox.firebaseapp.com/free_assets/banner2.png"/>
          </div>
        </section>
      </div>
    )
  }

  createImageCard(url) {
    return (
      <div className="Gallery_ImageCard">
        <input type="text" value={url} className="form-control" readOnly></input>
        <br/>
        <img src={url}/>
      <br/>
    </div>
    )
  }
}

export default Gallery;
