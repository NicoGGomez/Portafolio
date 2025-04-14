import { useRef } from 'react'

import Header from '../src/components/Header'
import AboutMe from '../src/components/AboutMe'
import Proyectos from './components/Proyectos'
import Educacion from './components/Educacion'
import Experiencia from './components/Experiencia'
import './styles/App.css'

function App() {

  const aboutRef = useRef(null)
  const proyectosRef = useRef(null)
  const experienciaRef = useRef(null)
  const educacionRef = useRef(null)

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Header 
        onAboutClick={() => scrollTo(aboutRef)}
        onProyectosClick={() => scrollTo(proyectosRef)}
        onExperienciaClick={() => scrollTo(experienciaRef)}
        onEducacionClick={() => scrollTo(educacionRef)}
      />
      <div ref={aboutRef}><AboutMe /></div>
      <div ref={proyectosRef}><Proyectos /></div>
      <div ref={experienciaRef}><Experiencia /></div>
      <div ref={educacionRef}><Educacion /></div>
    </>
  )
}

export default App
