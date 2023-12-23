"use client"
import Header from '@/Components/Header'
import HeroBar from '@/Components/HeroBar'
import MainContent from '@/Components/MainContent'
import SideBar from '@/Components/SideBar'

export default function Home() {

  window.addEventListener('pageshow', (event)=> {
    if(event.persisted) {
      console.log("the page is loaded from bfcache")
    }else {
      console.log("it is loaded normally")
    }
})

  return (
    <main className="min-h-screen h-screen w-full grid-container">
       <Header/>
       <HeroBar/>
       <MainContent/>
       <SideBar/>
    </main>
  )
}
