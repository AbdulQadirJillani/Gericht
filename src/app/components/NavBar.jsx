import { HamburgerMenuIcon, Cross2Icon } from '@radix-ui/react-icons'
import 'primeicons/primeicons.css';

import PrimaryNav from '@/app/components/PrimaryNav'
import title from '@/assets/gericht.png'

import { forwardRef, useEffect, useRef, useState } from "react"
import { Outlet } from 'react-router-dom';
import CartSymbol from './CartSymbol';

const NavBar = forwardRef(function NavBar(props, ref) {  
  const [drawer, setDrawer] = useState(false)
  const navRef = useRef()
  const hamRef = useRef()
  
  useEffect(()=>{
    if (drawer) {
      hamRef.current.scrollIntoView()
      document.body.style.overflow='hidden'
    }
    else {
      document.body.style.overflow='auto'
    }
    let currentY = 0
    const scrollListen = ()=>{
      if (window.scrollY > currentY) {
        navRef.current.classList.add('hidden')
        currentY = window.scrollY
      } else if (window.scrollY < currentY) {
        navRef.current.classList.remove('hidden')
        currentY = window.scrollY
      }
    }
    !drawer && window.addEventListener('scroll', scrollListen)
    return ()=>window.removeEventListener('scroll', scrollListen)
  }, [drawer])

  return (
    <>
    {
    !drawer
    &&
    <nav ref={navRef} className="fixed w-full flex items-center justify-between bg-black text-white px-5 md:px-8 py-2 z-50">
      <div className="flex gap-3">
        <HamburgerMenuIcon className="md:hidden h-12 w-8 cursor-pointer" onClick={()=>setDrawer(true)}/>
        <img src={title} alt="" className='h-12 cursor-pointer'/>
      </div>
      <PrimaryNav className="hidden md:flex" ref={ref} setDrawer={setDrawer}/>
      <CartSymbol/>
    </nav>
    }
    {
    drawer    
    &&
    <nav ref={hamRef} className="md:hidden h-[100svh] flex items-center justify-center bg-black text-white absolute w-full">
      <PrimaryNav className="flex-col z-50" ref={ref} setDrawer={setDrawer}/>
      <Cross2Icon className="w-5 h-5 absolute top-5 right-5 cursor-pointer" onClick={()=>(setDrawer(false))}/>
    </nav>
    }
    <Outlet/>
    </>
  )
})

export default NavBar