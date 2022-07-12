import {
   createContext,
   useState,
   useEffect,
   ReactNode,
   useContext,
} from 'react'

type LangContextType = {
   lang: string
   changeLang: (lang: string) => void
}

export type LangType = 'pt' | 'en'

export const LangContext = createContext<LangContextType>({} as LangContextType)

type LangProviderProps = {
   children: ReactNode
}

export const LangProvider: React.FC<LangProviderProps> = ({ children }) => {
   const [lang, setLang] = useState<LangType>('pt')

   useEffect(() => {
      const lang = localStorage.getItem('lang') || 'pt'
      setLang(lang as LangType)
   }, [])

   const changeLang = (lang: string) => {
      localStorage.setItem('lang', lang)
      setLang(lang as LangType)
   }

   return (
      <LangContext.Provider value={{ lang, changeLang }}>
         {children}
      </LangContext.Provider>
   )
}

export const useLang = () => {
   const { lang, changeLang } = useContext(LangContext)
   if (!lang || !changeLang) {
      throw new Error('useLang must be used within a LangProvider')
   }
   return {
      lang,
      changeLang
   }
}
