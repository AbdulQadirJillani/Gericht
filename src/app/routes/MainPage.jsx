import NavBar from '../components/NavBar'
import Home from '@/app/pages/Home'
import About from '@/app/pages/About'
import SpecialMenu from '@/app/pages/SpecialMenu'
import ChefWords from '@/app/pages/ChefWords'
import Gallery from '@/app/pages/Gallery'
import Awards from '@/app/pages/Awards'
import Contact from '@/app/pages/Contact'
import { useRef } from 'react'

const MainPage = () => {  
  const homeRef = useRef()
  const aboutRef = useRef()
  const specialRef = useRef()
  const galleryRef = useRef()
  const awardRef = useRef()
  const contactRef = useRef()
  const ref = { homeRef, aboutRef, specialRef, awardRef, galleryRef, contactRef }

  return (
    <>
    <NavBar ref={ref}/>
    <Home ref={homeRef}/>
    <About ref={aboutRef}/>
    <SpecialMenu ref={specialRef}/>
    <ChefWords/>
    <Gallery ref={galleryRef}/>
    <Awards ref={awardRef}/>
    <Contact ref={contactRef}/>
    </>
  )
}

export default MainPage