import { AnchorImageSlider } from './components'
import { PODCASTS, WORKED_WITH } from '@config'
import marnie_listening from '@images/marnie_listening.jpg'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
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
          placeholder="blur"
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
