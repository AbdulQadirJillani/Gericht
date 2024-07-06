const Quantity = ({ quantity, setQuantity }) => {
    function increment() {
        setQuantity((prev)=>prev+1)
      }
    
      function decrement() {
        (quantity > 1) && setQuantity((prev)=>prev-1)
      }

  return (
    <div className="flex gap-1 items-center">
        <span className="px-2 border-2 border-gray-500 rounded-sm text-black cursor-pointer" onClick={decrement}>-</span>
        <span className="px-2">{quantity}</span>
        <span className="px-2 bg-black text-white rounded-sm cursor-pointer" onClick={increment}>+</span>
    </div>
  )
}

export default Quantity