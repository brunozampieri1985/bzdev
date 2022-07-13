import Section from '@components/common/Section'
import { CSSProperties } from 'react'
import './Skills.css'

const Skills: React.FC = () => (
   <Section label="Skills">
      <div className="skills-wrapper">
         Skills
         <div className="skills-container">
            <div className="skills-card">
               <div
                  className="skills-percentage"
                  style={{ '--clr': '#04fc43', strokeDashoffset: (440 - (440 * 85) / 100)} as CSSProperties}>
                  <svg>
                     <circle cx="70" cy="70" r="70"></circle>
                     <circle cx="70" cy="70" r="70"></circle>
                  </svg>
               </div>
            </div>
         </div>
      </div>
   </Section>
)

export default Skills
