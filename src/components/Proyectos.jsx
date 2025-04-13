import '../styles/Proyectos.css'
import CardProyecto from './CardProyecto'

const Proyectos = () => {
    return (
        <>
            <div className="contenedor-principal-proyectos">

                <div className="contenedor-titulo">
                    <h2>Proyectos</h2>
                </div>

                <div className="contenedor-proyectos">
                    <CardProyecto 
                    img='../../public/imgs/foto2.png' 
                    nombre='NUMBER BLOCKS' 
                    descripcion='Diseñamos una interfaz interactiva basada en los personajes de Numberblocks, enfocada en mejorar la experiencia digital de niños en edad preescolar. Aplicamos principios de UX para lograr una navegación simple, visual y accesible, y trabajamos la UI con una estética colorida, botones grandes y personajes que guían al usuario. El proyecto combinó diseño, tecnología y educación para crear una experiencia lúdica e intuitiva.' 
                    lenguajes='[...,...]' />
                    <CardProyecto 
                    img='../../public/imgs/foto2.png' 
                    nombre='NUMBER BLOCKS' 
                    descripcion='Diseñamos una interfaz interactiva basada en los personajes de Numberblocks, enfocada en mejorar la experiencia digital de niños en edad preescolar. Aplicamos principios de UX para lograr una navegación simple, visual y accesible, y trabajamos la UI con una estética colorida, botones grandes y personajes que guían al usuario. El proyecto combinó diseño, tecnología y educación para crear una experiencia lúdica e intuitiva.' 
                    lenguajes='[...,...]' />
                    <CardProyecto 
                    img='../../public/imgs/foto2.png' 
                    nombre='NUMBER BLOCKS' 
                    descripcion='Diseñamos una interfaz interactiva basada en los personajes de Numberblocks, enfocada en mejorar la experiencia digital de niños en edad preescolar. Aplicamos principios de UX para lograr una navegación simple, visual y accesible, y trabajamos la UI con una estética colorida, botones grandes y personajes que guían al usuario. El proyecto combinó diseño, tecnología y educación para crear una experiencia lúdica e intuitiva.' 
                    lenguajes='[...,...]' />
                </div>

            </div>
        </>
    )
}

export default Proyectos