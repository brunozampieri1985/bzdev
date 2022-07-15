import { useEffect, useRef } from 'react'
import './MatrixBackground.css'

const MatrixBackground: React.FC<{ color?: string }> = ({ color }) => {
   const canvasRef = useRef<HTMLCanvasElement>(null)

   useEffect(() => {
      const canvas = canvasRef.current as HTMLCanvasElement
      const context = canvas.getContext('2d') as CanvasRenderingContext2D

      canvas.width = window.innerWidth
      canvas.height = window.innerHeight

      const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ"!@#$%¨&*()_+=-{}[]|:;<>,.?/'
      const nums = '0123456789'

      const alphabet = latin + nums

      const fontSize = 14
      const columns = canvas.width / fontSize

      const rainDrops = [] as number[]

      for (let x = 0; x < columns; x++) {
         rainDrops[x] = 1
      }

      const drawMatrix = () => {
         context.fillStyle = 'rgba(0, 0, 0, 0.05)'
         context.fillRect(0, 0, canvas.width, canvas.height)

         context.fillStyle = color ? color : '#666'
         context.font = fontSize + 'px Borgen'
         context.shadowBlur = 10

         for (let i = 0; i < rainDrops.length; i++) {
            const text = alphabet.charAt(
               Math.floor(Math.random() * alphabet.length)
            )
            context.fillText(text, i * fontSize, rainDrops[i] * fontSize)

            if (
               rainDrops[i] * fontSize > canvas.height &&
               Math.random() > 0.975
            ) {
               rainDrops[i] = 0
            }
            rainDrops[i]++
         }
      }

      const run = setInterval(drawMatrix, 70)
      return () => {
         clearInterval(run)
      }
   }, []) // eslint-disable-line

   return (
      <>
         <div className="matrix">
            <canvas ref={canvasRef} />
         </div>
         <div className="matrixOverlay" />
      </>
   )
}

export default MatrixBackground
