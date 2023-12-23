"use client"

import { resultContext } from '@/app/Context/Store'
import React, { useContext } from 'react'
import spinner from '../../public/spinner.svg'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import jquery from 'jquery'

const VideoBar = ({video}) => {
    const {videos, searchTerm, setPageToken,datas, setSearchTerm} = useContext(resultContext)
    const {ref, inView} = useInView()
    // let title = video[0].snippet?.title
    // setSearchTerm(title?.subString(0, title?.length/2))

    jquery('#next-line').show('5000')

    if(inView) {
        setTimeout(()=> {
            setPageToken(datas.nextPageToken)
        }, 1000)
    }

  return (
    <div className=' video-bar overflow-y-auto scrollbar-hide scroll-smooth'>
         {videos?.map(data=> (
            data.map(item=> (
                    <div key={item?.id?.videoId} className=' flex flex-col items-center w-[300px] mx-auto'>
                        <Link href={`../video/${item?.id?.videoId}`}><img src={item?.snippet?.thumbnails?.high?.url} alt='' className=' w-full h-full'/></Link>
                    </div>
                ))
         )
         )}
         <div className=' w-full flex flex-col items-center'>
            <Image src={spinner} alt='' className=' w-[60px] h-[60px]'/>
            <div ref={ref} id='next-line' className=' w-full h-[60px] hidden'></div>
         </div>
    </div>
  )
}

export default VideoBar