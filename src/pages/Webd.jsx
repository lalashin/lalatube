import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'

import VideoCards from '../components/videos/VideoCards'
import { webdText } from '../data/webd'

const Webd = () => {
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
        },300)
    },[]);

    const webdPageClass = loading ? 'isLadding' : 'isLoaded';

  return (
    <Main 
    title='웹디기능사' 
    description='lala 유튜브채널에 오신것을 환영합니다.' >
        <section id='webdPage' className={webdPageClass}>
            <h2>웹디기능사</h2>
            <div className='video__inner'>
                <VideoCards videos={webdText} />
            </div>
        </section>

    </Main>
  )
}

export default Webd
