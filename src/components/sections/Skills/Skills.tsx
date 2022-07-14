import Section from '@components/common/Section'
import { CSSProperties } from 'react'
import './Skills.css'
import data from './Skills.data'
import { useLang, LangType } from '@context/LangContext'
import { useInView } from 'react-intersection-observer'
import SectionTitle from '@components/common/SectionTitle'
import { AiOutlineAreaChart } from 'react-icons/ai'

const Skills: React.FC = () => {
   const { skills, title } = data
   const { lang } = useLang()
   const { inView, ref } = useInView()
   return (
      <Section label="Skills">
         <div className="skills-wrapper" ref={ref}>
            <div className="skills-container">
               <div className="skills-title">
                  <SectionTitle icon={AiOutlineAreaChart}>{title[lang as LangType]}</SectionTitle>
               </div>
               <div className="skills-list">
               {inView && (
                  <div className="skills-card-container">
                     {skills.map((item, index) => (
                        <div className="skills-card" key={index}>
                           <div
                              className="skills-percentage"
                              style={
                                 {
                                    '--clr': `${item.color}`,
                                    '--num': item.percentage,
                                    '--animationCircle':
                                       440 - (440 * item.percentage) / 100,
                                 } as CSSProperties
                              }>
                              <div className="skills-dot" />
                              <svg>
                                 <circle cx="70" cy="70" r="70" />
                                 <circle cx="70" cy="70" r="70" />
                              </svg>
                              <div className="skills-percentage-number">
                                 <h2>
                                    {item.percentage}
                                    <span>%</span>
                                 </h2>
                                 <p>{item.skill}</p>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               )}
               </div>
            </div>
         </div>
      </Section>
   )
}
export default Skills
