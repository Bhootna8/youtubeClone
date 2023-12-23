"use client"

import Request, {url} from '@/Request';
import React, { createContext, useEffect, useState} from 'react'
import { useRouter } from 'next/navigation';

export const resultContext = createContext();

export const Store = ({children})=> {
    const [searchTerm, setSearchTerm] = useState('pokemon')
    const [videos, setVideos] = useState([])
    const [datas, setDatas] = useState({})
    const [pageToken, setPageToken] = useState('')
    const router = useRouter()

    const shortText = (text, len)=> {
        return(text?.length>len ? text?.slice(0, len) + "...": text)
    }

       window.addEventListener('load', ()=> {
        window.addEventListener('offline', ()=> {
               router.push('http:localhost:3000/offline')
           
        })
       })
        window.addEventListener('online', ()=> {
            router.back()
        })

    useEffect(()=> {
        Request.get(url, {
            params: {
                q: searchTerm,
                pageToken: pageToken
            }
        }).then(res=> {
            console.log(res.data)
            setDatas(res.data)
            setVideos([...videos, res?.data?.items])
        }).catch(err=> {
            console.log(err)
        })
    }, [searchTerm, pageToken])

    return (
           <resultContext.Provider value={{searchTerm,setPageToken, shortText, videos, setDatas, setSearchTerm, setVideos, datas}}>
            {children}
           </resultContext.Provider>
    )
}

