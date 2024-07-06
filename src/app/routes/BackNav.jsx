import { useEffect, useRef } from "react"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import 'primeicons/primeicons.css';

import CartSymbol from "../components/CartSymbol"
import { Button } from "@/components/ui/button";

const BackNav = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const backNavRef = useRef()
    useEffect(() => {
        let currentScrollY = 0
        function scrollListen() {
            if (window.scrollY > currentScrollY) {
                backNavRef.current.classList.add('hidden')
                currentScrollY = window.scrollY
            }
            else if (window.scrollY < currentScrollY) {
                backNavRef.current.classList.remove('hidden')
                currentScrollY = window.scrollY
            }
        }
        window.addEventListener('scroll', scrollListen)
        return ()=>window.removeEventListener('scroll', scrollListen)
    }, [])
    const pathname = location.pathname.split('/').pop().toUpperCase()

  return (
    <>
    <nav ref={backNavRef} className="fixed w-full flex items-center justify-between bg-black text-white px-5 md:px-8 py-3 z-50 text-lg">
        <i className="pi pi-chevron-left cursor-pointer" onClick={() => navigate(-1)}/>
        <span className="font-bold cursor-pointer">
            {pathname === 'CART' ?
            <div className="flex gap-1 items-center">
                {pathname}
                <CartSymbol/>
            </div> :
            <span>{pathname}</span>
        }
        </span>
        {pathname === 'CART' ?
        <Button>Checkout</Button> :
        <CartSymbol/>}
    </nav>
    <Outlet/>
    </>
  )
}

export default BackNav

