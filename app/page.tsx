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
      <section className="md:flex">
        <div className="md:ml-auto">
          <h1 className="text-7xl">Marnie Woodmeade</h1>
          <p className="my-4 capitalize">Audio Producer</p>
          <p>
            I am an audio producer, writer and campaigner specialising in
            stories of social movements and extraordinary people.
          </p>
        </div>
        <div className="m-12 max-w-sm">
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
      <section className="items-center justify-around md:flex md:flex-row-reverse">
        <div>
          <h2 className="text-lg">I've learned from</h2>
          <ul>
            <li> uni</li>
            <li> training</li>
            <li> etc</li>
          </ul>
        </div>
        <Image src={marnie_listening} className="max-w-sm" alt="" />
      </section>
      <section className="m-6 ">
        <h2 className="text-lg">Proud to have worked with</h2>
        <p>Work in Progress</p>
        <p>Work in Progress</p>
      </section>
      <section className="m-6">
        <h2 className="text-lg">Podcasts</h2>
        <p>Work in Progress</p>
        <p>Work in Progress</p>
      </section>
    </main>
  )
}
