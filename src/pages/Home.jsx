import React from 'react'
import Main from '../components/section/Main'
import Today from '../components/contents/Today'
import Developer from '../components/contents/Developer'
import Webd from '../components/contents/Webd'
import Website from '../components/contents/Website'
import Gasp from '../components/contents/Gsap'
import Portfolio from '../components/contents/Portfolio'
import Youtube from '../components/contents/Youtube'

const Home = () => {
  return (
    <Main 
    title='lala 유튜브채널' 
    description='lala 유튜브채널에 오신것을 환영합니다.' >
      <Today />
      <Developer /> 
      <Webd />
      <Website />
      <Gasp />
      <Portfolio />
      <Youtube />
    </Main>
  )
}

export default Home
