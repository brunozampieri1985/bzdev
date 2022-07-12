import { ReactNode } from 'react'
import './Section.css'

type SectionProps = {
    children: ReactNode
    label: string
}

const Section:React.FC<SectionProps> = ({ children, label }) => (
    <section className="section-wrapper" aria-label={label} id={label}>
        <div className="section-content">
            {children}
        </div>
    </section>
)

export default Section