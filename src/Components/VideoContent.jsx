"use client"

import React from 'react'


const VideoContent = ({video}) => {
  const mainVideo = video?.filter(data=> data!==undefined)
  // console.log(video1)
  // console.log(video)
  return (
    <div className=' video-area [&>*]:w-[80%] [&>*]:mx-auto '>
        <iframe src={`https://www.youtube.com/embed/${mainVideo[0]?.id?.videoId}`} className=' h-[500px] mt-10 mb-3'></iframe>
        <p className=' '>{mainVideo[0]?.snippet?.title}</p>
        {mainVideo[0]?.id===undefined?<></>:<span className=' block h-[2px] mt-5 mb-2 bg-[gray]'></span>}
        <div className=' my-3 flex items-center justify-between'>
          <p className=' text-2xl font-bold'>{mainVideo[0]?.snippet?.channelTitle}</p>
          <button className=' text-xl border-[1px] border-[red] rounded-full px-5 py-1'>Subscribe</button>
        </div>
        <p>{mainVideo[0]?.snippet?.description}</p>
    </div>
  )
}

export default VideoContent