import Section from '@components/common/Section'
import './Projects.css'
import data from './Projects.data'
import { useLang, LangType } from '@context/LangContext'
import SectionTitle from '@components/common/SectionTitle'
import { GoProject } from 'react-icons/go'
import TechStack from '@components/common/TechStack'

const Projects: React.FC = () => {
   const { lang } = useLang()
   const { title, projects } = data

   return (
      <Section label="Projects">
         <div className="projects-wrapper">
            <SectionTitle icon={GoProject}>
               {title[lang as LangType]}
            </SectionTitle>
            <div className="projects-list">
               {projects.map((project, index) => (
                  <div className="project-card" key={index}>                    
                        <img
                           src={project.image}
                           alt={project.description[lang as LangType]}
                           width={300}
                           height={300 / 1.97}
                           className="project-image"
                        />
                     
                     <div className="project-info">
                        <div className="project-title">{project.title}</div>
                        <div className="project-description">
                           {project.description[lang as LangType]}
                        </div>
                     </div>
                     <div className="project-stack">
                        {project.tech.map((tech) => (
                           <TechStack tech={tech} size={24} />
                        ))}
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </Section>
   )
}

export default Projects
