import { AnchorImageSlider, LeaningBarPics } from './components'
import { PODCASTS, WORKED_WITH } from '@config'
import marnie_listening from '@images/marnie_listening.jpg'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <section className="mt-4 items-center p-4 md:flex">
        <div className="md:ml-auto">
          <h1 className="break-words text-5xl font-thin md:text-7xl">
            Marnie <br /> Woodmeade
          </h1>
          <h2 className="text-xl font-bold uppercase tracking-widest">
            Audio Producer
          </h2>
          <p className="max-w-sm">
            I am an audio producer, writer and campaigner specialising in
            stories of social movements and extraordinary people.
          </p>
        </div>
        <div className="m-8 mx-auto max-w-sm">
          <LeaningBarPics />
        </div>
      </section>

      <section className="p-4 md:flex md:flex-row-reverse md:items-center md:justify-end md:p-8">
        <div className="mx-auto">
          <h2>I&apos;ve learned from</h2>
          <ul className="list-disc pl-4">
            <li> uni</li>
            <li> training</li>
            <li> etc</li>
          </ul>
        </div>
        <Image
          src={marnie_listening}
          className="mx-auto my-4 max-w-xs"
          alt=""
        />
      </section>

      <section className="p-4 pr-0 md:p-8">
        <h2 className="mb-5">Proud to have worked with</h2>
        <AnchorImageSlider images={WORKED_WITH} />
      </section>

      <section className="p-4 py-6 pr-0 md:p-8">
        <div className="max-w-xl justify-between sm:flex">
          <h2>Podcasts</h2>
          <p className="max-w-sm">
            I take podcasts all the way from conception through to sound design,
            editing and mixing
          </p>
        </div>
        <div className="items-center overflow-y-auto sm:flex sm:gap-5">
          <div>
            <AnchorImageSlider title="Produced" images={PODCASTS.produced} />
          </div>
          <div className="flex gap-5">
            <AnchorImageSlider title="Recorded" images={PODCASTS.recorded} />
            <AnchorImageSlider title="Supported" images={PODCASTS.supported} />
          </div>
        </div>
      </section>
    </main>
  )
}
