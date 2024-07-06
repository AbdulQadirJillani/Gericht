import { useState } from "react"
import CartItem from "../components/CartItem"
import Container from "../components/Container"

const Cart = () => {
  const [data, setData] = useState(JSON.parse(sessionStorage.getItem('item')))
  return (
    <Container className="bg-[url('@/assets/bg.png')] flex justify-center items-center">
        <div className="w-full grid md:grid-cols-2 gap-5 md:gap-10 mt-16">
            {data && data.map((item, i)=>(
                <CartItem key={i} name={item.name} dsc={item.dsc} price={item.price} quantity={item.quantity} img={item.img} data={data} setData={setData}/>
            ))}
        </div>
    </Container>
  )
}

export default Cart