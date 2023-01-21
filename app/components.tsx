import { ImageInfo, PodcastInfo } from '@config'
import marnie_lean_1 from '@images/marnie_lean_1.jpeg'
import marnie_lean_2 from '@images/marnie_lean_2.jpg'
import marnie_lean_3 from '@images/marnie_lean_3.jpg'
import Image from 'next/image'

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

export const AnchorImage = ({
  image,
  title,
  link,
  ...rest
}: ImageInfo | PodcastInfo) => (
  <a
    href={'id' in rest ? `/podcasts#${rest.id}` : link}
    className="flex h-24 w-24 shrink-0 items-center sm:h-28 sm:w-28 md:h-28 md:w-28"
    target={'id' in rest ? undefined : '_blank'}
    key={title}
    title={title}
    rel="noreferrer"
  >
    <Image src={image} alt={title} className="" title={title} />
  </a>
)

export const AnchorImageSlider = ({
  title,
  images,
}: {
  title?: string
  images: (ImageInfo | PodcastInfo)[]
}) => (
  <div className="scrollbar-hide my-3 flex items-center gap-5 overflow-y-auto">
    {title && <p className="-mr-8 -ml-4 -rotate-90 text-sm">{title}</p>}
    {images.map(AnchorImage)}
  </div>
)
