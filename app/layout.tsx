import { NavBar } from './NavBar'
import './globals.css'
import { Libre_Baskerville, Source_Sans_Pro } from '@next/font/google'

const headerFont = Libre_Baskerville({
  weight: '400',
  subsets: ['latin'],
  variable: '--header-font',
})

const bodyFont = Source_Sans_Pro({
  weight: '400',
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
      className={`min-w-[350px] text-lg ${headerFont.variable} ${bodyFont.variable}`}
    >
      <body className="mx-auto bg-[#f1f1e6] text-[#914327]">
        <NavBar />
        {children}
      </body>
    </html>
  )
}
