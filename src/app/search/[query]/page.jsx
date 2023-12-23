"use client"
import Header from '@/Components/Header'
import SearchContent from '@/Components/SearchContent'
import SideBar from '@/Components/SideBar'

import React, { useContext } from 'react'

const page = () => {
 
  return (
    <div className=' search-page flex flex-wrap w-full min-h-screen h-screen'>
        <Header/>
        <SideBar/>
        <SearchContent/>
    </div>
  )
}

export default page