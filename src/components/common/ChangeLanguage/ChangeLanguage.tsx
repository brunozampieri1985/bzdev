import './ChangeLanguage.css'
import { useLang } from '@context/LangContext'
import BrFlag from '/br.svg'
import { useEffect, useRef } from 'react'

const ChangeLanguage: React.FC = () => {
   const { lang, changeLang } = useLang()
   const checkRef = useRef<HTMLInputElement>(null)

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { checked } = e.target
      console.log(checked)
      if (checked) {
         changeLang('en')
      } else {
         changeLang('pt')
      }
   }

   useEffect(() => {
      if (checkRef.current) {
         checkRef.current.checked = lang === 'en'
      }
   }, [])

   return (
      <div className="change-language-wrapper">
         <div className="change-language-pt">
            <img src={'br.svg'} alt="Brazilian flag" width={30} />
         </div>
         <input
            type="checkbox"
            name="language"
            id="change-language"
            onChange={(e) => handleChange(e)}
            ref={checkRef}
         />
         <div className="change-language-pt">
            <img src={'us.svg'} alt="USA flag" />
         </div>
      </div>
   )
}
export default ChangeLanguage
