import { Button } from "@/components/ui/button"

import Container from "@/app/components/Container"
import Heading from "@/app/components/Heading"
import SubHeading from "@/app/components/SubHeading"
import home from "@/assets/welcome.avif"
import { forwardRef } from "react"
import { useNavigate } from "react-router-dom"

const Home = forwardRef(function Home(props, ref) {
  const navigate = useNavigate()

  return (
    <Container ref={ref} className="bg-black text-white flex justify-center items-center">
      <div className="w-full flex flex-col md:flex-row items-center justify-around gap-5 mt-16">
        <div className="flex flex-col gap-3 items-start">
          <SubHeading>Chase The New Flavour</SubHeading>
          <Heading className="py-3">THE KEY TO FINE DINING</Heading>
          <p className="max-w-[65ch]">Experience culinary excellence where every dish tells a story. Discover the key to fine dining at our restaurant, where passion and sophistication meet on every plate.</p>
          <Button onClick={()=>navigate('/menu')}>Explore Menu</Button>
        </div>
        <img className="h-[60svh] md:h-[80svh]" src={home} alt="" />
      </div>
    </Container>
  )
})

export default Home