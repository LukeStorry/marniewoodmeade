import './globals.css'

import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
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
