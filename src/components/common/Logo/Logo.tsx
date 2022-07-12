import './Logo.css'

type LogoProps = {
   size?: string   
}

const Logo: React.FC<LogoProps> = ({ size }) => (
   <h1
      className="logo"
      style={{
         fontSize: size ?? '36px',
      }}>
      Bruno Zampieri
   </h1>
)
export default Logo
