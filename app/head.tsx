const DESCRIPTION =
  'I am an audio producer, writer and campaigner specialising in stories of social movements and extraordinary people.'
export default function Head() {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <link rel="icon" href="/favicon.ico" />
      <title>Marnie Woodmeade</title>
      <meta name="description" content={DESCRIPTION} />

      <meta property="og:title" content="Marnie Woodmeade" />
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="og:site_name" content="Marnie Woodmeade" />
      <meta
        property="og:image"
        content="public/images/marnie_lean_1.jpeg"
        key="ogimage"
      />

      <meta name="twitter:creator" content="@marnie_wm" />
      <meta name="twitter:card" content={DESCRIPTION} />
    </>
  )
}
