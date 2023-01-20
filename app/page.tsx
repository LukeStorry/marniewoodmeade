import logo_broccoli from '@images/logo_broccoli.png'
import logo_glasto from '@images/logo_glasto.png'
import logo_great_escape from '@images/logo_great_escape.png'
import logo_lyrix_organix from '@images/logo_lyrix_organix.png'
import logo_sis from '@images/logo_sis.png'
import logo_transmission from '@images/logo_transmission.png'
import marnie_lean_1 from '@images/marnie_lean_1.jpeg'
import marnie_lean_2 from '@images/marnie_lean_2.jpg'
import marnie_lean_3 from '@images/marnie_lean_3.jpg'
import marnie_listening from '@images/marnie_listening.jpg'
import pod_backstage_roundhouse from '@images/pod_backstage_roundhouse.png'
import pod_gentle_activism from '@images/pod_gentle_activism.png'
import pod_glasto_commons from '@images/pod_glasto_commons.png'
import pod_table_manners from '@images/pod_table_manners.png'
import pod_tell_dem from '@images/pod_tell_dem.png'
import pod_unreality from '@images/pod_unreality.png'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="p-4">
      <section className="items-center md:flex">
        <div className="md:ml-auto">
          <h1 className="break-words text-7xl font-thin">
            Marnie <br /> Woodmeade
          </h1>
          <h2 className="my-4 text-xl font-bold uppercase tracking-widest">
            Audio Producer
          </h2>
          <p>
            I am an audio producer, writer and campaigner specialising in
            stories of social movements and extraordinary people.
          </p>
        </div>
        <div className="m-12 mx-auto max-w-sm">
          <div className="relative m-2 aspect-[3/1] overflow-hidden">
            <Image src={marnie_lean_1} className="-mt-1" alt="" />
          </div>
          <div className="relative m-2 aspect-[3/1] overflow-hidden">
            <Image src={marnie_lean_2} className="-mt-6" alt="" />
          </div>
          <div className="relative m-2 aspect-[3/1] overflow-hidden">
            <Image src={marnie_lean_3} className="-mt-10" alt="" />
          </div>
        </div>
      </section>

      <section className="my-16 md:flex md:flex-row-reverse md:items-center md:justify-end">
        <div className="mx-auto">
          <h2>I&apos;ve learned from</h2>
          <ul className="list-disc pl-8 pb-12">
            <li> uni</li>
            <li> training</li>
            <li> etc</li>
          </ul>
        </div>
        <Image src={marnie_listening} className="max-w-sm" alt="" />
      </section>

      <section className="my-24">
        <h2>Proud to have worked with</h2>
        <div className="flex items-center gap-8 overflow-y-scroll">
          {[
            { img: logo_transmission, alt: 'Transmission Roundhouse' },
            { img: logo_glasto, alt: 'Glastonbury Festival' },
            { img: logo_broccoli, alt: 'Broccoli Productions' },
            { img: logo_great_escape, alt: 'The Great Escape Festival' },
            { img: logo_lyrix_organix, alt: 'Lyrix Organix' },
            { img: logo_sis, alt: 'Self Injury Support' },
          ].map(({ img, alt }) => (
            <Image
              src={img}
              alt={alt}
              className="max-h-24"
              title={alt}
              key={alt}
            />
          ))}
        </div>
      </section>

      <section className="my-32">
        <div className="flex">
          <h2>Podcasts</h2>
          <p className="ml-24 mt-4 max-w-sm">
            I take podcasts all the way from conception through to sound design,
            editing and mixing
          </p>
        </div>
        <div className="flex items-center gap-5 overflow-y-scroll">
          {[
            { text: 'Produced' },
            {
              alt: 'Gentle Activism',
              img: pod_gentle_activism,
              link: 'https://open.spotify.com/show/6rI3OowfoPlLBchxglyI53',
            },
            {
              alt: 'Glastonbury: The Common People',
              img: pod_glasto_commons,
              link: 'https://audioboom.com/channels/5083105',
            },
            {
              img: pod_tell_dem,
              alt: 'Tell Dem',
              link: 'https://audioboom.com/channels/5083828',
            },
            {
              alt: 'Backstage At The Roundhouse',
              img: pod_backstage_roundhouse,
              link: 'https://audioboom.com/channels/5071120',
            },
            { text: 'Recorded' },
            {
              alt: 'Table Manners with Jessie and Lennie Ware',
              img: pod_table_manners,
              link: 'https://shows.acast.com/tablemanners',
            },
            { text: 'Supported' },
            {
              alt: 'UnReality',
              img: pod_unreality,
              link: 'https://audioboom.com/channels/5093481',
            },
          ].map(({ img, alt, link, text }) =>
            text != undefined ? (
              <p className="-mr-8 -rotate-90" key={text}>
                {text}
              </p>
            ) : (
              <a
                target="_blank"
                href={link}
                key={alt}
                className="h-32 w-32 flex-none"
                title={alt}
                rel="noreferrer"
              >
                <Image src={img} alt={alt} />
              </a>
            )
          )}
        </div>
      </section>
    </main>
  )
}
