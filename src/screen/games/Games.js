import React, { Component } from 'react'
import './Games.css'
import osero from '../../assets/osero.png'


const Games = () => (
    <div className="Games">
      <section>
      <header className="Header">
        <h1 className="HeaderTitle" id="top">きりみんちゃんが作ったゲーム</h1>
      </header>
      </section>
      <section className="Games_Body">
        <h1 >オセロゲーム</h1>
        <p>きりみんちゃんのAIと対戦できるオセロゲームです。</p>
        <br/>
        <a className="Button" href="https://kirimin-chan.site/games/osero">プレイ</a>
        <br/>
        <br/>
        <a href="https://kirimin-chan.site/games/osero"><img src={osero} /></a>
        <br/>
        <br/>
        <br/>
        <a className="Button Pink" href="javascript:history.back()">前のページにもどる</a>
        <br/>
        <br/>
        <br/>
      </section>
    </div>
)

export default Games