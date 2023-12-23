"use client"

import React, {useContext, useState} from 'react'
import { resultContext } from '@/app/Context/Store'
import { useInView } from 'react-intersection-observer'
import { useParams } from 'next/navigation'
import spinner from '../../public/spinner.svg'
import Image from 'next/image'
import Link from 'next/link'
import jquery from 'jquery'

const SearchContent = () => {
    const {videos,datas, setDatas, setSearchTerm, shortText, searchTerm, setPageToken} = useContext(resultContext)
   //  const seachVal = useParams()
   //  setSearchTerm(seachVal.query.replace(/[^a-zA-Z0-9 ]/g, ''))
    console.log(searchTerm)
   //  console.log(searchData.query)
   //  setSearchTerm(searchData.query)
    // setSearchTerm(()=> (searchTerm===searchData.query?searchTerm:searchData.query))
     const {ref, inView} = useInView()

   

    jquery('#next-line').show('5000')
    if(inView) {
       setTimeout(()=> {
         setPageToken(datas.nextPageToken)
       }, 1000)
    }

  return (
    <div className=' video-section flex items-center justify-center flex-wrap overflow-y-auto'>
         {videos?.map(data=> (
            data?.map(item=> (
                
                <div key={item?.id?.videoId} className=' search-container'>
                 <Link className=' img' href={`../video/${item?.id?.videoId}`}>   
                    <img src={item?.snippet?.thumbnails?.high?.url} alt='' className='w-[300px] rounded-[10px] mt-2 h-[250px] mx-auto'/>
                 </Link>
                 <Link className='title flex flex-col justify-center' href={`../video/${item?.id?.videoId}`}>
                    <p className=' w-[80%]'>{shortText(item?.snippet?.title, 50)}</p>
                    <p className=' mt-2'>Channel Name</p>
                    <p className=' text-xl text-[green]'>{item?.snippet?.channelTitle}</p>
                 </Link>
                </div>
            ))
        ))}
        <div className=' spinner-container w-full flex flex-col items-center justify-center'>
            <Image src={spinner} alt='' className=' w-[60px] h-[80px] '/>
            <div id='next-line' className=' w-screen hidden' ref={ref}></div>
         </div>
    </div>
  )
}

export default SearchContent