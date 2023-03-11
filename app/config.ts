import logo_broccoli from '@images/logo_broccoli.png'
import logo_glasto from '@images/logo_glasto.png'
import logo_great_escape from '@images/logo_great_escape.png'
import logo_lyrix_organix from '@images/logo_lyrix_organix.png'
import logo_sis from '@images/logo_sis.png'
import logo_afrikaeye from '@images/logo_afrikaeye.jpeg'
import logo_b247 from '@images/logo_b247.png'
import logo_tamasha from '@images/logo_tamasha.png'
import logo_transmission from '@images/logo_transmission.png'
import pod_dwelling from '@images/pod_dwelling.png'
import pod_backstage_roundhouse from '@images/pod_backstage_roundhouse.png'
import pod_gentle_activism from '@images/pod_gentle_activism.png'
import pod_glasto_commons from '@images/pod_glasto_commons.png'
import pod_table_manners from '@images/pod_table_manners.png'
import pod_tell_dem from '@images/pod_tell_dem.png'
import pod_anthems from '@images/pod_anthems.png'
import pod_unreality from '@images/pod_unreality.png'
import { StaticImageData } from 'next/image'

export type ImageInfo = {
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
  {
    title: 'Afrika Eye Film Festival',
    image: logo_afrikaeye,
    link: 'https://www.afrikaeye.org.uk/',
  },
  {
    title: 'Bristol 24/7',
    image: logo_b247,
    link: 'https://www.bristol247.com/',
  },
  {
    title: 'Tamasha Theatre Company',
    image: logo_tamasha,
    link: 'https://www.tamasha.org.uk/',
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
      id: 'dwelling',
      title: 'Dwelling',
      description:
        `Finding and fighting for feelings of home. 
        As the housing crisis deepens, home is becoming increasingly difficult to find. Join host Marnie Woodmeade as we speak to the people seeking alternatives. From abandoned buildings to lost rivers, they redefine what a home can be. But as restrictions on alternative lifestyles tighten, how can they protect their sanctuaries, sites of resistance and dwelling?`,
      image: pod_dwelling,
      link: 'https://audioboom.com/channels/5099388-dwelling',
      spotifyEpisodeId: '0ucFdbHrLBm9l2TdtLrVDk',
      contribution: "Featured as one of The Guardian's Pick Of The Weeks",
    },
    {
      id: 'gentle-activism',
      title: 'Gentle Activism',
      description:
        'Gentle Activism uses the oral histories collected by the Women Listening to Women project to explore the history of Bristol Crisis Service for Women. We celebrate the power of empathy and listening as agents of radical change and contemplate the past, present and future challenges of running a service for women and girls that is intersectional and inclusive.',
      image: pod_gentle_activism,
      link: 'https://www.selfinjurysupport.org.uk/blog/making-gentle-activism',
      spotifyEpisodeId: '22p1fGFTugohYRBo7lG3HO',
      contribution: '', //'The fact that an enormous amount of the raw content was so moving meant that editing was tough. I struggled with feeling like I was doing an injustice by choosing one segment over another. What did the world need to know from these women? This was a question I grappled with endlessly. Fortunately, we had a wonderful team of volunteers who had conducted the interviews and their feedback was invaluable. They were not just kind and generous, as so many of the people at Self Injury Support are, but also honest about their thoughts.',
    },
    {
      id: 'glasto-common-people',
      title: 'Glastonbury: The Common People',
      description:
        'The Common People is a podcast unearthing stories from Glastonbury’s South East corner. Recorded during the 2022 edition of the festival, each episode takes you on a deep dive into one of the most popular late-night areas of the largest greenfield festival in the world.',
      image: pod_glasto_commons,
      link: 'https://audioboom.com/channels/5083105',
      spotifyEpisodeId: '5eSJS63IGlsPFh8mlnKBaF',
      contribution: '',
    },
    {
      id: 'telldem',
      title: 'Tell Dem',
      description:
        'TELL DEM is where global majority movers and shakers reflect and critique work that lies across our cultural spectrum, using it to unpack connected, contemporary issues and dissect the affairs rooted in our respective cultures.',
      image: pod_tell_dem,
      link: 'https://audioboom.com/channels/5083828',
      spotifyEpisodeId: '6OmYqjTYRvHZcwwLjSIQDV',
      contribution: '',
    },
    {
      id: 'backstage-at-the-roundhouse',
      title: 'Backstage At The Roundhouse',
      description:
        'A home for niche, innovative and groundbreaking audio-led content that champions the voices of underrepresented young creatives. The Roundhouse is a hub of inspiration where artists and emerging talent create extraordinary work and where young people can grow creatively as individuals. We believe in the power of creativity to change lives.',
      image: pod_backstage_roundhouse,
      link: 'https://audioboom.com/channels/5071120',
      spotifyEpisodeId: '6uUg0IIN8gC1k2HwMylBws',
      contribution: '',
    },
  ],
  recorded: [
    {
      id: 'table-manners',
      title: 'Table Manners with Jessie and Lennie Ware',
      description:
        'Jessie Ware hosts a podcast about food, family, and the beautiful art of having a chat, with a bit of help from her chef extraordinaire mum Lennie. Each week guests from music, culture and politics drop by for a bite and a bit of a natter.',
      image: pod_table_manners,
      link: 'https://shows.acast.com/tablemanners',
      spotifyEpisodeId: undefined,
      contribution: '',
    },
  ],
  supported: [
    {
      id: 'unreality',
      title: 'UnReality',
      description:
        'Unreality exists where fact and fiction collide.        Let host Talia Augustidis guide you through four different stories; from dreams and fantasy to curated falsehoods, as each episode wavers precariously between the imagined and the truth.',
      image: pod_unreality,
      link: 'https://audioboom.com/channels/5093481',
      spotifyEpisodeId: undefined,
      contribution: 'Provided copy writing and media liasion',
    },

  ],
  voiced: [
    {
      id: 'anthems',
      title: 'Anthems',
      description:
        '“Anthems” is a collection of original manifestos, speeches, stories, poems, and rallying cries written and voiced by exceptional people, that celebrate and contemplate what it means to be human. Our beauty, our failures, our rich heritage, our rage, and our power. Proving that there is more that binds us together than sets us apart.',
      image: pod_anthems,
      link: 'https://open.spotify.com/episode/03AkLjXWnFaN6rhcx0T6oe',
      spotifyEpisodeId: '03AkLjXWnFaN6rhcx0T6oe',
      contribution: '',
    },
  ],
  // eslint-disable-next-line prettier/prettier
} satisfies Record<string, PodcastInfo[]>;

