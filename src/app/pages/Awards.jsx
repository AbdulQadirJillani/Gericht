import Container from "@/app/components/Container"
import Heading from "@/app/components/Heading"
import LaurelsList from "@/app/components/LaurelsList"
import SubHeading from "@/app/components/SubHeading"
import awards from "@/assets/laurels.avif"
import { forwardRef } from "react"

const Awards = forwardRef(function Awards(props, ref) {
  return (
    <Container ref={ref} className="bg-[url('@/assets/bg.avif')] flex justify-center items-center">
        <div className="w-full flex flex-col md:flex-row justify-around items-center gap-5 text-white">
            <div className="flex flex-col items-start gap-3">
                <SubHeading>Awards & Recognitions</SubHeading>
                <Heading className="py-3">Our Laurels</Heading>
                <LaurelsList/>
            </div>
            <img className="h-[60svh] md:h-[80svh]" src={awards} alt="" />
        </div>
    </Container>
  )
})

export default Awards