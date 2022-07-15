import { useEffect, useState } from 'react'

const useScrollYPos = () => {
   const [scrollYPos, setScrollYPos] = useState(0)

   useEffect(() => {
      const handleScroll = () => {
         setScrollYPos(window.scrollY)
      }

      window.addEventListener('scroll', handleScroll)

      return () => {
         window.removeEventListener('scroll', handleScroll)
      }
   }, [])

   return scrollYPos
}

export default useScrollYPos
