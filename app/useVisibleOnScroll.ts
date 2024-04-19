import { debounce } from 'lodash'
import { useEffect, useState } from 'react'

export function useVisibleOnScroll() {
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
    if (!window) return
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollY, visible, handleScroll])

  return visible
}
