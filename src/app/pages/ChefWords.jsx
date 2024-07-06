import Container from "@/app/components/Container"
import SubHeading from "@/app/components/SubHeading"
import Heading from "@/app/components/Heading"
import chef from "@/assets/chef.avif"
import sign from "@/assets/sign.avif"

const ChefWords = () => {
  return (
    <Container className="bg-[url('@/assets/bg.avif')] flex justify-center items-center">
        <div className="w-full flex flex-col md:flex-row justify-around items-center gap-5 text-white">
            <img className="h-[60svh] md:h-[80svh]" src={chef} alt="" />
            <div className="flex flex-col items-start gap-3">
                <SubHeading>Chef&#39;s Word</SubHeading>
                <Heading>What We Believe In</Heading>
                <p className="max-w-[85ch] py-5 before:content-[''] before:bg-[url('@/assets/quote.avif')] before:inline-block before:h-9 before:w-9 before:bg-contain before:bg-no-repeat"> We blend creativity and precision to present dishes that not only tantalize the palate but also celebrate the artistry and passion behind every ingredient and technique. Each visit promises a journey where flavors harmonize, service excels, and memories are made, ensuring every moment at our table is a masterpiece in its own right.</p>
                <div className="flex flex-col">
                    <span className="text-yellow-200 font-medium">Kevin Loa</span>
                    <span>Chef & Founder</span>
                </div>
                <img className="h-[15svh]" src={sign} alt="" />
            </div>
        </div>
    </Container>
  )
}

export default ChefWords