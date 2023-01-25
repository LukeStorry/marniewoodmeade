import { PODCASTS, WORKED_WITH, ImageInfo, PodcastInfo } from '@config'
import marnie_lean_1 from '@images/marnie_lean_1.jpeg'
import marnie_lean_2 from '@images/marnie_lean_2.jpg'
import marnie_lean_3 from '@images/marnie_lean_3.jpg'
import marnie_listening from '@images/marnie_listening.jpg'
import Image, { StaticImageData } from 'next/image'

const AnchorImage = ({
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
    <Image src={image} alt={title} title={title} />
  </a>
)
const ImageBar = (p: { imageClass: string; src: StaticImageData }) => (
  <div className="relative aspect-[3/1] overflow-hidden">
    <Image
      src={p.src}
      placeholder="blur"
      priority
      className={p.imageClass + ' object-cover'}
      alt=""
    />
  </div>
)
const PodcastBar = () => (
  <>
    {Object.entries(PODCASTS).map(([title, pods]) => (
      <>
        <p className="-mr-8 -ml-4 -rotate-90 text-sm">{title}</p>
        {pods.map(AnchorImage)}
      </>
    ))}
  </>
)
export default function Home() {
  return (
    <main>
      <section className="grid grid-cols-2 items-center justify-items-center">
        <ImageBar src={marnie_lean_1} imageClass="" />
        <h1 className="text-xl font-thin sm:text-3xl md:text-4xl lg:text-5xl">
          Marnie <br /> Woodmeade
        </h1>
        <p className="max-w-[80%] text-center text-sm leading-4  md:text-lg lg:text-xl">
          AUDIO PRODUCER - WRITER - CAMPAIGNER
        </p>
        <ImageBar src={marnie_lean_2} imageClass="-mt-[8%]" />
        <ImageBar src={marnie_lean_3} imageClass="-mt-[11%]" />
        <p className=" max-w-[80%]  text-center text-sm max-sm:leading-4 lg:text-xl">
          Stories of social movements and extraordinary people
        </p>
      </section>

      <section className="mt-12 pl-4 pr-0 md:pl-8">
        <h2 className="mb-5 text-xl md:mb-8 md:text-3xl">
          Proud to have worked with
        </h2>
        <div className="scrollbar-hide my-3 flex items-center gap-5 overflow-y-auto">
          {WORKED_WITH.map(AnchorImage)}
        </div>
      </section>

      <section className="mt-12 flex items-stretch">
        {/* <div className="relative max-w-[40vw] overflow-hidden"> */}
        <Image
          src={marnie_listening}
          placeholder="blur"
          className="max-w-[40vw] object-cover object-left"
          alt=""
        />
        {/* </div> */}

        <div className="mx-auto p-4">
          <h2 className="text-xl md:text-3xl">I&apos;ve learned from</h2>
          <ul className="mt-4 list-disc pl-4 text-sm md:mt-8 md:text-base">
            <li>MSc International Development with Distinction 2021</li>
            <li>BSc Social Policy with First Class Honours 2019</li>
            <li>Transmission Roundhouse Traineeship 2022-23</li>
            <li>In The Dark Radio School 2023</li>
          </ul>
        </div>
      </section>

      <section className="my-12 pl-4 pr-0 md:pl-8">
        <div className="mb-5 items-center sm:flex md:mb-8">
          <h2 className="text-xl md:text-3xl">Podcasts</h2>
          <p className="text-sm max-sm:mt-4 sm:px-16 md:text-base">
            I take podcasts all the way from conception through to sound design,
            editing and mixing
          </p>
        </div>

        <div className="pause-on-hover relative flex overflow-x-hidden motion-safe:overflow-x-scroll">
          <div className="flex items-center gap-5 pl-8 motion-safe:animate-marquee">
            <PodcastBar />
          </div>
          <div
            aria-hidden="true"
            className="absolute top-0 flex items-center gap-5 pl-8 motion-safe:animate-marquee-filler"
          >
            <PodcastBar />
          </div>
        </div>
      </section>
    </main>
  )
}
