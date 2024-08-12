import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'
import VideoCards from '../components/videos/VideoCards'
import { youtubeText } from '../data/youtube'

const Youtube = () => {
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
        },300);
    },[]);
    const youtubePageClass = loading ? 'isLoading' : 'isLoaded';

  return (
    <Main 
    title='lala 유튜브채널' 
    description='lala 유튜브채널에 오신것을 환영합니다.' >
      <section id='youtubePage' className={youtubePageClass}>
         <h2>유튜브사이트</h2>
         <div className='video__inner'>
            <VideoCards videos={youtubeText} />
         </div>
      </section>
    </Main>
  )
}

export default Youtube
