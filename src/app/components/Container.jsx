import { cn } from "@/lib/utils"
import { forwardRef } from "react"

const Container = forwardRef(function Container({ children, className, ...props}, ref) {
  return (
    <div ref={ref} className={cn("min-h-svh px-5 py-5 md:px-10 md:py-10", className)} {...props}>
        {children}
    </div>
  )
})

export default Container