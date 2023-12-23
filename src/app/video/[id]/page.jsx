"use client"

import React, {useContext} from 'react'
import { resultContext } from '@/app/Context/Store'
import { useParams } from 'next/navigation'
import VideoContent from '@/Components/VideoContent'
import Header from '@/Components/Header'
import VideoBar from '@/Components/VideoBar'

const page = () => {
  const {videos, setVideos, searchTerm, setSearchTerm, pageToken} = useContext(resultContext)
  const videoId = useParams();

  const video = videos?.map(data=> {
    return (
      data?.find(e => {
        return (e?.id?.videoId===videoId.id)
      })
    )
  })
  
  return (
    <div className=' video-page h-screen'>
       <Header/>
       <VideoContent video={video}/>
       <VideoBar video={video}/>
    </div>
  )
}

export default page