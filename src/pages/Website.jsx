import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'

import VideoCards from '../components/videos/VideoCards'
import { websiteText } from '../data/website'

const Website = () => {
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
        },300);
    },[]);

    const websitePageClass = loading ? 'isLoading' : 'isLoaded';

  return (
    <Main 
    title='웹사이트기초' 
    description='lala 유튜브채널에 오신것을 환영합니다.' >
      <section id='websitePage' className={websitePageClass}>
        <h2>웹사이트기초</h2>
        <div className='video__inner'>
            <VideoCards videos={websiteText} />

        </div>

      </section>
    </Main>
  )
}

export default Website
