import './globals.css'
import { Indie_Flower, Roboto_Mono } from '@next/font/google'

const headerFont = Roboto_Mono({
  subsets: ['latin'],
  weight: '400',
  variable: '--header-font',
})

const bodyFont = Indie_Flower({
  subsets: ['latin'],
  weight: '400',
  variable: '--body-font',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${headerFont.variable} ${bodyFont.variable}`}>
      <head />
      <body className="mx-auto mt-6 max-w-md bg-gray-200">
        <header className="mx-auto max-w-md">
          <h1 className="text-center text-xl">Marnie Woodemeade</h1>
        </header>

        <nav className="m-8 flex justify-between gap-3">
          <ul> Page 1 </ul>
          <ul> Page 2 </ul>
          <ul> Page 3 </ul>
        </nav>

        {children}
      </body>
    </html>
  )
}
