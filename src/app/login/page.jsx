import React from 'react'
import Image from 'next/image'
import {AccountCircle} from '@mui/icons-material'


const page = () => {
  return (
    <div className=' w-full min-h-screen flex'>
        <form action="" className=' flex items-center w-[400px] flex-col m-auto border-2 shadow-md shadow-[#4f244f]'>
            <AccountCircle className=' text-[5rem] mt-5'/>
            <div className=' text-[2rem] font-bold'>
              <h1>Login</h1>
               <div className=' bg-[red] w-[90px] h-[2px]' />
            </div>
            <input className=' w-[80%] bg-[gray] h-10 text-black placeholder:text-black my-5' type="email" placeholder=' Enter your email...' />
            <input className=' w-[80%] bg-[gray] placeholder:text-black h-10 text-black my-5' type="password" placeholder=' Enter your password...' />
            <button type='submit' className=' text-2xl my-5 bg-[red] px-4 py-2 rounded-full'>Submit</button>
        </form>
    </div>
  )
}

export default page