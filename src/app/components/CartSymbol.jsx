import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const CartSymbol = () => {
  const navigate = useNavigate()
  const sessionData = JSON.parse(sessionStorage.getItem('item'))
  const [data, setData] = useState(sessionData)
  let itemCount = sessionStorage.getItem('count')

  window.addEventListener('storage', () => {
    setData(JSON.parse(sessionStorage.getItem('item')))
  })
  if (data) {
    sessionStorage.setItem('count', data.map((i) => i.quantity).reduce((a, b) => (a + b), 0))
  } else {
    sessionStorage.setItem('count', 0)
  }

  return (
    <div className='relative cursor-pointer' onClick={()=>navigate('/menu/cart')}>
        <i className='pi pi-shopping-cart text-3xl'/>
        <Badge variant="default" className="bg-yellow-200 text-black w-5 aspect-square rounded-full flex justify-center absolute right-[-10px] top-[-6px] hover:bg-yellow-100">{itemCount}</Badge>
    </div>
  )
}

export default CartSymbol