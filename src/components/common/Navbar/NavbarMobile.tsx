import './NavbarMobile.css'
import { useState, createElement } from 'react'
import data from './Navbar.data'
import { LangType, useLang } from '@context/LangContext'
import Logo from '@components/common/Logo'
import ChangeLanguage from '../ChangeLanguage'
import useScrollYPos from '@hooks/useScrollYPos'
import SocialMedia from '../SocialMedia'

const NavbarMobile: React.FC = () => {
   const [isOpen, setIsOpen] = useState(false)
   const { lang } = useLang()
   const scrollYPos = useScrollYPos()

   return (
      <nav className="navbar" style={{
         backgroundColor: scrollYPos > 100 ? 'var(--theme-bg-color)' : 'transparent',

      }}>
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

         <ul className={`navbar-menu ${isOpen ? 'navbar-menu-active' : ''}`}>
            {data.map((item, index) => (
               <li className="navbar-menu-item" key={index}>
                  <a
                     className="navbar-menu-link"
                     onClick={() => setIsOpen(false)}
                     href={item.url}>
                     {createElement(item.icon)}
                     &nbsp;&nbsp;
                     {item.description[lang as LangType]}
                  </a>
               </li>
            ))}
            <li key={150}><ChangeLanguage /></li>
            <li key={151} className='navbar-menu-social'><SocialMedia /></li>
         </ul>
      </nav>
   )
}

export default NavbarMobile
