import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'
import VideoCards from '../components/videos/VideoCards'
import { portfolioText } from '../data/portfolio'

const Port = () => {
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        setTimeout(() =>{
            setLoading(false);
        },300);
    },[]);

    const protPageClass = loading ? 'isLoading' : 'isLoaded';
    
  return (
    <Main 
    title='lala 유튜브채널' 
    description='lala 유튜브채널에 오신것을 환영합니다.' >
      <section id='portPage' className={protPageClass} >
            <h2>나만의 포트폴리오 사이트 제작</h2>
            <div className='video__inner'>
                <VideoCards videos={portfolioText} />
            </div>
            
      </section>
    </Main>
  )
}

export default Port
