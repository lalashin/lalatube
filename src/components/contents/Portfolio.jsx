import React from 'react'

import { portfolioText } from '../../data/portfolio'
import { Link } from 'react-router-dom'

const Portfolio = () => {
  return (
    <section id='website'>
        <h2>😊 포트폴리오 만드는 방법을 공유 강의</h2>
        <div className='video__inner'>
            {portfolioText.map((video,key) => (
            <div className='video' key={key}>
                <div className='video_thumb'>
                    <Link to={`/video/${video.videoId}`}>
                        <img src={video.img} alt={video.title} />
                    </Link>
                </div>
            </div>
            ))}
        </div>
      
    </section>
  )
}

export default Portfolio
