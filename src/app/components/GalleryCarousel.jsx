import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

import pic1 from "@/assets/gallery01.png"
import pic2 from "@/assets/gallery02.png"  
import pic3 from "@/assets/gallery03.png"  
import pic4 from "@/assets/gallery04.png"
import pic5 from "@/assets/gallery05.png"  

const x = [
  {imgId: 'beiwoqd', imgLink: pic1},
  {imgId: 'iaecoaa', imgLink: pic2},
  {imgId: 'vieiowq', imgLink: pic3},
  {imgId: 'mvjrbnm', imgLink: pic4},
  {imgId: 'vopwjcd', imgLink: pic5},
]

const GalleryCarousel = () => {
  return (
    <Carousel opts={{loop:true, align: 'start'}} plugins={[Autoplay({delay: 3000, stopOnInteraction: false})]} className="w-full max-w-2xl relative">
      <CarouselContent>
        {x.map((obj)=>(
          <CarouselItem key={obj.imgId} className="flex items-center justify-center md:basis-1/2 lg:basis-1/3"><img className="h-[60svh]" src={obj.imgLink}/></CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext className="bg-transparent text-yellow-300 hover:bg-yellow-200 absolute top-[calc(100%-25px)] left-[calc(100%-40px)]"/>
      <CarouselPrevious className="bg-transparent text-yellow-300 hover:bg-yellow-200 absolute top-[calc(100%-25px)] left-[8px]"/>
    </Carousel>
  )
}

export default GalleryCarousel