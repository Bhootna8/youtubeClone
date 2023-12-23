"use client"

import { sideBarData } from '@/SideBarData'
import React from 'react'

const SideBar = () => {
  return (
    <div className=' sidebar flex w-[100%] my-5 flex-col whitespace-nowrap overflow-y-auto scroll-smooth scrollbar-hide'>
         {sideBarData.map((data, index)=> {
          return (
            <p key={index} className=' ml-10 my-3 [&>*]:mr-5'>{data.icon} {data.name}</p>
          )
         })}
    </div>
  )
}

export default SideBar