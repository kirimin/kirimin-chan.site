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
            <h1>じゅんびちゅう</h1>
          </div>
        </section>
      </div>
    )
  }
}

export default Works;
