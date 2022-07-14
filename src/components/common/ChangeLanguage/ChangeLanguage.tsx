import './ChangeLanguage.css'
import { useLang } from '@context/LangContext'

const ChangeLanguage: React.FC = () => (
    <div className='change-language-wraper'>
        <input type="checkbox" name="language" id="change-language" />
        <label htmlFor="change-language"></label>
    </div>

)
export default ChangeLanguage