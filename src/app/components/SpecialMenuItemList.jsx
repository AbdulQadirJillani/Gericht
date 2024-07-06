import SpecialMenuItem from "@/app/components/SpecialMenuItem"

const SpecialMenuItemList = ({ data }) => {
  return (
    <div className="flex flex-col md:justify-center gap-5">
      <h3 className="text-center text-2xl font-medium">{data[0].type}</h3>
      {data.map((item, i)=>
        <SpecialMenuItem key={i} name={item.name} details={item.details} price={item.price}/>
      )}
    </div>
  )
}

export default SpecialMenuItemList