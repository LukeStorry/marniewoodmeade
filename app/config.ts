import logo_broccoli from '@images/logo_broccoli.png'
import logo_glasto from '@images/logo_glasto.png'
import logo_great_escape from '@images/logo_great_escape.png'
import logo_lyrix_organix from '@images/logo_lyrix_organix.png'
import logo_sis from '@images/logo_sis.png'
import logo_transmission from '@images/logo_transmission.png'
import pod_backstage_roundhouse from '@images/pod_backstage_roundhouse.png'
import pod_gentle_activism from '@images/pod_gentle_activism.png'
import pod_glasto_commons from '@images/pod_glasto_commons.png'
import pod_table_manners from '@images/pod_table_manners.png'
import pod_tell_dem from '@images/pod_tell_dem.png'
import pod_unreality from '@images/pod_unreality.png'
import { StaticImageData } from 'next/image'

type ImageInfo = {
  title: string
  image: StaticImageData
  link: string
}

export const WORKED_WITH: ImageInfo[] = [
  {
    title: 'Transmission Roundhouse',
    image: logo_transmission,
    link: 'https://roundhouse.org.uk/transmission/',
  },
  {
    title: 'Glastonbury Festival',
    image: logo_glasto,
    link: 'https://glastonburyfestivals.co.uk/',
  },
  {
    title: 'Broccoli Productions',
    image: logo_broccoli,
    link: 'https://broccoli.productions/',
  },
  {
    title: 'The Great Escape Festival',
    image: logo_great_escape,
    link: 'https://greatescapefestival.com/',
  },
  {
    title: 'Lyrix Organix',
    image: logo_lyrix_organix,
    link: 'http://lyrixorganix.co.uk/',
  },
  {
    title: 'Self Injury Support',
    image: logo_sis,
    link: 'https://selfinjurysupport.org.uk/',
  },
]


export type PodcastInfo = ImageInfo & {
  id: string
  description: string
  spotifyEpisodeId: string | undefined
  contribution: string
} 

export const PODCASTS = {
  produced: [
    {
      id: 'gentle-activism',
      title: 'Gentle Activism',
      description:
        ' This is a long description about the podcast that has a title of Gentle Activism',
      image: pod_gentle_activism,
      link: 'https://open.spotify.com/show/6rI3OowfoPlLBchxglyI53',
      spotifyEpisodeId: '22p1fGFTugohYRBo7lG3HO',
      contribution: 'I did things',
    },
    {
      id: 'glasto-common-people',
      title: 'Glastonbury: The Common People',
      description:
        ' This is a long description about the podcast that has a title of Glastonbury: The Common People',
      image: pod_glasto_commons,
      link: 'https://audioboom.com/channels/5083105',
      spotifyEpisodeId: '5eSJS63IGlsPFh8mlnKBaF',
      contribution: 'I did some things',
    },
    {
      id: 'telldem',
      title: 'Tell Dem',
      description:
        ' This is a long description about the podcast that has a title of Tell Dem',
      image: pod_tell_dem,
      link: 'https://audioboom.com/channels/5083828',
      spotifyEpisodeId: '6OmYqjTYRvHZcwwLjSIQDV',
      contribution: 'I did some things',
    },
    {
      id: 'backstage-at-the-roundhouse',
      title: 'Backstage At The Roundhouse',
      description:
        ' This is a long description about the podcast that has a title of Backstage At The Roundhouse',
      image: pod_backstage_roundhouse,
      link: 'https://audioboom.com/channels/5071120',
      spotifyEpisodeId: '6uUg0IIN8gC1k2HwMylBws',
      contribution: 'I did some things',
    },
  ],
  recorded: [
    {
      id: 'table-manners',
      title: 'Table Manners with Jessie and Lennie Ware',
      description:
        ' This is a long description about the podcast that has a title of Table Manners with Jessie and Lennie Ware',
      image: pod_table_manners,
      link: 'https://shows.acast.com/tablemanners',
      spotifyEpisodeId: undefined,
      contribution: 'I did some things',
    },
  ],
  supported: [
    {
      id: 'unreality',
      title: 'UnReality',
      description:
        ' This is a long description about the podcast that has a title of UnReality',
      image: pod_unreality,
      link: 'https://audioboom.com/channels/5093481',
      spotifyEpisodeId: undefined,
      contribution: 'I did some things',
    },
  ],
// eslint-disable-next-line prettier/prettier
} satisfies Record<string, PodcastInfo[]>;

