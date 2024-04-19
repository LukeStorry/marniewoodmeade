'use client'

import { useVisibleOnScroll } from './useVisibleOnScroll'
import Link from 'next/link'

export const NavBar = () => {
  const visible = useVisibleOnScroll()

  const top = visible ? ' top-0' : ' top-[-60px]'
  return (
    <nav
      className={
        'sticky z-50 bg-[#607f84] text-white shadow-lg transition-[top_0.6s]' +
        top
      }
    >
      <ul className="flex justify-around px-8 py-2 text-xl font-extrabold uppercase md:text-2xl">
        <li>
          <Link className="font-heading hover:text-[#f1f1e6]" href="/">
            About Me
          </Link>
        </li>
        <li>
          <Link className="font-heading hover:text-[#f1f1e6]" href="/audio">
            Audio
          </Link>
        </li>
        {/* <li>
          <Link href="/writing">Writing</Link>
        </li> */}
      </ul>
    </nav>
  )
}
