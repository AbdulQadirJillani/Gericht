import Container from "@/app/components/Container"
import Heading from "@/app/components/Heading"
import knife from '@/assets/knife.png'
import spoon from '@/assets/spoon.png'
import { forwardRef } from "react"

const About = forwardRef(function About(props, ref) {
  return (
    <Container ref={ref} className="text-white bg-[url('@/assets/bg.png')] flex justify-center items-center">
        <main className="isolate relative flex flex-col items-center md:flex-row gap-8 before:content-[''] before:bg-[url('@/assets/G.png')] before:bg-center before:bg-[length:30svh] before:md:bg-[length:40svh] before:bg-no-repeat before:absolute before:inset-0 before:z-[-1]">
            <div className="flex flex-col justify-center items-end gap-3 max-w-[60ch] text-right">
                <Heading>About Us</Heading>
                <img className="rotate-180" src={spoon} alt="" />
                <p>At our fine dining restaurant, we blend culinary artistry with exceptional service to create an unforgettable dining experience, celebrating flavor, elegance, and innovation.</p>
            </div>

            <img className="h-[60svh] md:h-[80svh] pl-3 " src={knife} alt="" />

            <div className="flex flex-col justify-center items-start gap-3 max-w-[60ch]">
                <Heading>Our History</Heading>
                <img src={spoon} alt="" />
                <p>Our rich heritage began in 1998, blending tradition and innovation to create a fine dining experience that has delighted guests and set culinary standards ever since.</p>
            </div>
        </main>
    </Container>
  )
})

export default About