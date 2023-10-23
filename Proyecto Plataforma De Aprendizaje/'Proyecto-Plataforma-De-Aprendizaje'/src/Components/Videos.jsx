import React from 'react'

//REPRODUCTOR DE VIDEO
import ReactPlayer from 'react-player';

import Video1 from './Videos/y2mate.com - Javascript en dos minutos_1080p.mp4'
const Videos = () => {
  return (
    <div className=''>
        <ReactPlayer
        url={Video1}
        controls
        volume={0}
        loop
        />
    </div>
  )
}

export default Videos;




















