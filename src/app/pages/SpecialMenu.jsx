import Container from "@/app/components/Container"
import SpecialMenuItemList from "@/app/components/SpecialMenuItemList"
import Heading from "@/app/components/Heading"
import SubHeading from "@/app/components/SubHeading"
import menu from '@/assets/menu.avif'
import { forwardRef } from "react"

const SpecialMenu = forwardRef(function SpecialMenu(props, ref) {
  const data = [
    {type: 'Wine & Beers', name: 'Chaple Hill Shiraz', details: ['AU', 'Bottle'], price: '56'},
    {type: 'Wine & Beers', name: 'Cateena Malbee', details: ['AU', 'Bottle'], price: '59'},
    {type: 'Wine & Beers', name: 'La Vieillw Rose', details: ['FR', '750 Ml'], price: '44'},
    {type: 'Wine & Beers', name: 'Rhino Pale Ale', details: ['CA', '750 Ml'], price: '31'},
    {type: 'Wine & Beers', name: 'Irish Guiness', details: ['IE', '750 Ml'], price: '26'},
    {type: 'Cocktails', name: 'Aperol Sprtiz', details: ['Aperol', 'Villa Marchesi'], price: '20'},
    {type: 'Cocktails', name: 'Dark N Stormy', details: ['Dark Rum', 'Ginger Beer'], price: '16'},
    {type: 'Cocktails', name: 'Daiquiri', details: ['Rum', 'Citrus Juice'], price: '10'},
    {type: 'Cocktails', name: 'Old Fashioned', details: ['Bourbon', 'Brown Sugar'], price: '31'},
    {type: 'Cocktails', name: 'Negroni', details: ['Gin', 'Sweet Vermouth'], price: '26'},
  ]

  return (
    <Container ref={ref} className="bg-black text-white flex flex-col justify-center items-center">
      <div className="flex flex-col items-center justify-center">
        <SubHeading className="flex items-center">Menu That Fits Your Palatte</SubHeading>
        <Heading className="my-5">Today&#39;s Special</Heading>
      </div>

      <div className="w-full grid md:grid-cols-3 gap-5">
        <SpecialMenuItemList data={data.filter((i)=>i.type==='Wine & Beers')} />
        <img className="h-[60svh] md:h-[70svh] justify-self-center" src={menu} alt="" />
        <SpecialMenuItemList data={data.filter((i)=>i.type==='Cocktails')} />
      </div>
    </Container>
  )
})

export default SpecialMenu