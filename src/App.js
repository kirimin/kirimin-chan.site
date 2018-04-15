import React, { Component } from 'react';
import YouTube from 'react-youtube';

import header from './assets/header_image.png';
import profile from './assets/profile.png';
import video from './assets/intro_video.mp4'
import './App.css';

class App extends Component {
  render() {
    const youtubeOpts = {
      height: '390',
      width: '640',
        playerVars: {
      autoplay: 0
      }
    };
    return (
      <div className="App">
        <section>
          <header className="Header">
            <h1 className="HeaderTitle">Hello, kirimin-chan</h1>
            <img className='HeaderImage' src={header} />  
          </header>
        </section>
        <section className="Introduction">
          <div className="IntroductionContents">
            <div className="IntroductionYoutube">
              <YouTube className="IntroductionYoutubeFrame"
                  videoId="bGTEriE9zu0"
                  opts={youtubeOpts}
                  onReady={this._onReady}
                />
              </div>
            <h1 className="IntroductionTitle">じこしょうかい</h1>
            {/* <img className='IntroductionProfile' src={profile} />   */}
          </div>
        </section>
      </div>
    );
  }

  _onReady(event) {
    // event.target.playVideo();
    // event.target.mute();
  }
}

export default App;
