import { Separator } from "@/components/ui/separator"

const SpecialMenuItem = ({ name, details, price }) => {
  return (
    <div className="flex justify-between">
        <div className="flex flex-col">
            <p className="text-lg font-bold text-yellow-200">{name}</p>
            <div className="flex gap-2">
                {details.map((d, i)=>(
                    <div key={i} className="flex items-center gap-2">
                      <span className="text-[#AAA]">{d}</span>
                      {!(i+1 === details.length) && <Separator orientation="vertical" className="bg-[#AAA] h-4"/>}
                    </div>
                    )
                  )}
            </div>
        </div>
        <div className="relative font-medium">
            <Separator orientation="horizontal" className='absolute top-3 right-full mr-1 w-[120%]'/>
            ${price}
        </div>
    </div>
  )
}

export default SpecialMenuItem