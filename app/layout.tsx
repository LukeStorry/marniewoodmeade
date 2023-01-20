import './globals.css'
import { Genos, Glory } from '@next/font/google'

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
    <html lang="en" className={`${headerFont.variable} ${bodyFont.variable}`}>
      <head />
      <body className="mx-auto max-w-5xl bg-[#f4ecc4]  text-[#5e4626]">
        {children}
      </body>
    </html>
  )
}
