import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button";
import 'primeicons/primeicons.css';
import Quantity from "./Quantity";
import { useState } from "react";
      
const MenuItem = ({ name, dsc, price, rating, img }) => {
  const [quantity, setQuantity] = useState(1)

  function addCart() {
    const oldData = JSON.parse(sessionStorage.getItem('item'))
    const newData = [{name, dsc, price, quantity, rating, img}]
    if (oldData === null) {
      sessionStorage.setItem('item', JSON.stringify(newData))
    } else {
      sessionStorage.setItem('item', JSON.stringify([...oldData, ...newData]))
    }
    let currentData = JSON.parse(sessionStorage.getItem('item'))
    
    currentData = Array.from(new Set(currentData.map((i) => i.dsc)))
    .map((dsc) => {
      return (
        {
          name: currentData.filter((i) => i.dsc == dsc).map((i)=>i.name)[0],
          dsc: dsc,
          price: currentData.filter((i) => i.dsc == dsc).map((i)=>i.price)[0],
          quantity: currentData.filter((i) => i.dsc == dsc).map((i)=>i.quantity).reduce((a, b) => (a + b), 0),
          rating: currentData.filter((i) => i.dsc == dsc).map((i)=>i.rating)[0],
          img: currentData.filter((i) => i.dsc == dsc).map((i)=>i.img)[0]

        }
      )
    })
    sessionStorage.setItem('item', JSON.stringify(currentData))
    window.dispatchEvent(new Event("storage"));
  }

  return (
    <div className="p-5 bg-white shadow-inner flex flex-col max-w-[300px]">
      <div className="relative min-h-[50svh] overflow-clip">
        <img src={img} alt='' className="h-full hover:scale-[1.1]"/>
        <Badge variant="default" className="bg-yellow-200 text-black flex gap-2 justify-center absolute right-[5px] bottom-[5px] hover:bg-yellow-200">
          {rating}/5
          <i className="pi pi-star-fill"/>
        </Badge>
      </div>
      <div className="h-full flex flex-col gap-3 justify-between">
        <div className="pt-3 flex justify-between gap-5 items-center">
          <div className="flex flex-col gap-1">
            <span className="text-lg font-bold">{name}</span>
            <span className="text-gray-500 text-sm">{dsc}</span>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <span>Price: <span className="font-medium">${Math.floor(price)*quantity}</span></span>
            <Quantity quantity={quantity} setQuantity={setQuantity}/>
          </div>
        </div>
        <Button onClick={addCart}>Add to Cart</Button>
      </div>
    </div>
  )
}

export default MenuItem