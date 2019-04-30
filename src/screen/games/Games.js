import React from 'react'
import './Games.css'
import osero from '../../assets/osero.png'


const Games = () => (
    <div className="Games">
      <section>
      <header className="Header">
        <h1 className="HeaderTitle" id="top">つくったゲーム</h1>
      </header>
      </section>
      <section className="Games_Body">
        <div dangerouslySetInnerHTML={{__html: `<a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-size="large" data-text="きりみんちゃんのつくったゲーム" data-url="https://kirimin-chan.site/games" data-hashtags="きりみんちゃんねる" data-show-count="false">Tweet</a>`}}></div>
        <div dangerouslySetInnerHTML={{__html: `<a href="http://b.hatena.ne.jp/entry/" class="hatena-bookmark-button" data-hatena-bookmark-layout="vertical-normal" data-hatena-bookmark-lang="ja" title="このエントリーをはてなブックマークに追加"><img src="https://b.st-hatena.com/images/v4/public/entry-button/button-only@2x.png" alt="このエントリーをはてなブックマークに追加" width="20" height="20" style="border: none;" /></a>`}}></div>

        <h1 >オセロゲーム</h1>
        <p>きりみんちゃんのAIと対戦できるオセロゲームです。</p>
        <br/>
        <a className="Button" href="https://kirimin-chan.site/games/osero">プレイ</a>
        <br/>
        <br/>
        <a href="https://kirimin-chan.site/games/osero"><img alt='screenshot' src={osero} /></a>
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