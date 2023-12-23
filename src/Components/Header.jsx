"use client"

import React, { useContext, useState } from 'react'
import { Camera, AccountCircle,Notifications,  Mic, YouTube } from '@mui/icons-material'
import { Search } from '@mui/icons-material'
import { resultContext } from '@/app/Context/Store';
import Link from 'next/link';
import { useRouter } from 'next/navigation';




const Header = () => {
const {searchTerm, setSearchTerm, setVideos} = useContext(resultContext)
const [searchText, setSearchText] = useState('')
const router = useRouter()


  const setValue=(e)=> {
    setSearchText(e.target.value)
  }

  const searchValue = (e)=> {
    if(e.key==="Enter") {
        setVideos([])
        setSearchTerm(searchText)
        router.push(`../search/${searchText}`)
    }
  
  }


  const search = ()=> {
    setVideos([])
    setSearchTerm(searchText)
    router.push(`../search/${searchText}`)
  }

  return (
    <div className='header flex items-center flex-wrap '>
         <YouTube className=' ml-10 text-[2rem] text-[red]'/>
         <h1 className=' text-[2rem] mx-3'>Youtube</h1>
         <div className=' bg-[#4f4f4f88] rounded-full flex border-[#5a5959ab] h-[40px] border-[1px] items-center ml-auto mr-2'>
            <input type="text" onChange={(e)=> setValue(e)} onKeyDown={(e)=> searchValue(e)}  placeholder='Search...' id='searchbar' className=' bg-[#0e0d0d] outline-none w-[400px] rounded-tl-full rounded-bl-full h-full text-xl px-4' />
            <Search onClick={()=> search()} className='cursor-pointer mx-3 text-[2rem]' />
         </div>
         <Mic className=' w-[40px] h-[40px] bg-[#4f4f4f88] mr-auto rounded-full py-[6px] '/>

         <div className=' mr-10 [&>*]:mx-4'>
            <Camera />
            <Notifications/>
            <Link href={'../login'}><AccountCircle className=' text-[2.4rem]'/></Link>
         </div>

    </div>
  )
}

export default Header