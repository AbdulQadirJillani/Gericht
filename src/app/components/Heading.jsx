import { cn } from "@/lib/utils"

const Heading = ({ children, className, ...props }) => {
  return (
    <div className={cn("text-yellow-200 text-4xl font-bold", className)} {...props}>
        {children}
    </div>
  )
}

export default Heading