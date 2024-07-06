import { Badge } from "@/components/ui/badge"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const CartSymbol = () => {
  const navigate = useNavigate()
  const sessionData = JSON.parse(sessionStorage.getItem('item'))
  const [data, setData] = useState(sessionData)
  const [itemCount, setItemCount] = useState()

  useEffect(()=>{
    function session() {
      setData(JSON.parse(sessionStorage.getItem('item')))
    }
    window.addEventListener('storage', session)
    if (data) {
      const count = data.map((i) => i.quantity).reduce((a, b) => (a + b), 0)
      sessionStorage.setItem('count', count)
      setItemCount(count)
    } else {
      sessionStorage.setItem('count', 0)
      setItemCount(0)
    }
    return ()=>window.removeEventListener('storage', session)
  }, [data])


  return (
    <div className='relative cursor-pointer' onClick={()=>navigate('/menu/cart')}>
        <i className='pi pi-shopping-cart text-3xl'/>
        <Badge variant="default" className="bg-yellow-200 text-black w-5 aspect-square rounded-full flex justify-center absolute right-[-10px] top-[-6px] hover:bg-yellow-100">{itemCount}</Badge>
    </div>
  )
}

export default CartSymbol