import './Home.css'
import data from './Home.data'
import { LangType, useLang } from '@context/LangContext'
import Section from '@components/common/Section'
import MatrixBackground from '@components/common/MatrixBackground'
import { useEffect, useRef, useState } from 'react'
import SocialMedia from '@components/common/SocialMedia'

const Home: React.FC = () => {
   const { lang } = useLang()
   const [isTyped, setIsTyped] = useState(false)

   const paragraphRef = useRef<HTMLParagraphElement>(null)

   useEffect(() => {
      if (paragraphRef.current) {
         if (!isTyped) {
            let index = 0
            let text = data.whoami[lang as LangType]
            const interval = setInterval(() => {
               if (index < text.length) {
                  paragraphRef.current!.innerHTML += text[index]
                  index++
               } else {
                  setIsTyped(true)
                  clearInterval(interval)
               }
            }, 100)
         }
      }
   }, [isTyped])

   return (
      <Section label="Home">
         <MatrixBackground />
         <div className="home-wrapper">
            <div className="home-profile-img">
               <img src="profile.webp" alt="Profile Picture" />
            </div>
            <div className="home-greetings">
               <h1>{data.greetings[lang as LangType]}</h1>
            </div>
            <p className="home-message" ref={paragraphRef}></p>
            <div className="home-social">
               <SocialMedia />
            </div>
         </div>
      </Section>
   )
}
export default Home
