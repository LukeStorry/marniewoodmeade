'use client'

import { debounce } from 'lodash'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export const NavBar = () => {
  const [prevScrollY, setPrevScrollY] = useState(0)
  const [visible, setVisible] = useState(true)

  const handleScroll = debounce(() => {
    const currentScrollY = window.scrollY
    setVisible(
      (prevScrollY > currentScrollY && prevScrollY - currentScrollY > 70) ||
        currentScrollY < 50
    )
    setPrevScrollY(currentScrollY)
  }, 100)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollY, visible, handleScroll])

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
