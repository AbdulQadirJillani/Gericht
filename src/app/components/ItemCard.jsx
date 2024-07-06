import { useNavigate } from "react-router-dom"

const ItemCard = ({ category, path, img }) => {
  const navigate = useNavigate()
  return (
    <div className="relative w-clamp h-[50svh] rounded-md bg-black hover:scale-[1.02] active:scale-[0.98] cursor-pointer" onClick={()=>navigate(path)}>
      <img className="h-full w-full rounded-md" src={img} alt=''/>
      <div className="absolute inset-0 bg-gradient-to-t from-black">
        <span className="absolute bottom-4 left-4 text-lg font-extrabold text-white">{category.toUpperCase()}</span>
      </div>
    </div>
  )
}

export default ItemCard