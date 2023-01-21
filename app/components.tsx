import marnie_lean_1 from '@images/marnie_lean_1.jpeg'
import marnie_lean_2 from '@images/marnie_lean_2.jpg'
import marnie_lean_3 from '@images/marnie_lean_3.jpg'
import Image, { StaticImageData } from 'next/image'

export const LeaningBarPics = () => (
  <>
    <div className="relative m-2 aspect-[3/1] overflow-hidden">
      <Image src={marnie_lean_1} className="-mt-1" alt="" />
    </div>
    <div className="relative m-2 aspect-[3/1] overflow-hidden">
      <Image src={marnie_lean_2} className="-mt-6" alt="" />
    </div>
    <div className="relative m-2 aspect-[3/1] overflow-hidden">
      <Image src={marnie_lean_3} className="-mt-10" alt="" />
    </div>
  </>
)

export const AnchorImageSlider = ({
  title,
  images,
}: {
  title?: string
  images: {
    img: StaticImageData
    alt: string
    link: string
  }[]
}) => (
  <div className="scrollbar-hide my-3 flex items-center gap-5 overflow-y-auto">
    {title && <p className="-mr-8 -ml-4 -rotate-90 text-sm">{title}</p>}
    {images.map(({ img, alt, link }) => (
      <a
        href={link}
        className="flex h-24 w-24 shrink-0 items-center sm:h-28 sm:w-28 md:h-28 md:w-28"
        target="_blank"
        key={alt}
        title={alt}
        rel="noreferrer"
      >
        <Image src={img} alt={alt} className="" title={alt} />
      </a>
    ))}
  </div>
)
