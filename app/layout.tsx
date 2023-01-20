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
      <body className="mx-auto max-w-5xl bg-[#fff9d6]">{children}</body>
    </html>
  )
}
