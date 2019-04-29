import React, { Component } from 'react'

import './Works.css'

export class Works extends Component {

  constructor() {
    super()
  }

  render() {
    return (
      <div className="Works">
         <section>
          <header className="Header">
            <h1 className="HeaderTitle" id="top">おしごと情報</h1>
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
        <section className="Works_Body">
          <div>
            <h1>案件募集中</h1>
            <p>駆け出しVTuberのきりみんちゃんですが、VTuber案件ぼしゅうちゅうです！！！</p>
            <p>まだ実績がないため、格安価格で案件を受けたいとかんがえています。お気軽にご相談ください！！！</p>
            <h2>案件の例</h2>
            <ul>
              <li>動画でのイベントやサービスなどの宣伝</li>
              <li>イベントやサービス、企業などとのタイアップ、コラボ</li>
              <li>イベントなどへの出演、登壇、講演依頼</li>
            </ul>
            <h2>きりみんちゃんセールスポイント</h2>
            <ul>
              <li>Web業界、特にモバイルエンジニア界隈での高い知名度</li>
              <li>フリーランスで働く現役Androidエンジニアとしての技術、エンジニアへの理解</li>
              <li>エンジニアやプログラミングに興味がある学生などのファン層</li>
            </ul>
          </div>
          <div className="Home_Formrun" dangerouslySetInnerHTML={{__html: `<div
            class="formrun-embed"
            data-formrun-form="@kirimin-chan"
            data-formrun-redirect="true">
          </div>
          `}}>
          </div>
        </section>
      </div>
    )
  }
}

export default Works;
