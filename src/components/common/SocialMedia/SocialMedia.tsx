import { createElement, CSSProperties } from 'react'
import './SocialMedia.css'
import data from './SocialMedia.data'

const SocialMedia: React.FC = () => (
   <div className="social-media">
      {data.map((item, index) => (
         <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer">
            <div
               className="social-media-icon"
               style={{ '--clr': `${item.color}` } as CSSProperties}>
               {createElement(item.icon)}
            </div>
         </a>
      ))}
   </div>
)

export default SocialMedia
