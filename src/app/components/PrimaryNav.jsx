import { cn } from "@/lib/utils"
import { forwardRef } from "react"

const PrimaryNav = forwardRef(function PrimaryNav({ className, setDrawer, ...props }, ref) {

  function handleClick(reference) {
    ref[reference].current.scrollIntoView({behavior: 'smooth'})
    setDrawer(false)
  }

  return (
    <ul className={cn('cursor-pointer text-lg flex gap-5 items-center', className)} {...props}>
        <li onClick={()=>handleClick('homeRef')}>Home</li>
        <li onClick={()=>handleClick('aboutRef')}>About</li>
        <li onClick={()=>handleClick('specialRef')}>Specials</li>
        <li onClick={()=>handleClick('galleryRef')}>Gallery</li>
        <li onClick={()=>handleClick('awardRef')}>Awards</li>
        <li onClick={()=>handleClick('contactRef')}>Contact</li>
    </ul>
  )
})

export default PrimaryNav