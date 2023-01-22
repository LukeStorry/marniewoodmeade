'use client'

import { PodcastInfo } from '@config'
import Image from 'next/image'
import Link from 'next/link'

export const PodcastInfoRow = ({
  id,
  title,
  image,
  link,
  description,
  contribution,
  spotifyEpisodeId,
  index,
}: PodcastInfo & { index: number }) => (
  <section
    id={id}
    key={id}
    className={
      'flex flex-col scroll-mt-24 items-center px-4 my-6 target:motion-safe:animate-highlight ' +
      (index % 2 ? ' sm:flex-row-reverse ' : ' sm:flex-row sm:text-right ')
    }
  >
    <div className="w-full sm:w-1/2 sm:pb-16">
      <a href={'/podcasts#' + id}>
        <h2>{title}</h2>
      </a>
      <p className="m-2 font-medium">{description}</p>
      <p className="">{contribution}</p>
      <Link
        className="pt-6 italic hover:underline"
        href={link}
        target={'_blank'}
      >
        See more ➡️
      </Link>
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
          className="mx-auto h-36 w-36 rounded"
          title={title}
        />
      )}
    </div>
  </section>
)
