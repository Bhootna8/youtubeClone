"use client"
import { resultContext } from '@/app/Context/Store'
import React, {useContext} from 'react'
import spinner from '../../public/spinner.svg'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import jquery from 'jquery'

const MainContent = () => {
  const {setPageToken, videos, datas, shortText} = useContext(resultContext)
  const {ref, inView} = useInView()
 

  jquery('#next-line').show('5000')

  if(inView) {
    setTimeout(()=> {
      setPageToken(datas.nextPageToken)
    }, 1000)
  }

  // videos?.map(data=> (
  //   data.map(item=>  {
  //     const descript = item?.snippet?.description;
  //     if(descript.toString().includes("short")) {
  //       return (console.log("short videos"))
  //     }
  //   })
  // ))



  return (
    <div className=' main-content overflow-y-auto flex flex-wrap justify-evenly'>
          {videos?.map(data=> (
            data?.map(item=> (
            <div key={item?.id?.videoId} className=' relative w-[300px] flex flex-col flex-wrap'>
              <Link href={`../video/${item?.id?.videoId}`}>
                <img src={item?.snippet?.thumbnails?.high?.url} alt="" className=' thumbnail' />
                {/* <iframe src={`https://www.youtube.com/embed/${item?.id?.videoId}`} className=' hidden z-50 absolute top-0 left-0 w-[300px] h-[250px]' frameborder="0"></iframe> */}
                </Link>
              <Link href={`'../video/${item?.id?.videoId}`}><p>{shortText(item?.snippet?.title, 50)}</p></Link>
            </div>
            ))
           
          ))}

          <div className=' w-full flex flex-col items-center justify-center'>
            <Image src={spinner} alt='' className=' w-[60px] h-20 '/>
            <div id='next-line' className=' w-screen hidden' ref={ref}></div>
          </div>
   </div>
  )
}

export default MainContent