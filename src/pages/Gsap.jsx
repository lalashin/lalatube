import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'

import VideoCards from '../components/videos/VideoCards'
import { gsapText } from '../data/gsap'

const Gsap = () => {
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
        },300);
    },[]);

    const gsapPageClass = loading ? 'isLoading' : 'isLoaded';

  return (
    <Main 
    title='GSAP 사이트' 
    description='lala 유튜브채널에 오신것을 환영합니다.' >
        <section id='gsapPage' className={gsapPageClass}>
            <h2>창의적인 사이트제작</h2>
            <div className='video__inner'>
                <VideoCards videos={gsapText} />

            </div>
        </section>
    </Main>
  )
}

export default Gsap
