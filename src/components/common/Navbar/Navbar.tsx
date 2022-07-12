import './Navbar.css'
import data from './Navbar.data'
import { LangType, useLang } from '@context/LangContext'
import Logo from '@components/common/Logo'

const Navbar: React.FC = () => {
   const { lang, changeLang } = useLang()
   return (
      <nav className="navbar">
         <Logo />
         {data.map((item, index) => (
            <a key={index} href={item.url}>{item.description[lang as LangType]}</a>
         ))}        
      </nav>
   )
}

export default Navbar
