import { ReactNode } from 'react'
import './App.css'
import { LangProvider } from '@context/LangContext'

type AppProps = {
   children: ReactNode
}

const App: React.FC<AppProps> = ({ children }) => (
   <LangProvider>
      <div className="app">{children}</div>
   </LangProvider>
)

export default App
