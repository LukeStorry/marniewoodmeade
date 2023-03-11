const TITLE = 'Marnie Woodmeade - Audio'
const DESCRIPTION =
  'I am an audio producer, here are some podcasts I have worked on.'

export default function Head() {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <link rel="icon" href="/favicon.ico" />
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />

      <meta property="og:title" content={TITLE} />
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="og:site_name" content={TITLE} />
      <meta
        property="og:image"
        content="https://marniewoodmeade.co.uk/images/marnie_listening.jpg"
        key="ogimage"
      />

      <meta name="twitter:creator" content="@marnie_wm" />
      <meta name="twitter:card" content="summary_large_image" />
    </>
  )
}
