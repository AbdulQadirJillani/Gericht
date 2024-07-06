import Container from "@/app/components/Container"
import Heading from "@/app/components/Heading"
import SubHeading from "@/app/components/SubHeading"
import LocationTimings from "@/app/components/LocationTimings"
import Footer from "@/app/components/Footer"
import contact from "@/assets/findus.png"
import { forwardRef } from "react"

const Contact = forwardRef(function Contact(props, ref) {
  return (
    <>
    <Container ref={ref} className="bg-[url('@/assets/bg.png')] flex justify-center items-center">
        <div className="w-full flex flex-col md:flex-row justify-around items-center gap-5 text-white">
            <div className="flex flex-col items-start gap-3">
                <SubHeading>Contact</SubHeading>
                <Heading className="py-3">Find Us</Heading>
                <LocationTimings/>
            </div>
            <img className="h-[60svh] md:h-[80svh]" src={contact} alt="" />
        </div>
    </Container>
    <Footer>2021 Gericht. All Rights Reserved.</Footer>
    </>
  )
})

export default Contact