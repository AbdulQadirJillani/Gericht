import Container from "@/app/components/Container"
import GalleryCarousel from "@/app/components/GalleryCarousel"
import Heading from "@/app/components/Heading"
import SubHeading from "@/app/components/SubHeading"
import { forwardRef } from "react"

const Gallery = forwardRef(function Gallery(props, ref) {
  return (
    <Container ref={ref} className="bg-black text-white flex justify-center items-center">
      <div className="w-full flex flex-col md:flex-row justify-around items-center gap-5">
        <div className="flex flex-col gap-3">
          <SubHeading>Instagram</SubHeading>
          <Heading className="py-3">Photo Gallery</Heading>
          <p className="max-w-prose">Embark on a visual journey through our restaurant&#39;s photo gallery, where every image narrates the tale of meticulous culinary craftsmanship.</p>
        </div>
        <GalleryCarousel/>
      </div>
    </Container>
  )
})

export default Gallery