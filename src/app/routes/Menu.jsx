import { useLoaderData } from "react-router-dom"
import Container from "../components/Container"
import MenuItem from "../components/MenuItem"
import Error from "../pages/Error"

const Menu = () => {
    const data = useLoaderData()
    if (data.empty == true) {
        return <Error/>
    }
    const dataArr = data.docs.map((d)=>d.data())
  return (
    <Container className="bg-[url('@/assets/bg.avif')] flex justify-center items-center">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-16">
            {dataArr.map((item)=>(
                <MenuItem key={item.id} name={item.name} dsc={item.dsc} price={item.price} rating={item.rate} img={item.img}/>
            ))}
        </div>
    </Container>
  )
}

export default Menu