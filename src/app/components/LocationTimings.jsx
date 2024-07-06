import { cn } from "@/lib/utils"

const LocationTimings = ({ className, props }) => {
  const location = 'Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G'
  const phone = ['+1-212-344-1230', '+1-212-555-1230']
  const openingtimings = ['Mon - Fri: 10:00 AM - 2:00 AM', 'Sat - Sun: 10:00 AM - 3:00 AM']

  return (
    <div className={cn("text-white flex flex-col gap-3", className)} {...props}>
      <p className="py-3">{location}</p>
      <span className="text-yellow-200 font-medium">Opening Hours</span>
      <div className="flex flex-col gap-1">
        {openingtimings.map((t, i)=>
        <span key={i}>{t}</span>)}
      </div>
      <span className="text-yellow-200 font-medium pt-3">Mobile Numbers</span>
      <div className="flex flex-col gap-1">
        {phone.map((p, i)=>
        <span key={i}>{p}</span>)}
      </div>
    </div>
  )
}

export default LocationTimings