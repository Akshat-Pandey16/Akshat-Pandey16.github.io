import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './pages/Home'
import About from './pages/About'
import Internships from './pages/Internships'
import Projects from './pages/Projects'
import Skills from './pages/Skills'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Home />
    <About />
    <Internships />
    <Projects />
    <Skills />
  </React.StrictMode>,
)
