import './Contact.css'
import { useState } from 'react'
import Input from '@components/common/Input'
import Section from '@components/common/Section'
import { useLang } from '@context/LangContext'
import SectionTitle from '@components/common/SectionTitle'
import { FaEnvelope } from 'react-icons/fa'

const Contact: React.FC = () => {
   const [name, setName] = useState<string>()
   const [email, setEmail] = useState<string>()
   const [message, setMessage] = useState<string>()

   const { lang } = useLang()

   return (
      <Section label="Contact">
         <div className="contact-wrapper">
            <div className="contact-container">
               <div className="contact-title">
                  <SectionTitle icon={FaEnvelope}>
                     {lang === 'pt' ? 'Contato' : 'Contact'}
                  </SectionTitle>
               </div>
               <div className="contact-form">
                  <Input
                     type="text"
                     onChange={(e) => setName(e.target.value)}
                     placeholder={lang === 'pt' ? 'Seu Nome' : 'Your Name'}
                  />
                  <Input
                     type="text"
                     onChange={(e) => setEmail(e.target.value)}
                     placeholder={lang === 'pt' ? 'Seu Email' : 'Your Email'}
                  />
                  <Input
                     type="textarea"
                     onChange={(e) => setMessage(e.target.value)}
                     placeholder={lang === 'pt' ? 'Sua Mensagem' : 'Your Message'}
                  />
               </div>
            </div>
         </div>
      </Section>
   )
}
export default Contact
