import { cn } from "@/lib/utils"
import spoon from "@/assets/spoon.png"

const SubHeading = ({ children, className, ...props }) => {
  return (
    <div className={cn('flex flex-col items-start', className)}>
        <span>{children}</span>
        <img src={spoon} alt="" />
    </div>
  )
}

export default SubHeading