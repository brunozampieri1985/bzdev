import { createElement } from 'react'
import { IconType } from 'react-icons'
import './SectionTitle.css'

type SectionTitleProps = {
   children: React.ReactNode
   icon?: IconType
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, icon }) => (
   <h2 className="section-title">
      {icon && (
         <>
            <span className="section-icon">
               {icon ? createElement(icon) : ''}
            </span>
            &nbsp;
         </>
      )}
      {children}
   </h2>
)
export default SectionTitle
