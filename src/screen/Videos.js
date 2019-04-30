import React, { Component } from 'react'
import YouTube from 'react-youtube';

import './Videos.css';

export class Videos extends Component {

  constructor() {
    super()
    this.state = {
      currentVideoList : [],
    }
  }

  render() {
    const youtubeOpts = {
      height: '195',
      width: '320',
        playerVars: {
        }
    };
    const videos = this.state.currentVideoList.map( item => {
      return (
        <div className="Videos_VideoCard" key={item.snippet.resourceId.videoId}>
          <YouTube
            videoId={item.snippet.resourceId.videoId}
            opts={youtubeOpts} />
          <p className="Videos_VideoCardTitle">{item.snippet.title}</p>
        </div>
        )
    })  
    return (
      <div className="Videos">
         <section>
          <header className="Header">
            <h1 className="HeaderTitle" id="top">おすすめ動画</h1>
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
        <section className="Videos_Body">
          <div>
            <h1><span role="img" aria-label="名札">📛</span>初見さんおすすめ動画</h1>
            <div className="Videos_VideoContents">
              {this.createVideoCard(
                "bGTEriE9zu0",
                "【バーチャル幼女プログラマー】きりみんちゃんの自己紹介！【VTuber】",
                "きりみんちゃんの自己紹介動画だよ！ちょっと古いけどきりみんちゃんのことがわかるよ！", 
                youtubeOpts)
              }
              {this.createVideoCard(
                "ZhINFxFdISA",
                "2分で分かるきりみんちゃんのライブコーディング配信",
                "roidKaigiにコントリビュートするきりみんちゃんの勇姿がサクッと見れちゃう動画だよ", 
                youtubeOpts)
              }
              {this.createVideoCard(
                "5QZPiOkkwEg",
                "配信でﾖｼﾓﾁﾓﾆするきりみんちゃん完全版【VTuber】",
                "自然な流れで由持もにちゃんのモノマネをした伝説の配信の切り抜きだよ", 
                youtubeOpts)
              }
              {this.createVideoCard(
                "wc2OmR90MAk",
                "卯月コウくんの話からすごい自然な導入でﾖｼﾓﾁﾓﾆするきりみんちゃん【VTuber】",
                "再び完璧な流れで由持もにちゃんのモノマネをした配信の切り抜きだよ", 
                youtubeOpts)
              }
              {this.createVideoCard(
                "WjhRSGnFmL0",
                "プリパラにVTuberのルーツを見出す早口オタク【VTuber】",
                "VTuberとプリパラの関連性について語る動画だよ", 
                youtubeOpts)
              }
              {this.createVideoCard(
                "JtNSFLARRVw",
                "「わたてん」とおねロリと姉妹百合について早口で語り語彙力を失うきりみんちゃん7歳【VTuber】",
                "早口でしゃべるきりみんちゃんだよ", 
                youtubeOpts)
              }
            </div>
          </div>
          <h1><span role="img" aria-label="スマートフォン">📱</span>おすすめ技術動画</h1>
            <div className="Videos_VideoContents">
              {this.createVideoCard(
                  "oqBhBCwlf_c",
                  "【バーチャルLT】ざっくり工数見積を支える技術【VTuber】",
                  "プログラマの必須スキル、見積もり手法について解説した動画だよ", 
                  youtubeOpts)
              }
              {this.createVideoCard(
                  "vbV34LHZYIk",
                  "【バーチャルLT】はじめよう きれいなコード【プログラミング初心者向け】",
                  "プログラミング初心者の人向けにきれいなコードの考え方を解説した動画だよ", 
                  youtubeOpts)
              }
              {this.createVideoCard(
                  "GmFSTHC86Y4",
                  "【Live2Dで】VTuberをやるためのモデル作成方法、使用ソフトウェア、機材などを解説していくよ！【VTuberになろう】",
                  "VTuberに興味がある人におすすめの動画だよ！", 
                  youtubeOpts)
              }
              {this.createVideoCard(
                  "Ni4xQHH_UHM",
                  "【ブラック？】(Web系)プログラマーというお仕事のリアルを紹介するよ！【花形？】【きりみんちゃんねる＃８】",
                  "プログラマーの仕事について紹介した動画だよ", 
                  youtubeOpts)
              }
              {this.createVideoCard(
                  "UORE-hhpnLM",
                  "【勉強会】きりみんちゃん流LT/登壇資料スライドを先延ばしにせず作る方法【KeyNote】【VTuber】",
                  "勉強会とかで使う発表スライドの使い方を解説した動画だよ", 
                  youtubeOpts)
              }
            </div>
          <h1><span role="img" aria-label="ビデオカメラ">📹</span>おすすめ配信アーカイブ</h1>
            <div className="Videos_VideoContents">
              {this.createVideoCard(
                  "2cw1m6sSKZ4",
                  "オススメの技術書について早口で語る回【アーカイブ】【VTuber】",
                  "きりみんちゃんイチオシの技術書を紹介した回。とても好評だったよ", 
                  youtubeOpts)
              }
              {this.createVideoCard(
                  "MsCthqiPQUY",
                  "7さいの幼女と振り返る平成ネット史【アーカイブ】【VTuber】",
                  "きりみんちゃんの歩んできたインターネット歴について語るインターネット老人回だよ", 
                  youtubeOpts)
              }
              {this.createVideoCard(
                  "sqCdYOMNdnA",
                  "きりみんちゃん🎉一周年&登録者1000人&フォロワー1000人お祝い配信🎉【アーカイブ】【VTuber】",
                  "デビュー１周年記念の時の配信だよ。いろんな企画をやったり盛りだくさんでした", 
                  youtubeOpts)
              }
              {this.createVideoCard(
                  "xLE1vvs6HTs",
                  "ナナメさん✕きりみんちゃんコラボ配信【アーカイブ】",
                  "おともだちのナナメさんとコラボで対談した回だよ。いろいろなお話をしました", 
                  youtubeOpts)
              }
              {this.createVideoCard(
                  "MFKf8DDWgiE",
                  "DroidKaigi2019appコントリビュートライブコーディングチャレンジ【アーカイブ】【VTuber】",
                  "OSSへのライブコーディングコントリビュートにチャレンジした回だよ。とても盛り上がったよ！", 
                  youtubeOpts)
              }
            </div>
            <h1><span role="img" aria-label="はてな">❓</span>おすすめお悩み回答動画シリーズ</h1>
              <div className="Videos_VideoContents">
                {this.createVideoCard(
                    "K4LylnD2650",
                    "【質問返し】応用情報持っててコードも書けても専門学校行った方がいい？ほか【VTuber】",
                    "", 
                    youtubeOpts)
                }
                {this.createVideoCard(
                    "hVAZ5JrO7xY",
                    "【質問返し】新卒でWeb系就職にはスキルが必要？新卒SIerからのWeb系へ転職ってどうなの？【VTuber】",
                    "", 
                    youtubeOpts)
                }
                {this.createVideoCard(
                    "yCBCy2MKecQ",
                    "【質問返し】どのプログラミング言語を勉強すればいいのかわかりません。どう選べばいいのでしょうか【VTuber】",
                    "", 
                    youtubeOpts)
                }
                {this.createVideoCard(
                    "EL0EtXADnDo",
                    "【質問返し】インターン中にヤバメのバグを出してしまいました。プログラミング向いてないのかとネガティブになってしまいます。【VTuber】",
                    "", 
                    youtubeOpts)
                }
                {this.createVideoCard(
                    "YdgInf1zQuM",
                    "【質問返し】4年ぐらいひきこもりニートでした。何をやるにもあと4年早ければとおもってしまいます。この感情の向き合い方がわかりません【VTuber】",
                    "", 
                    youtubeOpts)
                }
            </div>
          <h1><span role="img" aria-label="きらきら">✨</span>最新動画</h1>
          <div className="Videos_VideoContents">
            {videos}
          </div>
          <div className="Videos_Links">
            <a href="https://twitter.com/share?url=https://kirimin-chan.site/videos&text=きりみんちゃんのおすすめ動画を見てるよ！" className="Button Pink">このページをツイートする！</a>
            <div className="Margin32"/>
            <br/>
            <a href="https://www.youtube.com/channel/UCqN87Ye4TNLB04EFhxJ0L5w?view_as=subscriber" className="Button Pink">チャンネル登録する！</a>
            <div className="Margin32"/>
            <div className="Margin32"/>
          </div>
        </section>
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

  createVideoCard(id, title, description, opts) {
    return (
      <div className="Videos_VideoCard">
      <YouTube
        videoId={id}
        opts={opts} />
      <p className="Videos_VideoCardTitle">{title}</p>
      <p className="Videos_VideoCardDescription">{description}</p>
      <br/>
    </div>
    )
  }
}

export default Videos;
