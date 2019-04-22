import React, { Component } from 'react'

import './Products.css';
import booth from '../assets/booth.png'
import jinseifm from '../assets/jinseifm.png'

export class Products extends Component {

  constructor() {
    super()
  }

  render() {
    return (
      <div className="Products">
         <section>
          <header className="Header">
            <h1 className="HeaderTitle" id="top">ソーシャル</h1>
            <div className="HeaderContainer">
              <div className='Menu'>
                <a className="MenuItemButton" href="https://kirimin-chan.site/?skip_anime=true">とっぷ</a>
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
        <section className="Products_Body">
          <h1>作ったもの</h1>
          <br/>
          <a href="https://kirimin-chan.site/games" className="Button">ゲーム</a>
          <a href="https://kirimin-chan.site/services" className="Button">サービス/アプリケーション</a>
          <h1>グッズ</h1>
          <p>BOOTHにてきりみんちゃんのグッズを販売しています！基本的に受注生産なのでちょっと高め＋お届けまでに時間がかかりますが、ぜひ見てみてください。</p>
          <a href="https://kirimin-chan.booth.pm/"><img src={booth} /></a>
          <div className="Products_Doujin">
            <h1>同人誌</h1>
            <h2>きりみんちゃん公式ファンブック</h2>
            <p>2019/4/14 技術書典が初出。きりみんちゃん公式ファンブックです。</p>
            <a href="https://kirimin-chan.booth.pm/items/1316739"><img src="https://booth.pximg.net/c/620x620/023c5dec-c356-48b7-a126-d3fab8cc10ba/i/1316739/a345aed9-9001-4f28-9c4f-e96e9a00eaf1_base_resized.jpg" /></a>
            <h2>フリーランスを完全に理解できる本(電子)</h2>
            <p>2019/4/14 技術書典が初出。フリーランスの働き方やお金についてなどを解説した本です。</p>
            <a href="https://kirimin-chan.booth.pm/items/1313813"><img src="https://booth.pximg.net/c/620x620/023c5dec-c356-48b7-a126-d3fab8cc10ba/i/1313813/14f4414d-b20b-448d-90c3-fd07767065f0_base_resized.jpg" /></a>
          </div>
          <h1>人生fm</h1>
          <p>人生fmはきりみんちゃんが知り合いのエンジニアなどの人にエンジニアになったきっかけや半生について自由に語ってもらうポッドキャスト(ネットラジオ)です。</p>
          <a href="https://jinseifm.life/"><img src={jinseifm} /></a>
        </section>
      </div>
    )
  }
}

export default Products;
