import './NavbarDesktop.css'
import { createElement } from 'react'
import data from './Navbar.data'
import { LangType, useLang } from '@context/LangContext'
import useScrollYPos from '@hooks/useScrollYPos'
import Logo from '@components/common/Logo'
import ChangeLanguage from '../ChangeLanguage'

const NavbarDesktop: React.FC = () => {
   const { lang, changeLang } = useLang()
   const scrollYPos = useScrollYPos()

   return (
      <nav
         className="navbar-desktop"
         style={{
            backgroundColor:
               scrollYPos > 100 ? 'var(--theme-bg-color)' : 'transparent',
         }}>
         <div className="navbar-desktop-container">
            <Logo size="30px" />
            <ChangeLanguage />
            <ul className="navbar-desktop-menu" style={{
               backgroundColor:
               scrollYPos > 100 ? 'var(--theme-bg-color)' : 'transparent',
            }}>
               {data.map((item, index) => {
                  let Icon = item.icon
                  return (
                     <a href={item.url} key={index}>
                        <li className="navbar-desktop-menu-item">
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
