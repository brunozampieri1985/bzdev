import './NavbarDesktop.css'
import { createElement } from 'react'
import data from './Navbar.data'
import { LangType, useLang } from '@context/LangContext'
import Logo from '@components/common/Logo'

const NavbarDesktop: React.FC = () => {
   const { lang, changeLang } = useLang()

   return (
      <nav className="navbar-desktop">
         <div className="navbar-desktop-container">
            <Logo />
            <ul className="navbar-desktop-menu">
               {data.map((item, index) => {
                  let Icon = item.icon
                  return (
                     <a href={item.url}>
                        <li className="navbar-desktop-menu-item" key={index}>
                           <div className="navbar-desktop-menu-item-icon">
                              <Icon />
                           </div>
                           <div className="navbar-desktop-menu-item-text">
                              {item.description[lang as LangType]}
                           </div>
                        </li>
                     </a>
                  )
               })}
            </ul>
         </div>
      </nav>
   )
}

export default NavbarDesktop
