import React from 'react'
import './Input.css'

type InputProps = {
   type: 'text' | 'textarea' | 'tel' | 'e-mail'
   placeholder: string
   value?: string
   onChange?: (event: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => void
}

const Input: React.FC<InputProps> = ({
   type,
   placeholder,
   onChange,
   value,
}) => {
   if (type === 'textarea') {
      return (
         <div className="input-field">
            <textarea onChange={onChange} value={value} required />
            <span>{placeholder}</span>
         </div>
      )
   }
   return (
      <div className="input-field">
         <input type={type} onChange={onChange} value={value} required />
         <span>{placeholder}</span>
      </div>
   )
}
export default Input
