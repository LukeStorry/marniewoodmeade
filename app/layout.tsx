import { LeaningBarPics } from './components'
import './globals.css'
import { Genos, Glory } from '@next/font/google'
import Link from 'next/link'

const headerFont = Genos({
  subsets: ['latin'],
  variable: '--header-font',
})

const bodyFont = Glory({
  subsets: ['latin'],
  variable: '--body-font',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${headerFont.variable} ${bodyFont.variable} md:text-lg`}
    >
      <head />
      <body className="mx-auto max-w-5xl bg-[#f4ecc4]  text-[#5e4626]">
        <header className="mt-4 items-center p-4 md:flex">
          <div className="md:ml-auto">
            <h1 className="text-5xl font-thin md:text-7xl">
              <Link href="/">
                Marnie <br /> Woodmeade
              </Link>
            </h1>
            <h2 className="text-xl font-bold uppercase tracking-widest">
              Audio Producer
            </h2>
            <p className="max-w-sm">
              I am an audio producer, writer and campaigner specialising in
              stories of social movements and extraordinary people.
            </p>
          </div>
          <div className="m-8 mx-auto max-w-sm">
            <LeaningBarPics />
          </div>
        </header>
        {children}
      </body>
    </html>
  )
}
