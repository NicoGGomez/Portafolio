import '../styles/Header.css'

import { useEffect, useState } from 'react';

import '../styles/AboutMe.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';


const Header = ({ onAboutClick, onProyectosClick, onExperienciaClick, onEducacionClick, onTecnoclogiasClick }) => {

    const [darkMode, setDarkMode] = useState(true)
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        if (darkMode) {
          document.body.classList.add('light-mode')
        } else {
          document.body.classList.remove('light-mode')
        }
      }, [darkMode])

    useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
      }, []);

    return (
        <header className={`contenedor header ${scrolled ? 'scrolled' : ''}`}>
            <nav className="nav">
                <ul>
                    <li><button onClick={onAboutClick}>Sobre mí 👨‍💼</button></li>
                    <li><button onClick={onProyectosClick}>Proyectos 🛠️</button></li>
                    <li><button onClick={onExperienciaClick}>Experiencia 🦾</button>
                    </li>
                    <li><button onClick={onEducacionClick}>Educación ✏️</button></li>
                    <li><button onClick={onEducacionClick}>Stack 🔧</button></li>
                    <li><button onClick={() => setDarkMode(!darkMode)}><FontAwesomeIcon title='GitHub' className='icon  github-icon' icon={faMoon} size="1x" /></button></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header