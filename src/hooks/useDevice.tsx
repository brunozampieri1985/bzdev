import { useState, useEffect } from 'react'

const useDevice = () => {
   const [device, setDevice] = useState(0)

   useEffect(() => {
      const handleResize = () => {
         setDevice(window.innerWidth)
      }
      handleResize()
      if (window !== undefined) {
         window.addEventListener('resize', handleResize)
      }
      return () => window.removeEventListener('resize', handleResize)
   }, [])

   return device
}


export default useDevice