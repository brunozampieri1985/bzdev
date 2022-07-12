import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import Navbar from '@components/common/Navbar'
import Home from '@components/sections/Home'
import Projects from '@components/sections/Projects'
import Skills from '@components/sections/Skills'
import Contact from '@components/sections/Contact'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App>
      <Navbar />
      <Home />
      <Projects />
      <Skills />
      <Contact />
    </App>
  </React.StrictMode>
)
