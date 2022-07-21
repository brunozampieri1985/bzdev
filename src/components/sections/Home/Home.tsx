import './Home.css'
import data from './Home.data'
import { LangType, useLang } from '@context/LangContext'
import Section from '@components/common/Section'
import MatrixBackground from '@components/common/MatrixBackground'
import SocialMedia from '@components/common/SocialMedia'

const Home: React.FC = () => {
   const { lang } = useLang()

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
            <p className="home-message">{data.message[lang as LangType]}</p>
            <div className="home-social">
               <SocialMedia />
            </div>
         </div>
      </Section>
   )
}
export default Home
