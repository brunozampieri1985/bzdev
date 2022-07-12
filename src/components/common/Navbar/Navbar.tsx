import './Navbar.css'
import { useState } from 'react'
import data from './Navbar.data'
import { LangType, useLang } from '@context/LangContext'
import Logo from '@components/common/Logo'

const Navbar: React.FC = () => {
   const [isOpen, setIsOpen] = useState(false)
   const { lang, changeLang } = useLang()

   
   return (
      <nav className="navbar">
         <div className="navbar-container">
            <Logo />
            <div
               className={`navbar-menu-icon  ${
                  isOpen ? 'navbar-menu-icon-active' : ''
               }`}
               onClick={() => setIsOpen(!isOpen)}>
               <span />
               <span />
               <span />
            </div>
         </div>
       
            <ul className={`navbar-menu ${
               isOpen ? 'navbar-menu-active' : ''
            }`}>
               {data.map((item, index) => (
                  <li className="navbar-menu-item" key={index}>
                     <a className="navbar-menu-link" onClick={() => setIsOpen(false)} href={item.url}>{item.description[lang as LangType]}</a>
                  </li>
               ))}
            </ul>
       
      </nav>
   )
}

export default Navbar
