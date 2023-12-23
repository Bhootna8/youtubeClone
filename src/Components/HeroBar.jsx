"use client"

import React, { useContext } from 'react'
import { heroData } from '@/HeroBarData'
import { resultContext } from '@/app/Context/Store'
import Link from 'next/link'
import { useRouter } from 'next/navigation'


const HeroBar = () => {
  const {searchTerm, setSearchTerm, setVideos} = useContext(resultContext)
  const router = useRouter()
  const search = (data)=> {
    setVideos([])
    setSearchTerm(data)
  }

  return (
    <div className=' flex items-center whitespace-nowrap scrollbar-hide overflow-x-auto scroll-smooth hero '>
         {heroData.map((data, index)=> {
            return (
                
                  <p onClick={()=> {
                    search(data);
                    router.push(`/search/${data}`)
                    
                    }} className=' cursor-pointer px-4 py-1 mx-4 text-xl  rounded-[10px] bg-[#373737]'>
                    {data}
                  </p>
               
            )
         })}
    </div>
  )
}

export default HeroBar