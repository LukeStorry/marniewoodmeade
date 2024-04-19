import { PODCASTS, WORKED_WITH, ImageInfo, PodcastInfo, AWARDS } from '@config'
import marnie_lean_1 from '@images/marnie_lean_1.jpeg'
import marnie_lean_2 from '@images/marnie_lean_2.jpg'
import marnie_lean_3 from '@images/marnie_lean_3.jpg'
import marnie_listening from '@images/marnie_listening.jpg'
import Image, { StaticImageData } from 'next/image'
import { FC } from 'react'

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

const AnchorImage = ({
  image,
  title,
  link,
  ...rest
}: ImageInfo | PodcastInfo) => {
  const isPodcast = 'id' in rest
  return (
    <a
      href={isPodcast ? `/audio#${rest.id}` : link}
      className={
        'transition-transform hover:scale-110 ' +
        (isPodcast
          ? ' h-24 w-24 md:w-36 md:h-36 lg:w-48 lg:h-48 '
          : ' w-24 md:w-32 flex items-center shrink-0 ')
      }
      target={isPodcast ? undefined : '_blank'}
      key={title}
      title={title}
      rel="noreferrer"
    >
      <Image src={image} alt={title} title={title} />
    </a>
  )
}

const InfiniteScroll: FC<{ children: JSX.Element[] }> = ({ children }) => {
  const innerMarquee = 'flex items-center gap-5 pl-8 '
  return (
    <div className="pause-on-hover relative flex overflow-x-scroll transition-all motion-safe:overflow-x-hidden">
      <div className={`motion-safe:animate-marquee ${innerMarquee} `}>
        {children}
      </div>
      <div
        aria-hidden="true"
        className={`absolute top-0 motion-safe:animate-marquee-filler ${innerMarquee} `}
      >
        {children}
      </div>
    </div>
  )
}

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

      <section className="my-20 pl-4 pr-0 md:pl-8">
        <h2 className="mb-5 text-lg md:mb-8 md:text-3xl">
          Proud to have worked with
        </h2>
        <div className="scrollbar-hide my-3 flex items-center gap-5 overflow-y-auto">
          {WORKED_WITH.map(AnchorImage)}
        </div>
      </section>

      <section className="my-20 flex items-stretch">
        <div className="mx-auto p-4">
          <h2 className="text-lg md:text-3xl">Awards & recognition</h2>
          <ul className="mt-4 list-disc pl-4 text-sm md:mt-8 md:text-base">
            {AWARDS.map(({ body, award }) => (
              <li key={body}>
                <strong>{body}</strong> - {award}
              </li>
            ))}
          </ul>
        </div>
        {/* <Image
          src={marnie_listening}
          placeholder="blur"
          className="max-w-[40vw] object-cover object-left"
          alt=""
        /> */}
      </section>

      <section className="my-20 pl-4 pr-0 md:pl-8">
        <div className="mb-5 items-center sm:flex md:mb-8">
          <h2 className="text-lg md:text-3xl">Podcasts</h2>
          <p className="text-sm max-sm:mt-4 sm:px-16 md:text-base">
            I take podcasts all the way from conception through to sound design,
            editing and mixing
          </p>
        </div>

        <InfiniteScroll>
          {Object.entries(PODCASTS).map(([title, pods]) => (
            <div className="flex gap-4" key={title}>
              <p className="rotate-180 text-center [writing-mode:vertical-lr] ">
                {title}
              </p>
              {pods.map(AnchorImage)}
            </div>
          ))}
        </InfiniteScroll>
      </section>

      <section className="my-20 flex items-stretch">
        <Image
          src={marnie_listening}
          placeholder="blur"
          className="max-w-[40vw] object-cover object-left"
          alt=""
        />

        <div className="mx-auto p-4">
          <h2 className="text-lg md:text-3xl">I&apos;ve learned from</h2>
          <ul className="mt-4 list-disc pl-4 text-sm md:mt-8 md:text-base">
            <li>MSc International Development with Distinction 2021</li>
            <li>BSc Social Policy with First Class Honours 2019</li>
            <li>Transmission Roundhouse Traineeship 2022-23</li>
            <li>In The Dark Radio School 2023</li>
          </ul>
        </div>
      </section>
    </main>
  )
}
