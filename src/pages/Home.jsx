import React from 'react'
import Main from '../components/section/Main'
import Today from '../components/contents/Today'
import Developer from '../components/contents/Developer'
import VideoSlider from '../components/videos/VideoSlider'

// import Webd from '../components/contents/Webd'
// import Website from '../components/contents/Website'
// import Gasp from '../components/contents/Gsap'
// import Portfolio from '../components/contents/Portfolio'
// import Youtube from '../components/contents/Youtube'

import { webdText } from '../data/webd'
import { websiteText } from '../data/website'
import { gsapText } from '../data/gsap'
import { portfolioText } from '../data/portfolio'
import { youtubeText } from '../data/youtube'

const Home = () => {
  return (
    <Main 
    title='lala 유튜브채널' 
    description='lala 유튜브채널에 오신것을 환영합니다.' >
      <Today />
      <Developer /> 
      <VideoSlider videos={webdText} title='웹디 준비' id='webd' />
      <VideoSlider videos={websiteText} title='웹표준' id='website' />
      <VideoSlider videos={gsapText} title='패럴랙스' id='gsap' />
      <VideoSlider videos={portfolioText} title='js 포폴' id='portfolio' />
      <VideoSlider videos={youtubeText} title='나만의 유튜브' id='youtube' />
    </Main>
  )
}

export default Home
