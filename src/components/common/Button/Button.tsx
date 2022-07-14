import './Button.css'

type ButtonProps = {
   children: React.ReactNode
   onClick?: () => void
   variant?: 'primary' | 'secondary'
   size?: string
   fullWidth?: boolean
}
const Button: React.FC<ButtonProps> = ({
   children,
   fullWidth,
   onClick,
   size,
   variant,
}) => {
   const style: React.CSSProperties = {
      width: fullWidth ? 'calc(100% - 12px)' : 'fit-content',
      fontSize: size ?? '16px',
   }

   return (
      <button
         className={`button ${
            variant ? `button-${variant}` : 'button-primary'
         }`}
         onClick={onClick}
         style={style}>
         {children}
      </button>
   )
}
export default Button
