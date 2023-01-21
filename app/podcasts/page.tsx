import { PODCASTS } from '@config'
import Image from 'next/image'

export default function Podcasts() {
  return (
    <main>
      <h1>Podcasts</h1>
      {Object.values(PODCASTS)
        .flat()
        .map(
          (
            {
              id,
              title,
              image,
              link,
              description,
              contribution,
              spotifyEpisodeId,
            },
            index
          ) => (
            <section
              id={id}
              key={id}
              className={
                'flex justify-evenly flex-col items-center px-4 my-6 ' +
                (index % 2 ? ' sm:flex-row-reverse' : ' sm:flex-row ')
              }
            >
              <div className="w-full sm:w-1/2 sm:pb-16">
                <h2 className="hover:underline">
                  <a target="_blank" href={link} rel="noreferrer">
                    {title}
                  </a>
                </h2>
                <p>{description}</p>
                <p className="mt-3 italic">{contribution}</p>
              </div>
              <div className="m-8 max-sm:w-full">
                {spotifyEpisodeId != undefined ? (
                  <iframe
                    className="h-52 w-full rounded sm:max-w-sm"
                    src={`https://open.spotify.com/embed/episode/${spotifyEpisodeId}?theme=1`}
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  ></iframe>
                ) : (
                  <Image
                    src={image}
                    alt={title}
                    className="mx-auto mb-12 h-36 w-36 rounded sm:mb-0"
                    title={title}
                  />
                )}
              </div>
            </section>
          )
        )}
    </main>
  )
}
