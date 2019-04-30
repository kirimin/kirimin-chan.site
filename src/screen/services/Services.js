import React from 'react'
import './Services.css'
import kiriminchancamera from '../../assets/kiriminchancamera.png'

const Services = () => (
    <div className="Services">
      <section>
      <header className="Header">
        <h1 className="HeaderTitle" id="top">つくったサービス/アプリ</h1>
      </header>
      </section>
      <section className="Services_Body">
        <div dangerouslySetInnerHTML={{__html: `<a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-size="large" data-text="きりみんちゃんのつくったサービス/アプリ" data-url="https://kirimin-chan.site/services" data-hashtags="きりみんちゃんねる" data-show-count="false">Tweet</a>`}}></div>
        <div dangerouslySetInnerHTML={{__html: `<a href="http://b.hatena.ne.jp/entry/" class="hatena-bookmark-button" data-hatena-bookmark-layout="vertical-normal" data-hatena-bookmark-lang="ja" title="このエントリーをはてなブックマークに追加"><img src="https://b.st-hatena.com/images/v4/public/entry-button/button-only@2x.png" alt="このエントリーをはてなブックマークに追加" width="20" height="20" style="border: none;" /></a>`}}></div>

        <h1>きりみんちゃんカメラ</h1>
        <p>きりみんちゃんと一緒にお写真が取れるアプリです。</p>
        <br/>
        <a className="Services_Screenshot" href="https://kirimin-chan.site/Services/osero"><img alt='screenshot' src={kiriminchancamera} /></a>
        <br/>
        <a href='https://play.google.com/store/apps/details?id=me.kirimin.kirimin_chan_camera&hl=ja&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img className="Services_PlayStoreLink" alt='Google Play で手に入れよう' src='https://play.google.com/intl/ja/badges/images/generic/ja_badge_web_generic.png'/></a>
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

export default Services