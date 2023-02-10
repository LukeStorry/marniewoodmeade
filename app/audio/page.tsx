import { PodcastInfoSection } from './components'
import { PODCASTS } from '@config'

export default function Podcasts() {
  return (
    <main>
      <h1 className="ml-4 mt-6 text-5xl">Podcasts</h1>

      {Object.values(PODCASTS)
        .flat()
        .map((pod, i) => (
          <PodcastInfoSection {...pod} index={i} key={pod.id} />
        ))}
    </main>
  )
}
